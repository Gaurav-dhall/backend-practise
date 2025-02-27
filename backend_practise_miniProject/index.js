const express = require("express");
const app = express();
const port = 3000;

const user = require("./models/user");
const cookieParser = require("cookie-parser");

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());


app.get("/", (req, res) => {
    res.render("index");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});