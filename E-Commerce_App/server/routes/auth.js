const express = require("express");
const router = express.Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

/*
REGISTRATION
Save() method saves the data in the mongoDB
*/
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECURITY_KEY
    ),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

/*
LOGIN
*/
router.post("/login", async (req, res) => {
  try {
    /*For finding the correct user*/
    const findUser = await User.findOne({
      username: req.body.username,
    });

    !findUser && res.status(401).json("Entered Wrong Username");

    /*For finding the correct password*/
    const hashedPassword = CryptoJS.AES.decrypt(
      User.password,
      process.env.PASS_SECURITY_KEY
    );

    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    const inputPassword = req.body.password;
    originalPassword != inputPassword &&
      res.status(401).json("Entered Wrong Password");

    const accessToken = jwt.sign(
      {
        id: findUser._id,
        isAdmin: findUser.isAdmin,
      },
      process.env.JWT_SECURITY_KEY,
      {
        expiresIn: "3d",
      }
    );

    const { password, ...others } = findUser._doc;
    /*Return Statement */
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
