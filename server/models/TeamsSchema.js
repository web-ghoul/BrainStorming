const mongoose = require('mongoose');

const Schema = mongoose.Schema

const TeamSchema = Schema({

  Name :{
    type: String,
    required: true,
    unique: true
  },
  Password : {
    type: String,
    required: true
  }
  ,
  Members: {
    type : [Schema.Types.ObjectId],
    ref : "User",
    default: [],
  },
  Image:{
    type: String ,

  },
  TeamLeader:{
    type : Schema.Types.ObjectId ,
    ref : "User"
  }


},{timestamps: true,})

module.exports = mongoose.model('Team', TeamSchema)