const Item = require("../models/Item");




module.exports = {
  getItems: async (req, res) => {
    try {
      const items = await Item.find();
      res.status(200).json(items);
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "something wrong",
        err,
      });
    }
  },
  updateItem: async (req, res) => {
    const { title, rate, description, price, brand, detailProduct } = req.body;
    const image = Date.now() +"|" + req.files.image.name;
    try {
      const item = await Item.findByIdAndUpdate(req.params.id,{
        title,
        rate,
        description,
        price,
        brand,
        detailProduct,
        image,
      }, {new: true});
      res.status(201).json({success: true, item});
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "something wrong",
        err,
      });
    }
  },
  deleteItem: async (req, res) => {
    try {
      const item = await Item.findByIdAndRemove(req.params.id);
      res.status(201).json({success: true, item});
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "something wrong",
        err,
      });
    }
  },
};
