const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const store_Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  store_image: {
    type: String,
  },
  store_city: {
    type: String,
    required: true,
  },
  merchant_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "users",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Store = mongoose.model("store", store_Schema);
