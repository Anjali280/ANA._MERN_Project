const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const userRoute = require("./routes/user");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log(err));

//It is gonna take data in the json format in POST request
app.use(express.json());
app.use("/api/user", userRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend Server is running!");
});
