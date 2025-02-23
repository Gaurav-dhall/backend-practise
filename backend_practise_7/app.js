const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const User = require("./models/user");

app.set("view engine", "ejs");



app.use(express.json());  
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/public", express.static("public"));


app.get("/", (req, res) => {
    res.render("index");    
});
app.get("/home", (req, res) => {
    res.render("home");    
});
app.post("/create",  (req, res) => {
    const password = req.body.password

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, async function(err, hash) {
            let createdUser =  await User.create({
                name: req.body.username,
                email: req.body.email,
                password: hash,
                age: req.body.age
             })
             
            res.redirect("/login");
            
        });
    });


});

app.get("/login", (req, res) => {
    res.render("login");
});
app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

   let user= User.findOne({ email: email })

    user.then((user) => {
        if (user) {
            bcrypt.compare(password, user.password, function(err, result) {
                if (result) {
                    const token = jwt.sign({ email: user.email }, "secret");
                    res.cookie('token', token);
                    res.redirect("/home");
                } else {
                  console.log("Invalid password");
                    res.redirect("/login");
                }
            });
        } else {
          console.log("Invalid email");
            res.redirect("/login");
        }
    });
});

app.get("/logout", (req, res) => {   
    res.cookie('token', '');
    res.redirect("/");
});



app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
}); 