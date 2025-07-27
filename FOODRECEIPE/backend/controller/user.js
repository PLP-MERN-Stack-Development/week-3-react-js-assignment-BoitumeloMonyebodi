const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSignUp = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const hashedPwd = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, password: hashedPwd });

    const token = jwt.sign({ email, id: newUser._id }, process.env.SECRET_KEY);
    return res.status(200).json({ token, user: newUser });
  } catch (err) {
    return res.status(500).json({ error: "Signup failed" });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    const isMatch = user && (await bcrypt.compare(password, user.password));
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ email, id: user._id }, process.env.SECRET_KEY);
    return res.status(200).json({ token, user });
  } catch (err) {
    return res.status(500).json({ error: "Login failed" });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    return res.json({ email: user.email });
  } catch (err) {
    return res.status(404).json({ message: "User not found" });
  }
};

module.exports = { userLogin, userSignUp, getUser };
