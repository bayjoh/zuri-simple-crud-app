const User = require("../models/user");

exports.getHealth = (req, res) => res.json({message: "Welcome to Node Class"});

exports.addUser = (req, res) => {

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

};

exports.fetchAllUsers = (req, res) => {
    User.find({},(err, users) => {
        if(err)
            return res.status(500).json({ message: err.message });
        else
            return res.status(200).json({ message: "Profiles retrieved successfully", data: users });
    });
};

exports.fetchUserById = (req, res) => {
    User.findById(req.params.id ,(err, user) => {
        if(err)
            return res.status(500).json({ message: err.message });
        else if(!user)
            return res.status(404).json({ message: "Profile not found", data: user });      
        else
            return res.status(200).json({ message: "Profile retrieved successfully", data: user });
    });
};

exports.updateUser = (req, res) => {
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
};

exports.deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id ,(err, user) => {
        if(err)
            return res.status(500).json({ message: err.message });
        else if(!user)
            return res.status(404).json({ message: "Profile not found", data: user });      
        else
            return res.status(200).json({ message: "Profile deleted successfully", data: user });
    });
};