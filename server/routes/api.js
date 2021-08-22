var express = require("express");
var router = express.Router();
var multer = require("multer");
var multerS3 = require("multer-s3");
var AWS = require("aws-sdk");

const Item = require("../models/Item");
const apiController = require("../controllers/apiController");
const transactionController = require("../controllers/transcationController");

var s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_KEY_ID,
  bucket: "e-commerce-rifky",
});

/* GET home page. */
router.get("/item", apiController.getItems);
router.post("/item", (req, res) => {
  console.log(req.files.image.name)
  let name = req.files.image.name
  const { title, rate, description, price, brand, detailProduct } = req.body;
  let imageName = Date.now() + "|" + name
  
    s3.upload({
    Bucket: "e-commerce-rifky",
    Key: imageName,
    Body: req.files.image.data,
    ACL: 'public-read',
  }, function (err, data) {
      if (err) {
        console.log(err);
      }
      console.log(data);
    });
    Item.create({
        title,
        rate,
        description,
        price,
        brand,
        detailProduct,
        image: imageName,
      }).then(item => {
        res.status(201).json({success: true, item})
    }).catch(err => {
        console.log(err)
    })
});
router.put("/item/:id", apiController.updateItem);
router.delete("/item/:id", apiController.deleteItem);

router.get("/transaction", transactionController.getTransactions);
router.post("/transaction", transactionController.createTransaction);
router.put("/transaction/:id", transactionController.updateTransaction);
router.delete("/transaction/:id", transactionController.deleteTransaction);

module.exports = router;
