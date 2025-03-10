const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/userDB');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    img: String,
});

const User = mongoose.model('User', userSchema);
module.exports = User;