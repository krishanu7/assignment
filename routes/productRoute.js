const express = require("express");
const route = express.Router();
const { placeOrder } = require("../controllers/productContorller.js");

route.get("/:userId/:productId/:variantId/:sizeId", placeOrder);

module.exports = route;


