const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  actual_price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
  },
  discounted_price: {
    type: Number,
  },
  store_name: {
    type: String,
  },
  category_name: {
    type: String,
  },
  merchant_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "users",
  },
  category_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "categories",
  },

  product_image: {
    type: String,
  },
  store_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "stores",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Product = mongoose.model("product", productSchema);
