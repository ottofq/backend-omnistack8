const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

const server = express();

mongoose.connect(
  "mongodb+srv://omnistack:rkQS3ycLY6vY4BV1@cluster0-aosmr.mongodb.net/omnistack8?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
