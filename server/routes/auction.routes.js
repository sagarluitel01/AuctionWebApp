// get dependencies
const express = require('express'); // call express
const auctionRouter = express.Router(); // get an instance of express router
const _ = require('lodash');

// get files
const Auction = require('../models/auction.model'); // get Auction schema
const User = require('../models/user.model'); // get User schema

// routes for all auction routes
//================================================
// Create auction route
auctionRouter.post('/createAuction', (req, res, next) => {
    
    // get auction values from the request
    var newAuction = new Auction();

    newAuction.auctionName = req.body.auctionName;
    newAuction.maxItems = req.body.maxItems;
    newAuction.address = req.body.address;
    newAuction.dateTime = req.body.dateTime;
    newAuction.fee = req.body.fee;
    
    // save the auction to the database
    newAuction.save((err, doc) => {
        if (!err){
            res.send(doc);
        }
        else {
            if (err.code == 11000){
                console.log(err);
                res.status(422).send(['Duplicate auction found.']);
            }
            else
                return next(err);
        }
    });
});

// Find auction routes
// Find all auctions route
auctionRouter.get('/findAllAuctions', (req, res) => {
    Auction.find((err, auctions) => {
        if (!err) {
            res.send(auctions);
        }
        else { 
            res.send(err);
        }
    });
});

// Find auction by id on the params route
auctionRouter.get('/findAuctionById/:id', (req, res) => {
    Auction.findById(req.params.id,
        (err, auction) => {
        if (!err) { 
            res.send(auction);
        }
        else { res.send(err);}
    })
});

// Edit auction by id on the params route
auctionRouter.put('/editAuction/:id', (req, res) => {

    // Get new edit auction info
    var editAuction = new Auction({
        _id: req.body._id,
        auctionName: req.body.auctionName,
        maxItems: req.body.maxItems,
        address: req.body.address,
        dateTime: req.body.dateTime,
        fee: req.body.fee,
        participantID: req.body.participantID,
    });
    
    // Find auction by id and update
    Auction.findByIdAndUpdate(req.params.id, { $set: editAuction }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else {console.log('Error in updating auction :' + JSON.stringify(err, undefined, 2));}
    });
});

// Participate in auction route
auctionRouter.post('/participateAuction/:id', (req, res) => {

    // get participant id from request body
    participantID = req.body.participantID;

    // If participant id valid
    if (participantID) {
        // Find the auction and add the participant id value to the database
        Auction.findByIdAndUpdate(req.params.id, { $addToSet: { participantID: participantID }}, (err, auction) => {
            if (auction) {
                res.send(auction);
            }
            else {
                res.send(err);
                console.log(err);
            }
        })
    }
    else {
        console.log("Invalid participantID");
    }
});

// Get all participants in auction route
auctionRouter.get('/auctionParticipants/:id', (req, res) => {

    // Find auction by id on the params
    Auction.findById(req.params.id, (err, auction) => {
        // If auction is found
        if (auction){

            // Get all of the participants id
            participantsID = auction.participantID;

            // Then find the user info of each participants by participants id
            User.find({_id: participantsID}, (err, participants) => {
                if (participants){
                    res.send(participants);
                }
                else {
                    res.send(err);
                }
            })
        }
        else{
            res.send(err);
            console.log(err);
        }
    })
});

// Delete auction routes
// delete auction by id on the parameter
auctionRouter.delete('/deleteAuction/:id', (req, res) => {
    Auction.findByIdAndDelete(req.params.id, (err, auction) => {
        if (!err) { res.send(auction);}
        else { res.send(err);}
    })
});

// Not participate in auction
auctionRouter.put('/notParticipate/:id', (req, res) => {

    auctionID = req.params.id;
    participantID = req.body.participantID;

    Auction.findByIdAndUpdate(auctionID, { $pull: { participantID: participantID }},
        (err, auction) => {
            if (auction) {
                res.send(auction);
            }
            else {
                res.send(err);
                console.log(err);
            }
        });
});

// return the router
module.exports = auctionRouter;