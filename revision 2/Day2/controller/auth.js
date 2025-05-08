const user = require("../model/userSchema");
const argon2 = require("argon2");
const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");

//generate token
const generateToken = (userID) => {
  return jwt.sign({ id: userID }, process.env.SECRETE_KEY, {
    expiresIn: "1d",
  });
};

const register = async (req, res) => {
  try {
    //what is require
    const { name, email, password } = req.body;
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ Message: "User already exist" });
    }
    //password
    const hashPassword = await argon2.hash(password);
    //new user
    const newUser = new user({ name, email, password: hashPassword });
    await newUser.save();
    res.status(201).json({ newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const login = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const matchUser = await user.findOne({ email });
    const verifyPassword = await argon2.verify(matchUser.password, password);
    if (!verifyPassword) {
      return res.status(401).json({ Message: "Invalid credential" });
    }
    const token = generateToken(matchUser._id);
    return res.status(201).json({ Message: "Login success", token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { register, login };
