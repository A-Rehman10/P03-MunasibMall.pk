const express = require("express");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const { sendVerificationMail } = require("../../config/send_Mail");

const router = express.Router();

//register a user as a customer
// @post request
// end point :  /api/users/customer

router.post(
  "/customer",
  [
    check("name", "Name is required").not().isEmpty(),
    check("phone_number", "Phone number required").not().isEmpty(),
    check("email", "Enter a valid Email").isEmail(),
    check("password", "Password is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req, res);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // destructuring registeration fields

    const { name, phone_number, email, password } = req.body;
    let role = "Customer";

    try {
      let user = await User.findOne({ email });
      //generate OTP Code
      const otpCode = Math.floor(Math.random() * 1000000) + 1;

      if (user) {
        return res.status(400).json({
          errors: [
            {
              msg: "Someone has been already registered with this email , plz try another one",
            },
          ],
        });
      }
      sendVerificationMail(email, otpCode);
      user = new User({
        name,
        email,
        phone_number,
        password,
        role,
        otpCode,
      });

      // encrypting password using bcrypt js

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);
      await user.save();

      //generating token using jsonwebtoken

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: "2 days" },
        (err, token) => {
          if (err) throw err;
          res.json({
            msg: "Account Verification Email sent to your mail , Please verify your account",
            token,
            user,
          });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ msg: "Server Error" });
    }
  }
);

//register a user as a merchant
// @post request
// end point :  /api/users/merchant

router.post(
  "/merchant",
  [
    check("name", "Name is required").not().isEmpty(),
    check("phone_number", "Phone number required").not().isEmpty(),
    check("email", "Enter a valid Email").isEmail(),
    check("password", "Password is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req, res);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // destructuring registeration fields

    const { name, phone_number, email, password } = req.body;
    let role = "Merchant";

    try {
      let user = await User.findOne({ email });
      //generate OTP Code
      const otpCode = Math.floor(Math.random() * 1000000) + 1;

      if (user) {
        return res.status(400).json({
          errors: [
            {
              msg: "Someone has been already registered with this email , plz try another one",
            },
          ],
        });
      }
      sendVerificationMail(email, otpCode);
      user = new User({
        name,
        email,
        phone_number,
        password,
        role,
        otpCode,
      });

      // encrypting password using bcrypt js

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);
      await user.save();

      //generating token using jsonwebtoken

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: "2 days" },
        (err, token) => {
          if (err) throw err;
          res.json({
            msg: "Account Verification Email sent to your mail , Please verify your account",
            token,
            user,
          });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ msg: "Server Error" });
    }
  }
);

//verify user account
// @put request
// end point :  /api/users/verify

router.put(
  "/verify",
  [
    check("email", "Email is required").isEmail(),
    check("otpCode", "OTP Code is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req, res);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let { otpCode, email } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        res.status(404).json({ msg: "No Account is detected for this email" });
      } else {
        if (user.otpCode === otpCode) {
          user.isVerified = true;
          user.otpCode = null;
          await user.save();
          res.json({
            msg: "Your Account has been successfully verified",
            user,
          });
        } else {
          res
            .status(400)
            .json({ errors: [{ msg: "OTP code is invalid or mismatched" }] });
        }
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ msg: "Server Error" });
    }
  }
);

module.exports = router;
