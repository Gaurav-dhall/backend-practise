const express = require('express');
const app = express();
const path = require('path');
const fs = require('node:fs');

app.set('view engine', "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    fs.readdir(`./notes`, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
    //    console.log(files);
       res.render("index", {files: files});
    });
});
app.post('/create', (req, res) => {
    fs.writeFile(`./notes/${req.body.title.split(' ').join('')}.txt`, req.body.content, (err)=>{
        if(err){
            console.log(err);
        }
        else{
            
            res.redirect('/');
            console.log("File created successfully");

        }
       
    })
});

app.listen(3000);