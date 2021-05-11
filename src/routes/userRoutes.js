const express = require("express");
const UserController = require("../controllers/userControllers");
const router = express.Router();


//GET request to / to check server health
router.get("/", UserController.getHealth);

//POST request to /users to create a new user
router.post("/users", UserController.addUser);

//GET request to /users to fetch all users
router.get("/users", UserController.fetchAllUsers);

//GET request to /users:id to fetch user by id
router.get("/users/:id", UserController.fetchUserById);

//PUT request to /users:id to update user
router.put("/users/:id", UserController.updateUser);

//DELETE request to /users:id to delete user by id
router.delete("/users/:id", UserController.deleteUser);

module.exports = router;