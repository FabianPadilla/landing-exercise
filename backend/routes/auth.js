const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    let user = await User.findOne({ Email: req.body.Email });
    if (!user)
      return res.status(422).send({ error: "wrong username or password" });

    const validPassword = await bcrypt.compare(
      req.body.Password,
      user.Password
    );
    if (!validPassword)
      return res.status(422).send({ error: "wrong username or password" });

    const jwt = user.generateJWT();

    res.status(201).header("Authorization", jwt).send({
      id: user._id,
      FirsName: user.FirsName,
      Email: user.Email,
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.post("/signup", async (req, res) => {
  try {
    if (!req.body.Password)
      return res.status(422).send({ error: "Password required" });

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.Password, salt);

    user = new User({
      FirsName: req.body.FirsName,
      LastName: req.body.LastName,
      Email: req.body.Email,
      Password: hashPassword,
    });
    const result = await user.save();

    const jwt = user.generateJWT();

    res.status(201).header("Authorization", jwt).send({
      id: user.id,
      FirsName: user.FirsName,
      LastName: user.LastName,
      Email: user.Email,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: err.message });
  }
});

module.exports = router;
