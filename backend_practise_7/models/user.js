const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/registration')

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    age:Number
})

const User=new mongoose.model("User",userSchema)

module.exports=User

