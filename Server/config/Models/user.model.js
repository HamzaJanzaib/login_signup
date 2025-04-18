const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    age: String,
    phone: String,
    gender: String,
})

module.exports = mongoose.model("user", userSchema);