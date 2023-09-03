const mongoose = require("mongoose");
var valid = require("validator");
const Schema = mongoose.Schema;

const UserSchema = Schema(
  {
    Email: {
      type: String,
      required: true,
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
      required: true,
      unique: true,
    },
    Verified: {
      type: Boolean,
      default: false,
    },
    Teams: {
      type: [Schema.Types.ObjectId],
      ref: "Team",
    },
    Image: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/1738/1738691.png",
    },
    BackgroundImage: {
      type: String,
      default:
        "https://i.pinimg.com/564x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg",
    },
    About: {
      type: String,
      default: "",
    },
    Bio: {
      type: String,
      default: "",
    },
    
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", UserSchema);
