const mongoose = require('mongoose');

const Schema = mongoose.Schema

const IdeaSchema = Schema({

  Idea :{
    type: String,
    required: true
  }
  ,
  Description : {
    type: String,
    required: false
  }
  ,
  Image : {
    type: String,
    required: false
  }
  ,
  Points : {
    type: [String],
    required: false
  }
  ,
  Team : {
    type : Schema.Types.ObjectId,
    ref : 'Team',
    required: true
  }
  ,
  WrittenBy : {
    type: String,
    required: true
  }
  

})

module.exports = mongoose.model('Idea', IdeaSchema)