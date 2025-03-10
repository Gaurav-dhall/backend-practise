const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));//to use the css file
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');//will render the page of view now
});
app.get('/profile/:gaurav', (req, res) => {//dynamic route
    res.send(`hello ${req.params.gaurav}`);//will render the page of view now
});
app.get('/profile/author/:username/:userid', (req, res) => {//dynamic route
    res.send(`hello ${req.params.username} this is ur id ${req.params.userid}`);//will render the page of view now
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});