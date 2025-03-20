const express = require("express");
const connectDB = require("./config/db");

const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;

//create route
//app.get(path,callback)
app.get("/", (req, res) => {
  res.send("This is home");
});

//app.listen(port,callback)
app.listen(PORT, () => {
  connectDB(DB_URL);
  console.log(`server running at http://localhost:${PORT}`);
});
