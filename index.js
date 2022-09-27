const express = require("express");
const app = express();
require("dotenv").config();
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const TokenRoute = require("./routes/token");
const PORT=5000
app.listen(PORT , () => {
  console.log("server is running");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/token", TokenRoute);