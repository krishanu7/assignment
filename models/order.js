const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: { type: String },
  productId: { type: String },
  variantId: { type: String },
  sizeId: { type: String },
  cost: { type: Number },
});
module.exports = mongoose.model("Order", OrderSchema);
