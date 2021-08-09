const router = require("express").Router();
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy;

passport.use(User.createStrategy());
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

//  Function for resolving same username conflict

let generateUniqueAccountName = async (proposedName) => {
  const func=await User.findOne({username: proposedName},(err,account) => {
    if(!err){
      if (account) {
        proposedName += Math.floor((Math.random() * 100) + 1);
        return generateUniqueAccountName(proposedName);
      }
      return ;
    }
      else{
        console.log(err);
      }
    });
    return proposedName;
};

const successLoginUrl = "http://localhost:3000/login/success";
const failureLoginUrl = "http://localhost:3000/login/failure";

//   Google Login strategy

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GCLIENT_ID,
      clientSecret: process.env.GCLIENT_SECRET,
      // callbackURL: "https://hi-con.herokuapp.com/api/auth/google/HI-CON",
      callbackURL: "http://localhost:8080/api/auth/google/HI-CON",
    },
    async (accessToken, refreshToken, profile, done) => {
      let newname = await generateUniqueAccountName(profile.displayName);
      User.findOne({
        'googleId': profile.id 
      }, function(err, user) {
          if (err) {
              return done(err);
          }
          if (!user) {
              user = new User({
                  email: profile.emails[0].value,
                  username: newname,
                  googleId: profile.id
              });
              user.save(function(err) {
                  if (err) console.log(err);
                  return done(err, user);
              });
          } else {
              return done(err, user);
          }
      });
    }
  )
);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/HI-CON",
  passport.authenticate("google", {     
    failureRedirect: failureLoginUrl ,
    session: true
  }),(req,res) => {
    // res.json(req.user);
    res.redirect(successLoginUrl);
  }
);

// Facebook Login strategy

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      // callbackURL: "https://hi-con.herokuapp.com/api/auth/facebook/HI-CON",
      callbackURL: "http://localhost:8080/api/auth/facebook/HI-CON",
      profileFields: [
        "id",
        "displayName",
        "email",
        "birthday",
        "friends",
        "first_name",
        "last_name",
        "middle_name",
        "gender",
        "link",
      ],
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      let newname = await generateUniqueAccountName(profile.displayName);
      User.findOne({
        'facebookId': profile.id 
    }, function(err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            user = new User({
                email: profile.emails[0].value,
                username: newname,
                facebookId: profile.id
            });
            user.save(function(err) {
                if (err) console.log(err);
                return done(err, user);
            });
        } else {
            return done(err, user);
        }
    });
    }
  )
);

router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["email", "public_profile"] })
);

router.get(
  "/facebook/HI-CON",
  passport.authenticate("facebook", {
    failureRedirect: failureLoginUrl ,
    session: true
  }),(req,res) => {
    // res.json(req.user);
    res.redirect(successLoginUrl);
  }
);

// Twitter Login strategy

passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: "http://localhost:8080/auth/twitter/HI-CON",
      userProfileURL:
        "https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true",
      includeEmail: true,
    },
    async (token, tokenSecret, profile, done) => {
     let newname = await generateUniqueAccountName(profile.displayName);
      User.findOrCreate(
        {
          twiiterId: profile.id,
          username: newname,
          email: profile.emails[0].value,
        },
        function (err, user) {
          if (err) {
            return done(err);
          }
          done(null, user);
        }
      );
    }
  )
);

router.get("/twitter", passport.authenticate("twitter"));

router.get(
  "/twitter/HI-CON",
  passport.authenticate("twitter", {
  failureMessage:"Cannot login with twitter try again later",
  failureRedirect: failureLoginUrl ,
  successRedirect: successLoginUrl
  })
);

//Local strategy

//REGISTER
router.post("/register", async (req, res) => {
  Users = new User({ email: req.body.email, username: req.body.username });
  // console.log(req.body); 
  User.register(Users, req.body.password, (err, user) => {
    if (err) {
      return res.status(500).json({ success : false, message : err });
    } else {
      passport.authenticate("local")(req, res, () => {
        console.log(user);
        return res.status(200).json(user)
      });
    }
  });
});

//LOGIN

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err) }
    if (!user) {
      return res.status(404).json({ success : false, message : info.message });
    }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      console.log(user);
      return res.status(200).json(user);
    });
  })(req, res, next);
});

//Check if user is authenticated

const checkUserStatus = (req,res,next) => {
  if(req.user){
    next();
  }else{
    console.log(req.user);
    res.status(476).send("You must login first");
  }
}

router.get("/user",checkUserStatus,(req,res) => {
    res.json(req.user)
});

module.exports = router;