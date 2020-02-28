// get dependencies
const express = require('express'); // call express
const itemRouter = express.Router(); // get an instance of express router

// get files
const Auction = require('../models/auction.model'); // get Auction schema
const Item = require('../models/item.model'); // get Item schema
const User = require('../models/user.model')
// routes for all item routes
//==========================================
// Add item route
itemRouter.post('/addItem', (req, res) => {

    // Get item values from the request
    var item = new Item();
    item.auctionID = req.body.auctionID;
    item.itemCode = req.body.itemCode;
    item.itemName = req.body.itemName;
    item.price = req.body.price;
    item.description = req.body.description;
    item.quantity = req.body.quantity;
    item.sellerID = req.body.sellerID;
    item.type = req.body.type;
    var code;
    // Generate the item code
    Item.find({ auctionID: item.auctionID, sellerID: item.sellerID },
        (err, items) => {
            if (items) {
                for(i = 0; i < items.length; i++) {
                    if (items[i].type == "auction") {
                        
                        if(i == (items.length-1) || item.length == 1){
                            code = items[i].itemCode.slice(3, 5)
                        }
                    }
                };
                if (!code) {
                    code = 0
                }
                if(item.type == "auction"){
                    code++
                    item.itemCode += (code);
                    console.log(item.itemCode)    
                }
               
                Auction.findById(item.auctionID, (err, auction) => {
                    // If auction is found
                    if (auction) {
                        // Save the item to the database
                        item.save((err, item) => {
                            if (!err) {
                                return res.status(200).json({item});
                            }
                            else {
                                return res.status(404).json(err);
                                console.log(err);
                            }
                        });
                    }
                    // Display when no auction is found
                    else console.log('No auction found');
                });

            }
            else{
                return res.status(404)
            }
        })

    // Find the auction to add the item
    // Auction.findById(item.auctionID, (err, auction) => {
    //     // If auction is found
    //     if (auction) {
    //         console.log(item)
    //         // Save the item to the database
    //         item.save((err, item) => {
    //             if (!err) {
    //                 return res.status(200).json({item});
    //             }
    //             else {
    //                 return res.status(404).json(err);
    //                 console.log(err);
    //             }
    //         });
    //     }
    //     // Display when no auction is found
    //     else console.log('No auction found');
    // });
});

// Find item routes
// Find all items in database route
// itemRouter.get('/findAllItems', (req, res) => {
//     Item.find(
//         (err, item) => {
//         if (!err) res.send(item);
//         else res.send(err);
//     });
// });

// Find all items in an Auction route
itemRouter.get('/findItemsInAuction/:auctionID', (req, res) => {
    Item.find({ auctionID: req.params.auctionID },
        (err, item) => {
            if (!err) res.send(item);
            else res.send(err);
        });
});

// Get item by item code
itemRouter.get('/getItemByItemCode/:itemCode', (req, res) => {

    Item.find({ itemCode: req.params.itemCode.toUpperCase() },
        (err, item) => {
            if (item) {
                res.send(item);
            }
        });
});

// Edit item route
itemRouter.put('/editItem', (req, res) => {
    let userID;
    if (req.body.buyerID) {
        User.findOne({ alias: req.body.buyerID.toUpperCase() },
            (err, user) => {
                if (!user) {
                    console.log(err)
                    return res.send('Could not find user  :' + JSON.stringify(err, undefined, 2));
                } else {
                    userID = user._id

                    // Get new edit item info
                    var editItem = new Item({
                        _id: req.body._id,
                        itemName: req.body.itemName,
                        itemCode: req.body.itemCode,
                        quantity: req.body.quantity,
                        price: req.body.price,
                        buyerID: userID,
                        description: req.body.description,
                        paid: req.body.paid
                    });
                    console.log(req.body.paid)
                    Item.findByIdAndUpdate(req.body._id, { $set: editItem }, { new: true },
                        (err, editItem) => {
                            if (!err) { 
                                return res.status(200).json( {status: true, editItem })
                             }
                            else {
                                return res.status(404).json({status: false, message: 'Error in updating item '}); 
                            }
                    });

                }

            })
    }else{
    
    // Get new edit item info
    var editItem = new Item({
        _id: req.body._id,
        itemName: req.body.itemName,
        itemCode: req.body.itemCode,
        quantity: req.body.quantity,
        description: req.body.description,
    });

    Item.findByIdAndUpdate(req.body._id, { $set: editItem }, { new: true },
        (err, item) => {
            if (!err) { 
                //res.send(editedItem);
                return res.status(200).json({ status: true, item});
             }
            else {
                return res.send('Error in updating auction :' + JSON.stringify(err, undefined, 2)); 
            }
    });
    }
});

// Delete item routes
// Delete item by id on the params
itemRouter.delete('/deleteItemById/:id', (req, res) => {
    Item.findByIdAndDelete(req.params.id, (err, item) => {
        if (!err) {
            res.send(item);
        }
        else {
            res.send(err);
        }
    });
});

// Sell item route
itemRouter.post('/sellItem/:id', (req, res) => {

    price = req.body.price;
    buyerID = req.body.buyerID;

    Item.findByIdAndUpdate(req.params.id, { $set: { price: price, buyerID: buyerID } }, (err, item) => {
        if (item) {
            res.send(item);
        }
        else {
            res.send(err);
        }
    })
});

// Get item by buyerID
itemRouter.get('/getBuyerItems/:buyerID', (req, res) => {

    Item.find({ buyerID: req.params.buyerID },
        (err, items) => {
            if (!err) {
                res.send(items);
            }
            else {
                res.send(err);
            }
        });
});

// Get sellers items in an auction
itemRouter.post('/getSellerItemsInAuction/', (req, res) => {

    Item.find({ sellerID: req.body.sellerID, auctionID: req.body.auctionID }, (err, items) => {
        if (!err) {
            res.send(items);
        }
        else {
            res.send(err);
        }
    });
});

// Get item info by id
itemRouter.get('/getItemInfoById/:id', (req, res) => {

    Item.findById(req.params.id, (err, item) => {
        if (!err) {
            res.send(item);
        }
        else {
            res.send(err);
        }
    })
});

// return the router
module.exports = itemRouter;