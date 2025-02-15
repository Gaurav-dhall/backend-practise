const express = require('express');
const app = express();
const path = require('path');
const usermodel = require('./models/user');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname , 'public')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
   res.render("index");
}
);
app.get('/readuser', async (req, res) => {
  let allusers= await usermodel.find()
 res.render("readuser", {users: allusers});
}
);
app.post('/create', async (req, res) => {
const {name, email, img} = req.body;
let createduser= await usermodel.create({name: name, email: email, img: img});
// res.send(createduser);
// console.log(createduser);
res.redirect('/readuser');
});


app.get('/delete/:id', async(req, res) => {
 let deleteduser= await usermodel.deleteOne({_id: req.params.id});
  res.redirect('/readuser');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});