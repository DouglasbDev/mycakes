// require('dotenv').config({ path: process.env.DATABASE_URL });

dotenv.config()
const port = process.env.PORT || 3333
const mode = process.env.DATABASE_URL

const express = require("express");
const mongoose = require("mongoose");



const routes = require("./routes");
const connectToDatabase = require("./database")



connectToDatabase();

const app = express();
// const port = process.env.PORT|| 3333;

app.use(express.json());
app.use(routes);



app.listen(port, () => {
    console.log(`Backend started at http://localhost:${port}`);
})