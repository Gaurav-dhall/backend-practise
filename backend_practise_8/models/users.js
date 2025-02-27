const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/usersLecture8");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    posts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "post"
    }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;