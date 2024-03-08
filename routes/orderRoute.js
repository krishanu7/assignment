const express = require("express");
const route = express.Router();
const { getOrder } = require("../controllers/orderController.js");

route.get("/:userId", getOrder);

module.exports = route;
