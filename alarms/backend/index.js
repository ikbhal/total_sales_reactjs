const express = require('express')
const cookieParser = require("cookie-parser");
// const sessions = require('express-session');
var session = require('express-session')
const app = express()
const port = 3000

// TODO later save to database 
var userList = [];

app.use(express.static('./public'));
app.use(express.urlencoded({ extended:true }));// email=iqbal&pass=123

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
app.set('trust proxy', 1)
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))
app.use(cookieParser());

app.get('/home', (req, res) => {
    //   res.send('Hello World!')
    session=req.session;
    if(session.userid){
        res.redirect("http://localhost:3000/home.html");
    }else{
        res.redirect('http://localhost:3000/login.html');
    }
})

// handle user registration form - <form action="/user_register" method="POST">
app.post('/user_register', (req, res) =>{
    var email = req.body.email; 
    var password = req.body.password;
    var mobileNumber = req.body.mobile_number;
    var user = {
        email,
        password,
        mobileNumber
    }

    // TODO insert row /document in the database
    userList.push(user);

    console.log("user: ", user);
    console.log(" email: ", email ,
        ", password: ", password,
        ", mobileNumber::", mobileNumber);

    res.json(user);
})

app.get('/get_all_users', (req, res) =>{
    res.json(userList);
})
// handle user login form  - <form action="/user_login" method="POST">
app.post('/user_login', (req, res) =>{
    var email = req.body.email;
    var password = req.body.password;

    var userFound = false;
    for(var i =0; i< userList.length;i++){
        var user = userList[i];
        if(email == user.email && password == user.password){
            userFound = true;
        }
    }

    if(userFound){
        session=req.session;
        session.userid=req.body.email;
        res.send("correct user")
    }else {
        res.send("invalid user - wrong email or password")
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})