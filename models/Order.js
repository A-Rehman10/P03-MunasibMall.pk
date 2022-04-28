const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    customer_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    merchant_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItem: {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      actual_price: {
        type: String,
        required: true,
      },
      discount: {
        type: String,
        required: true,
      },
      discounted_price: {
        type: String,
        required: true,
      },
      store_name: {
        type: String,
        required: true,
      },
      category_name: {
        type: String,
        required: true,
      },
      merchant_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
      category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories",
      },
      product_image: {
        type: String,
        required: true,
      },
      store_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "stores",
      },
      created_at: {
        type: Date,
      },
      qty: {
        type: Number,
        default: 1,
        required: true,
      },
    },
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    status: [
      {
        statusValue: {
          type: String,
        },
      },
    ],
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    isReviewed: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Order = mongoose.model("order", orderSchema);
