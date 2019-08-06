const express = require("express");
const DevController = require("./controllers/DevController");
const LikeController = require("./controllers/LikeController");
const DislikeController = require("./controllers/DislikeController");
const routes = express.Router();

routes.get("/devs", DevController.index);

routes.post("/devs", DevController.create);
routes.post("/devs/:id/likes", LikeController.create);
routes.post("/devs/:id/dislikes", DislikeController.create);

module.exports = routes;
