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
    type: [String],
    default: []
  }


})

module.exports = mongoose.model('Team', TeamSchema)