const mongoose = require("mongoose");
const { Schema } = mongoose;

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

module.exports = User;