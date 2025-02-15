const express = require('express');
const app = express();
const usermodel = require('./usermodel');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/create', async(req, res) => {
   let createduser=await usermodel.create({
       name: 'gaurav dhall',
       email: 'fU5H3@example.com',
       username: 'gauravdhall',
});
res.send(createduser);
// console.log('User created!');//mongo code is asynchronous 
});
app.get('/update', async(req, res) => {
  let updateduser=await usermodel.findOneAndUpdate({username: 'johndoe'}, {name: 'Jane Doe'}, {new: true}); 
    //new:true is used to get updated document
res.send(updateduser);
// console.log('User updated!');
});
app.get('/read', async(req, res) => {
    let users=await usermodel.find();
    res.send(users);
    // console.log('User read!');
});
app.get('/delete', async(req, res) => {
    let deleteduser=await usermodel.findOneAndDelete({username: 'johndoe'});
    res.send(deleteduser);
    // console.log('User deleted!');
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});