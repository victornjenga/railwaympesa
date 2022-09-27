const express = require("express");
const app = express();
require("dotenv").config();
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const TokenRoute = require("./routes/token");

app.listen(5000, (req, res) => {
  console.log("server is running");
});
app.get("/",(req,res)=>{
  res.send("Server is running")
})
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/token", TokenRoute);
