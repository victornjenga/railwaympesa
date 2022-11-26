const express = require("express");

const app = express();
require("dotenv").config();
const cors = require("cors");
const axios = require("axios");
const TokenRoute = require("./routes/token");

// app.listen(5000, () => {
//   console.log("server run nicely");
// });
app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/token", TokenRoute);

app.get("/", (req, res) => {
  res.send("Mpesa backend");
});
