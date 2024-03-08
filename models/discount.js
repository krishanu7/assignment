const mongoose = require("mongoose");
const DiscountSchema = new mongoose.Schema({
  discount: { type: Number },
});
module.exports = mongoose.model("Discount", DiscountSchema);
