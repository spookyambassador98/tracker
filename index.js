const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const port = process.env.port || 4444
const Bug = require('./models/bugs.js')
const NewUser = require('./models/NewUser.js')

app.use(bodyparser.urlencoded({extended: true}))
app.use('/public', express.static(path.join(__dirname, '/public')))
app.use(express.json());

app.get('/', function(req,res,next){
  res.sendFile(__dirname + "/views/auth.html")
}).post('/submit', async(req,res,next) => {
try {
  res.sendFile(__dirname + '/views/thanks.html')
  const bug = await Bug.create(req.body)
  console.log(req.json({message: bug}))

} catch (error) {
  console.log(error); 
}

console.log(req.body);
})

app.post('/auth', async(req,res)=>{
  try {
    const new_user = await NewUser.create(req.body)
    console.log(new_user);
  } catch (error) {
    console.log(error);
  }
})







async function KJN(){
  await mongoose.connect('mongodb+srv://bugtracker:bugtracker98@bugtracker.jhxnl1m.mongodb.net/')
  app.listen(port)
  console.log(`http://localhost:4444`);
}


KJN()























































// const express = require("express");
// const app = express();
// const port = process.env.port || 4444

// //middleware
// app.use('/public', express.static(__dirname + '/public'))
// app.set('views', './views')
// app.set('view engine', 'pug')
// //routes
// app.get('/', (req,res) => {
//     res.render('index')
// })


// app.post("/submit", (req, res) => {
//     const bugData = {
//       bugTitle: req.body.title,
//       name: req.body.name,
//       department: req.body.department,
//       severity: req.body.severity,
//       description: req.body["bug-description"],
//     };
  
//     // Process the received data (e.g., save to database, send email, etc.)
  
//     console.log("Bug Data:", bugData);
  
//     res.json({ message: "Bug data received successfully" });
//   });

  
// //launch
// app.listen(port)
// console.log(`http://localhost:${port}`);
