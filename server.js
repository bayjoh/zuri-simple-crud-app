//Create an express sever
const express = require("express");
const connectDB = require("./src/db");
const mongoose = require("mongoose");
const { Schema } = mongoose;

//Give you access to the environmental variables
require("dotenv").config();
const { PORT } = process.env;

//Connect to the database
connectDB();

//Initialise express
const app = express();

//initialse express middle ware
app.use(express.json({extended : false}));

//create schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true
    },
    country: String
});

const User = mongoose.model('User', userSchema);

//GET request to / to check server health
app.get("/", (req, res) => res.json({message: "Welcome to Node Class"}));

//POST request to /users to create a new user
app.post("/users", (req, res) => {

    User.create({
        name : req.body.name,
        email: req.body.email,
        country: req.body.country
    },(err, newUser) => {
        if(err)
            return res.status(500).json({ message: err.message });
        else
            return res.status(200).json({ message: "Profile created successfully", data: newUser });
    });

});

//GET request to /users to fetch all users
app.get("/users", (req, res) => {
    User.find({},(err, users) => {
        if(err)
            return res.status(500).json({ message: err.message });
        else
            return res.status(200).json({ message: "Profiles retrieved successfully", data: users });
    });
});

//GET request to /users:id to fetch user by id
app.get("/users/:id", (req, res) => {
    User.findById(req.params.id ,(err, user) => {
        if(err)
            return res.status(500).json({ message: err.message });
        else if(!user)
            return res.status(404).json({ message: "Profile not found", data: user });      
        else
            return res.status(200).json({ message: "Profile retrieved successfully", data: user });
    });
});

//PUT request to /users:id to update user
app.put("/users/:id", (req, res) => {
    User.findByIdAndUpdate(req.params.id,{
        name : req.body.name,
        email: req.body.email,
        country: req.body.country
    },(err, user) => {
        if(err)
            return res.status(500).json({ message: err.message });
        else if(!user)
            return res.status(404).json({ message: "Profile not found", data: user });      
        else{
            user.save((err, updatedUser) => {
                if(err)
                    return res.status(400).json({ message: err.message });
                else
                    return res.status(200).json({ message: "Profile updated successfully", data: updatedUser });
            });
        }
            
    });
});

//DELETE request to /users:id to delete user by id
app.delete("/users/:id", (req, res) => {
    User.findByIdAndDelete(req.params.id ,(err, user) => {
        if(err)
            return res.status(500).json({ message: err.message });
        else if(!user)
            return res.status(404).json({ message: "Profile not found", data: user });      
        else
            return res.status(200).json({ message: "Profile deleted successfully", data: user });
    });
});

//Set Port
const port = process.env.PORT || PORT;

//Listen to port
app.listen(port, () => console.log(`App is running on port ${port}`));
