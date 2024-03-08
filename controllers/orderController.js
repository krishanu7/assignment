const Order = require("../models/order.js");

const getOrder = async (req, res) => {
    const userId = req.params.userId;
    try {
        const orders = await Order.find({ userId });
        const formattedOrders = orders.map(order => ({
            orderId: order._id,
            productId: order.productId,
            variantId: order.variantId,
            sizeId: order.sizeId,
            cost: order.cost
        }));
        res.status(200).json({
            count: formattedOrders.length,
            orders: formattedOrders
        });
    } catch (error) {
        res.status(500).json({ error: "Error fetching user orders" });
    }
}
module.exports = { getOrder };