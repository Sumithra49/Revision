const express = require("express");
const app = express();
const db = require("./config/server");
const router = require("./routes/userRoute");

app.use(express.json());
app.use("/", router);
const PORT = 5000;

app.listen(PORT, () => {
  db();
  console.log(`server is running at ${PORT}`);
});
