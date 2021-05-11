//Create an express sever
const express = require("express");
const connectDB = require("./src/db");

//Give you access to the environmental variables
require("dotenv").config();
const { PORT } = process.env;

//Connect to the database
connectDB();

//Initialise express
const app = express();

//initialse express middle ware
app.use(express.json({extended : false}));

//create a basic express route
app.get("/", (req, res) => res.json({message: "Welcome to Node Class"}));

//Set Port
const port = process.env.PORT || PORT;

//Listen to port
app.listen(port, () => console.log(`App is running on port ${port}`));
