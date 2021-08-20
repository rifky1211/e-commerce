var express = require('express');
var router = express.Router();

const apiController = require("../controllers/apiController")
const transactionController = require("../controllers/transcationController")

/* GET home page. */
router.get('/item', apiController.getItems)
router.post('/item', apiController.createItem)
router.put('/item/:id', apiController.updateItem)
router.delete('/item/:id', apiController.deleteItem)

router.get("/transaction", transactionController.getTransactions)
router.post("/transaction", transactionController.createTransaction)
router.put("/transaction/:id", transactionController.updateTransaction)
router.delete("/transaction/:id", transactionController.deleteTransaction)

module.exports = router;
