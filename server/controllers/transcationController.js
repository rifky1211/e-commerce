const Transaction = require("../models/Transaction");
var path = require("path");

module.exports = {
  getTransactions: async (req, res) => {
    try {
      const transactions = await Transaction.find();
      res.status(200).json(transactions);
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "something wrong",
        err,
      });
    }
  },
  createTransaction: async (req, res) => {
    try {
      const transaction = await Transaction.create(req.body);
      res.status(201).json({success: true, transaction});
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "something wrong",
        err,
      });
    }
  },
  updateTransaction: async (req, res) => {
    try {
      const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, {new: true});
      res.status(201).json({success: true, transaction});
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "something wrong",
        err,
      });
    }
  },
  deleteTransaction: async (req, res) => {
    try {
      const transaction = await Transaction.findByIdAndRemove(req.params.id);
      res.status(201).json({success: true, transaction});
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "something wrong",
        err,
      });
    }
  },
};
