const store = require('../storage/receiptStore');
const calculatePoints = require('../service/pointService');
const { v4:uuidv4 } = require('uuid');
const { isUUID } = require('validator');

const processReceipt = (req,res) => {
    const receipt = req.body;
    const receiptId = uuidv4();
    const points = calculatePoints(receipt);

    store[receiptId] = { 
        receipt,
        points
    };

    res.status(200).json({ 
        id: receiptId 
    });
};

const getPoints = (req,res) => {
    const receiptId = req.params.id;

    if (!isUUID(receiptId,4)) {
        return res.status(400).json({
            message: "Invalid ID format"
        });
    }
    const receipt = store[receiptId];
    if (!receipt){
        return res.status(404).json({
            message: "Receipt does not exist for this ID"
        })
    }
    return res.status(200).json({
        points: receipt.points 
    });
};

module.exports = { processReceipt,getPoints };