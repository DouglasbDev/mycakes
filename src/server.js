require('dotenv').config()
const cors = require('cors');
const port = process.env.PORT || 3333
const mode = process.env.DATABASE_URL
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const connectToDatabase = require("./database")
connectToDatabase();


app.use((request, response, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    response.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    response.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});


const app = express();
app.use(express.json());
app.use(routes);
app.listen(port, () => {
    console.log(`Backend started at http://localhost:${port}`);
})