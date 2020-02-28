// get dependencies
const express = require('express'); // call express
const userRouter = express.Router(); // get an instance of express router
const passport = require('passport'); // call passport
const _ = require('lodash'); // call lodash
const bcrypt = require('bcryptjs'); // call bcrypt
var nodemailer = require('nodemailer'); // call nodemailer

// get files
const User = require('../models/user.model'); // get User schema
const jwt = require('../config/jwt');

// routes for all user routes
//================================================
// Register route
userRouter.post('/register', (req, res, next) => {

    // Get new user details
    var newUser = new User();
    newUser.firstName = req.body.firstName;
    newUser.lastName = req.body.lastName;
    newUser.alias = req.body.alias;
    newUser.email = req.body.email;
    newUser.password = req.body.password;
    newUser.type = req.body.type;

    // Save to the database
    newUser.save((err, doc) => {
        if (!err)
            res.send(doc);
        else
        {
            console.log(err);
            if (err.code == 11000){
                if(err.keyPattern.email){
                    res.status(422).send(['Duplicate email address found.']);
                }else{
                    res.status(422).send(['Duplicate Alias address found.']);
                }
            }
            else
                return next(err);
        }
    });
});

// Authenticate
userRouter.post('/authenticate', (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {
        
        // error from passport middleware
        if (err)
            return res.status(400).json(err);
        // registered user
        else if (user)
            return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else
        return res.status(404).json(info);
    })
    (req, res)
});

// Dashboard
userRouter.get('/dashboard', jwt.verifyJwtToken, (req, res, next) => {
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, user: _.pick(user, ['_id', 'firstName', 'lastName', 'alias', 'email', 'type']) });
        });
});

// Get user by id
userRouter.get('/getUserById/:id', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (user){
            res.send(user);
        }
        else {
            console.log(err);
        }
    });
});

// Edit User
userRouter.put('/editUser', (req, res) => {

    // Get new user details
    var editUser = new User({
        _id: req.body._id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        alias: req.body.alias,
    })

    // Find user by id and update
    User.findByIdAndUpdate(req.body._id, { $set: editUser }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in updating user:' + JSON.stringify(err, undefined, 2)); }
    });
});

// Change password
userRouter.put('/changePassword/:token', jwt.verifyJwtToken, (req, res, next) => {

    var newPassword = req.body.newPassword;

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newPassword, salt, (err, hash) => {
            this.newPassword = hash;
            this.saltSecret = salt;

            User.findOneAndUpdate({ _id: req._id }, { $set: { password: this.newPassword, saltSecret: this.saltSecret }}, { new: true},
                (err, user) => {
                    if (!err){
                        res.send(user);
                    }
                    else{
                        console.log('Error in updating user:' + JSON.stringify(err, undefined, 2));
                    }
            });
        });
    });
});

// Forgot Password
userRouter.post('/forgotPassword', (req, res) => {

    userEmail = req.body.email;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'cas.liveauction@gmail.com',
          pass: 'CASliveauction2020'
        }
    });

    User.findOne({ email: userEmail },
        (err, user) => {
            if (user) {
                token = user.generateJwt();
                dateTime = new Date();

                User.findOneAndUpdate({ email: userEmail},
                    {$set: { resetPasswordToken: token, resetPasswordTokenExpire: dateTime}}, {new: true},
                    (err, user) => {
                        if (user){
                            
                            var mailOptions = {
                                from: 'cas.liveauction@gmail.com',
                                to: userEmail,
                                subject: 'CAS reset password',
                                text: 'Click the link to reset password ' + "http://localhost:4200/user/resetPassword/" + token,
                            };

                            transporter.sendMail(mailOptions, function(err, info){
                                if (err){
                                    console.log(err);
                                    return res.status(404).json({ status: false, message: 'coudld not send email' });
                                }
                                else {
                                    console.log('Email sent: ' + info.response);
                                    return res.status(200).json({ "message": "sent" });
                                }
                            });
                        }
                        else {
                            console.log(err);
                        }
                });
            }
            else {
                console.log('Email not found');
                return res.status(404).json({ status: false, message: 'Email not found.' });
            }
    });
});

// Reset password
userRouter.put('/resetPassword/:token', (req, res, next) => {
    
    var token = req.params.token;

    console.log(req.body.newPassword);

    User.findOne({resetPasswordToken: token}, (err, user) => {
        if (user){
            var time = Math.abs(user.resetPasswordTokenExpire - new Date())/3600000;

            if(time < 1){
                
                var password;
                var saltSecret;
                
                //bcrypt password
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(req.body.newPassword, salt, (err, hash) => {
                        password = hash;
                        saltSecret = salt;

                        User.findOneAndUpdate({ "email": user.email }, { $set: { "password": password, "saltSecret": saltSecret, "resetPasswordToken": null, "resetPasswordTokenExpire": null} }, { new: true },
                            (err, user) => {
                                if (!user) {
                                    return res.status(404).json({ "message": "Password change was unsuccessfull" })
                                } else {
                                    console.log('changed');
                                    return res.status(200).json({ "message": "Password changed" });
                                }
                            })
                    });
                });
            }
            else{
                return res.status(404).json({ status: false, message: 'Reset time has expired.' });
            }
        }
        else {
            return res.status(404).json({ status: false, message: 'User record not found.' });
        }
    });
});

// Find all users
userRouter.get('/getUsers', (req, res) => {
    User.find((err, users) => {
        if (users){
            res.send(users);
        }
        else {
            console.log(err);
        }
    })
});

// Delete user by id
userRouter.delete('/deleteUser/:id', (req, res) => {
    console.log(req.params.id);
    User.findByIdAndDelete(req.params.id, (err, user) => {
        if (user) {
            //res.send(user);
            return res.status(200).json({user, message: "User Deleted" })
        }
        else {
            console.log(err);
            return res.status(404).json({ status: false, message: "Delete failed" }); 
        }
    })
});

// return the router
module.exports = userRouter;