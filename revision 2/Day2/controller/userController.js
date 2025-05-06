//create user

const user = require("../model/userSchema");

const createUser = async (req, res) => {
  try {
    const data = new user(req.body);
    await data.save();
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = createUser;
