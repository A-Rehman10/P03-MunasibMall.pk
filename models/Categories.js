const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cat_Schema = new Schema({
  name: {
    type: String,
  },
});

module.exports = Category = mongoose.model("category", cat_Schema);