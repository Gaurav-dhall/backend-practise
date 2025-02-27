import express from "express";

const app = express();

import User from "./models/users.js";
import Post from "./models/posts.js";



app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (_, res) => {
    res.send("Hello World!");
});
app.get("/create", async (_, res) => {
  let user1=await User.create({
    name: "Naveen",
    email: "K1Mm3@example.com",
    age: 20,
    
   })

   res.send(user1);
});
app.get("/post/create/:userId", async (req, res) => {
 let post1=await Post.create({
    postdata:"first post",
    User:req.params.userId
   })
let user=await User.findOne({_id:req.params.userId});
user.posts.push(post1._id);
await user.save();
res.send(post1);

});
app.get("/findUser/:userId", async (req, res) => {
    let user=await User.findOne({_id:req.params.userId});
    res.send(user);
 

});



app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});