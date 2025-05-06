const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const taskRouter = require("./route/TaskRoute");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/tasks", taskRouter);
const PORT = process.env.PORT || 8080;
const DB = process.env.MONGO_URI;
app.listen(8080, () => {
  connectDB(DB);
  console.log("server is rumnning");
});
