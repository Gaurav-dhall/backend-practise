const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/userDB');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    username: String,
});
const User = mongoose.model('User', userSchema);
module.exports = User;