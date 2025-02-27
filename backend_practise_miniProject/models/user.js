const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/miniProject");

const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    age: Number,
    email: String,
    password: String,
});

const user = mongoose.model("user", userSchema);

module.exports = user;