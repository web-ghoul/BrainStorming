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
    
  }
  ,
  Images: {
    type : [String]

  }
  ,
  Files : {
    type: [String],
    
  }
  ,
  Team : {
    type : Schema.Types.ObjectId,
    ref : 'Team',
    required: true
  }
  ,
  Record : {
    type: String,
    
  },
  WrittenBy:{
    type: String ,
  }
  

},{timestamps: true,})

module.exports = mongoose.model('Idea', IdeaSchema)