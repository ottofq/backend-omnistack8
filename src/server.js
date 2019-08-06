const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const { user, pass } = require("./credentials");
const server = express();

mongoose.connect(
  `mongodb+srv://${user}:${pass}@cluster0-aosmr.mongodb.net/omnistack8?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
