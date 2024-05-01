const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const port = process.env.port || 4444

app.use(bodyparser.urlencoded({extended: true}))
app.use('/public', express.static(path.join(__dirname, '/public')))


app.get('/', function(req,res,next){
  res.sendFile(__dirname + "/views/index.html")
}).post('/submit', function(req,res,next){
  BugData = ({ 
    'title': req.body.title,
    'name': req.body.name,
    'department': req.body.department,
    'severity': req.body.severity,
    'description': req.body.description,
    'Ip': req.ip,
    'date': new Date().toISOString()

  
  })

  res.json(BugData)



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