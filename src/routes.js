const express = require("express");
const { route } = require("express/lib/application");
const cakeController = require("./controllers/cakeController");
const commentController = require("./controllers/commentController");
const finalResultController = require("./controllers/finalResultController");
const ingredientsController = require("./controllers/ingredientsController");
const userController = require("./controllers/userController");
const cakesMiddlewares = require("./middlewares/cakesMiddlewares");
const commentMiddlewares = require("./middlewares/commentMiddlewares");
const finalResultMiddlewares = require("./middlewares/finalResultMiddlewares");
const ingredientsMiddlewares = require("./middlewares/ingredientsMiddlewares");
const userCreateMiddlewares = require("./middlewares/userCreateMiddlewares");
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
routes.put("/finalResult/:id", finalResultMiddlewares.validateId,finalResultController.update);
routes.delete("/finalResult/:id", finalResultMiddlewares.validateId,finalResultController.delete);


routes.get("/user", userController.index);
routes.post("/user/singin", userController.storeCreate);
routes.post("/user/login", userController.storeLogin);
routes.put('/user/:id', userCreateMiddlewares.validateId,userController.update);
routes.delete("/user/:id", userCreateMiddlewares.validateId, userController.delete);



routes.get("/comment", commentController.index);
routes.post("/comment", commentController.store);
routes.put("/comment", commentMiddlewares.validateId, commentController.update);
routes.delete("/comment", commentMiddlewares.validateId, commentController.delete);



module.exports = routes;


