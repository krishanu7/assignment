const Variant = require("../models/variant.js");
const Size = require("../models/size.js");
const Order = require("../models/order.js");
let ObjectId = require("mongodb").ObjectId;

const placeOrder = async (req, res) => {
  try {
    const { userId, productId, variantId, sizeId } = req.params;
    const variantIdObj = new ObjectId(variantId);
    const sizeIdObj = new ObjectId(sizeId);

    const variant = await Variant.find({ _id: variantIdObj }).populate(
      "products"
    );
    const size = await Size.find({ _id: sizeIdObj })
      .populate("variants")
      .populate("discount");

    if (!variant || !size) {
      return res
        .status(404)
        .json({ error: "Variant, Size, Product, or Discount not found" });
    }
    const product = variant[0].products.find(
      (p) => p._id.toString() === productId
    );
    if (!product) {
      return res
        .status(404)
        .json({ error: "Product not found for the given variant" });
    }
    const discount = size[0].discount;
    const price = product.price * (1 - discount.discount / 100);

    const order = new Order({
      userId,
      productId,
      variantId,
      sizeId,
      cost: price,
    });
    await order.save();
    res.status(200).json({ order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to place order" });
  }
};

module.exports = { placeOrder };

