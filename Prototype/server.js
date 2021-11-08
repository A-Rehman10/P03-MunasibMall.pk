const express = require("express");
const colors = require("colors");
const connectDB = require("./config/db");
const users = require("./routes/api/users");
const auth = require("./routes/api/auth");
const store = require("./routes/api/store");
const product = require("./routes/api/product");
require("dotenv").config();

const app = express();

connectDB(); //Database connection execution

app.use(express.json({ extended: true })); //body Parser

//main route

app.get("/", (req, res) => {
  res.json({ msg: "Api is running" });
});

// other routes

app.use("/api/users", users); // user's route
app.use("/api/auth", auth); //auth route
app.use("/api/store", store); // store's route
app.use("/api/product", product); // product's route

//define a Port

const PORT = process.env.PORT || 8000;

//run a server on defined PORT

app.listen(PORT, () =>
  console.log(`Server is listening on PORT ${PORT}`.cyan.inverse.bold)
);
