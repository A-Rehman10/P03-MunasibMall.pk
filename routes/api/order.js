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
      orders,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      // totalPrice,
      merchant_id,
    } = req.body;
    orders.map(async (order) => {
      const findMerchant = await User.findById(order.merchant_id);

      if (findMerchant._id.toString() === order.merchant_id.toString()) {
        console.log(order);
        totalPrice = shippingPrice + order.discounted_price;
        const newOrder = new Order({
          orderItem: order,
          customer_id: req.user.id,
          shippingAddress,
          paymentMethod,
          shippingPrice,
          totalPrice,
          status: [{ statusValue: "Confirmed" }],
          merchant_id: findMerchant._id,
        });
        await newOrder.save();
        return res.status(200).json(newOrder);
      }
    });
    return res.json({ msg: "Order created" });
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error: errror.message });
  }
});

// get merchant pending order
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

// get merchant completed order
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
      customer_id: req.user.id,
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
      customer_id: req.user.id,
      isDelivered: true,
    });

    return res.status(200).json(customerOrders);
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error: errror.message });
  }
});

// get customer reviewed Orders
// @get  request
// end point :  /api/orders/customer/reviewed

router.get("/customer/reviewed", auth, async (req, res) => {
  try {
    const customerOrders = await Order.find({
      customer_id: req.user.id,
      isReviewed: true,
      isDelivered: true,
    });

    return res.status(200).json(customerOrders);
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error: errror.message });
  }
});

// get customer unreviewed Orders
// @get  request
// end point :  /api/orders/customer/unreviewed

router.get("/customer/unreviewed", auth, async (req, res) => {
  try {
    const customerOrders = await Order.find({
      customer_id: req.user.id,
      isReviewed: false,
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
    const { statusValue } = req.body;
    console.log(req.body);
    let order = await Order.findById(req.params.order_id);
    if (statusValue === "Dispatched") {
      order.status.push({ statusValue });
      await order.save();
      return res.json({ msg: "you just dispatched the order" });
    }
    if (statusValue === "Delivered") {
      order.status.push({ statusValue });
      order.isDelivered = true;
      order.isPaid = true;
      await order.save();
      return res
        .status(200)
        .json({ msg: "Order delivered successfully", order: order });
    }
  } catch (error) {
    console.log(error);
    if (error.kind == "ObjectId") {
      return res.json({ msg: "Order not found" });
    }

    res.status(500).json({ msg: "Server Error", error: errror.message });
  }
});

module.exports = router;
