const express = require("express");
const { auth, merchant } = require("../../middleware/auth");
const Order = require("../../models/Order");
const User = require("../../models/User");

const router = express.Router();

// create a new order
// @post request
// end point :  /api/orders/create

router.post("/create", auth, async (req, res) => {
  try {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      totalPrice,
      merchant_id,
    } = req.body;

    const order = new Order({
      orderItems,
      customer_id: req.user.id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      totalPrice,
      merchant_id,
    });
    await order.save();
    return res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error: errror.message });
  }
});

// get merchnat pending order
// @get  request
// end point :  /api/orders/merchant/pending/get

router.get("/merchant/pending/get", auth, merchant, async (req, res) => {
  try {
    const merchantOrders = await Order.find({
      merchant_id: req.user.id.toString(),
      isDelivered: false,
    });

    return res.status(200).json(merchantOrders);
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error: errror.message });
  }
});

// get merchnat completed order
// @get  request
// end point :  /api/orders/merchant/completed/get

router.get("/merchant/completed/get", auth, merchant, async (req, res) => {
  try {
    const merchantOrders = await Order.find({
      merchant_id: req.user.id.toString(),
      isDelivered: true,
    });

    return res.status(200).json(merchantOrders);
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error: errror.message });
  }
});

// get customer pending order
// @get  request
// end point :  /api/orders/merchant/pending/get

router.get("/customer/pending/get", auth, async (req, res) => {
  try {
    const customerOrders = await Order.find({
      customer_id: req.user.id.toString(),
      isDelivered: false,
    });

    return res.status(200).json(customerOrders);
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error: errror.message });
  }
});

// get customer completed order
// @get  request
// end point :  /api/orders/customer/completed/get

router.get("/customer/completed/get", auth, async (req, res) => {
  try {
    const customerOrders = await Order.find({
      customer_id: req.user.id.toString(),
      isDelivered: true,
    });

    return res.status(200).json(customerOrders);
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error: errror.message });
  }
});

// get order by id
// @get  request
// end point :  /api/orders/:order_id

router.get("/:order_id", auth, async (req, res) => {
  try {
    const order = await Order.findById(req.params.order_id);

    return res.status(200).json(order);
  } catch (error) {
    if (error.kind == "ObjectId") {
      return res.status(404).json({ msg: "Order not found" });
    }

    res.status(500).json({ msg: "Server Error", error: errror.message });
  }
});

router.put("/update/:order_id", auth, merchant, async (req, res) => {
  try {
    let order = await Order.findById(req.params.order_id);
    order.isDelivered = true;
    order.isPaid = true;
    order.save();
    return res
      .status(200)
      .json({ msg: "Order delivered successfully", order: order });
  } catch (error) {
    if (error.kind == "ObjectId") {
      return res.status(404).json({ msg: "Order not found" });
    }

    res.status(500).json({ msg: "Server Error", error: errror.message });
  }
});

module.exports = router;
