var express = require("express");
var homeRouter = express.Router();
var homeCtrl = require("../Controllers/HomeController");

homeRouter.get("/",homeCtrl.getHomePage);
module.exports  = homeRouter;