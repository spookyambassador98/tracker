const express = require('express')
const app = express()
const session = require('express-session');
const ejs = require('ejs')
const path = require('path')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const port = process.env.port || 4444
const router = require('./routes/newUserRoute.js')
const Bug = require('./models/bugs.js')

app.use(bodyparser.urlencoded({extended: true}))
app.use('/public', express.static(path.join(__dirname, '/public')))
app.use(express.json());
app.set('view engine', 'ejs')


app.use(session({
  secret: 'wdqwdm12p', // Replace with your secret key
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using HTTPS
}));




app.use('/auth', router)

app.get('/', function(req,res,next){
  res.sendFile(__dirname + "/views/auth.html")
})

app.post('/submit', async function(req,res, next){
  try {
    res.sendFile(__dirname + '/views/thanks.html')
    const bug = await Bug.create(req.body)
  
  } catch (error) {
    console.log(error); 
  }
  
  console.log(req.body);
  })

async function KJN(){
  await mongoose.connect('mongodb+srv://bugtracker:bugtracker98@bugtracker.jhxnl1m.mongodb.net/')
  app.listen(port)
  console.log(`http://localhost:4444`);
}


KJN()












// const Bug = require('./models/bugs.js')
// const NewUser = require('./models/NewUser.js')
// app.post('/auth', async(req,res)=>{
//   try {
//     const new_user = await NewUser.create(req.body)
//     console.log(new_user);
//     res.redirect('ticketportal')
//   } catch (error) {
//     console.log(error);
//   }
// })

// app.get('/ticketportal', (req,res,next) => {
//   res.sendFile(__dirname + '/views/index.html')
// }).post('/submit', async(req,res,next) => {
  // try {
  //   res.sendFile(__dirname + '/views/thanks.html')
  //   const bug = await Bug.create(req.body)
  //   console.log(req.json({message: bug}))
  
  // } catch (error) {
  //   console.log(error); 
  // }
  
  // console.log(req.body);
  // })








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
