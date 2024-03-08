const mongoose = require("mongoose");
const SizeSchema = new mongoose.Schema({
  name: { type: String },
  variants: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Variant'
    }
  ],
  discount:
    {
      type: mongoose.Types.ObjectId,
      ref: 'Discount'
    }
  
});
module.exports = mongoose.model("Size", SizeSchema);
