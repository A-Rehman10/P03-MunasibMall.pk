const jwt = require("jsonwebtoken");
const User = require("../models/User");

const auth = (req, res, next) => {
  const token = req.header("x-auth-token");

  //check if token is present

  if (!token) {
    return res.status(401).json({ msg: "Not authorized" });
  }

  //verify token

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

//Merhcant Verification
const merchant = async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if (req.user && user.role === "Merchant") {
    next();
  } else {
    res.status(401).json({ msg: "Not authorized as an merchant" });
  }
};

module.exports = { auth, merchant };
