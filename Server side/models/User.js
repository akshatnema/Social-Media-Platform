const mongoose = require("mongoose");
const passportlocalmongoose=require("passport-local-mongoose");
const findOrCreate= require('mongoose-findorcreate');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim:true,
      min: 3,
      max: 20,
      unique: true,
      sparse: true
    },
    email: {
      type: String,
      required: true,
      max: 50,
      sparse:true
    },
    googleId:{
        type:String
    },
    facebookId:{
        type:String
    },
    twitterId:{
        type:String
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    desc: {
        type:String,
        max: 100
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
  },
  { timestamps: true }
);

UserSchema.plugin(passportlocalmongoose);
UserSchema.plugin(findOrCreate);

module.exports = mongoose.model("User", UserSchema);