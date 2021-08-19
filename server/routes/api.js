var express = require('express');
var router = express.Router();

const apiController = require("../controllers/apiController")

/* GET home page. */
router.get('/', apiController.getItems)
router.post('/', apiController.createItem)
router.put('/:id', apiController.updateItem)
router.delete('/:id', apiController.deleteItem)

module.exports = router;
