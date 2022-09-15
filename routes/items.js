const express = require("express");
const router = express.Router();
const itemsController = require("../controllers/items");

router.get("/", itemsController.getItems);

router.post("/createItem", itemsController.createItem);

module.exports = router;
