const mongoose = require("mongoose");
const VariantSchema = new mongoose.Schema({
  name: { type: String },
  products: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Product'
    }
  ],
});
module.exports = mongoose.model("Variant", VariantSchema);
