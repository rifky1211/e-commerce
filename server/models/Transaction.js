const { Schema, model } = require("mongoose");

const transactionSchema = new Schema(
  {
    nameProduct:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    capacity: {
        type: String,
        required: true
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Transaction", transactionSchema);
