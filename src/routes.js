const express = require("express");
const cakeController = require("./controllers/cakeController");
const finalResultController = require("./controllers/finalResultController");
const ingredientsController = require("./controllers/ingredientsController");
const cakesMiddlewares = require("./middlewares/cakesMiddlewares");
const finalResultMiddlewares = require("./middlewares/finalResultMiddlewares");
const ingredientsMiddlewares = require("./middlewares/ingredientsMiddlewares");
const routes = express.Router();




routes.get("/cakes", cakeController.index);
routes.post("/cakes", cakeController.store);
routes.put("/cakes/:id", cakesMiddlewares.validateId, cakeController.update);
routes.delete("/cakes/:id", cakesMiddlewares.validateId, cakeController.delete);



routes.get("/ingredients", ingredientsController.index);
routes.post("/ingredients", ingredientsController.store);
routes.put("/ingredients/:id", ingredientsMiddlewares.validateId, ingredientsController.update);
routes.delete("/ingredients/:id", ingredientsMiddlewares.validateId, ingredientsController.delete);

routes.get("/finalResult", finalResultController.index);
routes.post("/finalResult", finalResultController.store);
routes.put("/finalResult", finalResultMiddlewares.validateId,finalResultController.update);







module.exports = routes;


