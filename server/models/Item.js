const { Schema, model } = require("mongoose");

const itemSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    rate: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    detailProduct: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Item", itemSchema);
