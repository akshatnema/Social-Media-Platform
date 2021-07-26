require('dotenv').config()

const router = require("express").Router();
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require("../models/User");
const  passport=require("passport");
const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(User.createStrategy());
passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use(new GoogleStrategy({
    clientID: process.env.GCLIENT_ID,
    clientSecret: process.env.GCLIENT_SECRET,
    callbackURL: "http://localhost:8080/api/auth/auth/google/HI-CON"
    // userProfileURL:"https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
        console.log(profile);
    User.findOrCreate({ googleId: profile.id ,username:profile.emails[0].value.split('@')[0], email: profile.emails[0].value}, function (err, user) {
      return cb(err, user);
    });
  }
));

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:8080/api/auth/facebook/HI-CON"
  },
  function(accessToken, refreshToken, profile, done) {
      console.log(profile);
    User.findOrCreate({}, function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));


router.get("/auth/google",
passport.authenticate('google',{scope:['profile', 'email']})
);

router.get('/auth/google/HI-CON', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/home');
  });

router.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/facebook/HI-CON',
    passport.authenticate('facebook', { successRedirect: '/home', failureRedirect: '/login' }));

//REGISTER
router.post("/register", async (req, res) => {
    Users = new User({email: req.body.email, username : req.body.username});
    console.log(req.body);
    User.register(Users, req.body.password, (err,user) => {
        if(err){
            console.log(err);
            res.redirect("/register");
        }else{
            passport.authenticate("local")(req, res, ()=>{
                res.redirect("home");
            });
        }
    });
});

//LOGIN
router.post("/login", (req, res) => {
    const user= new User({
        username:req.body.username,
        password:req.body.password
    });
    req.login(user, (err) => {
        if(err){
            console.log(err);
        }else{
            passport.authenticate("local")(req, res, ()=>{
                res.redirect("home");
            });
        }
    });
});

router.get('/home',(req,res) => {
    res.send("Hello");
})

module.exports = router;