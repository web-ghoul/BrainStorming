const mongoose = require("mongoose");
var valid = require("validator");
const Schema = mongoose.Schema;


const UserSchema = Schema({
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
    required: true,
    minlength: 5,
  },
  //chessUserName
  Name: {
    type: String,
    required: true,
    unique: true
  },
  Verified: {
    type: Boolean,
    default: false,
  },
  Teams : {
    type : [Schema.Types.ObjectId],
    ref : "Team"
  }

});



module.exports = mongoose.model("User", UserSchema);
