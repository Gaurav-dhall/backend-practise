const express = require('express')
const app = express()

//to convert blob into readable
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  console.log("middleware chal gya")//middleware
  next();
 
})
app.use(function (req, res, next) {
  console.log("middleware chal gya ek aur baar")//middleware
  next();
 
})

app.get('/', function (req, res) {
  res.send('Hello    World')
})
app.get('/about', function (req, res,next) {
  return next(new Error('error aa gya'))//next because is route ke baad error handled ha 
})
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})


app.listen(3000)