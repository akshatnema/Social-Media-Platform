require('dotenv').config()

const express = require("express"); 
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const session= require("express-session");
const  passport=require("passport");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const bodyParser = require("body-parser");
const fs = require("fs");
const https = require('https')

const app = express();
const PORT = process.env.PORT | 8080;

app.use(session({
    secret:"sinuocbsdj",
    resave:false,
    saveUninitialized:false
}));
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true, useUnifiedTopology:true},()=>{
    console.log("Connected to MongoDB");
});

app.use(express.static('public'));
app.use(express.json());
app.use(helmet());
app.use(morgan());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);


const server = https.createServer({
    key: fs.readFileSync('./localhost+2-key.pem'),
    cert: fs.readFileSync('./localhost+2.pem'),
    requestCert: false,
    rejectUnauthorized: false,
}, app).listen(PORT);