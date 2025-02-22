const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(cookieParser());

app.get("/", (req, res) => {
  const token = jwt.sign({ email:"gauravdhall35@gmail.com" }, 'secret');
  console.log(token);
  res.cookie("token", token);
  res.send("Hello World");

});

app.get("/home", (req, res) => {
  const token = req.cookies.token;
  if (token) {
    jwt.verify(token, 'secret', (err, decoded) => {
      if (err) {
        console.log(err);
      } else {
        console.log(decoded);
      }
    });
    res.send("Hello home");
  }
}); 



app.listen(3000, () => {
    console.log("Server is running on port 3000");
});