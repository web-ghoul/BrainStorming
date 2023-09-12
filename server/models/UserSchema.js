const mongoose = require("mongoose");
var valid = require("validator");
const Schema = mongoose.Schema;

const UserSchema = Schema(
  {
    Email: {
      type: String,
      validate: {
        validator: (val) => {
          return valid.isEmail(val);
        },
        message: "invalide email !",
      },
    },
    Password: {
      type: String,
      minlength: 6,
    },
    //chessUserName
    Name: {
      type: String,
    },
    Verified: {
      type: Boolean,
      default: false,
    },
    Teams: {
      type: [Schema.Types.ObjectId],
      ref: "Team",
      default : [],
    },
    Image: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/1738/1738691.png",
    },
    BackgroundImage: {
      type: String,
      default:
        "https://img.freepik.com/free-vector/remote-management-distant-work-flat-line-composition-with-earth-globe-location-signs-views-freelancers-vector-illustration_98292-9077.jpg?w=1380&t=st=1694549599~exp=1694550199~hmac=aea753c94e4a1e8505d0fc48b214afacb9999f3aea5b09c671774993436c3f09",
    },
    About: {
      type: String,
      default: "",
    },
    Bio: {
      type: String,
      default: "",
    },
    FacebookId: {
      type : String ,

    }
    
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", UserSchema);
