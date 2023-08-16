const Ideas = require('../models/IdeasSchema');

const postIdeas = (req,res,next) => {

  const {Idea  , Description , Image , Points , Team , WrittenBy} = req.body

  if(!Idea || !WrittenBy)
  {
    return res.status(400).json({
      message: "Please fill both Idea and WrittenBy"})
  }

  const newIdea = new Ideas({
    Idea,
    Description,
    Image,
    Points,
    Team,
    WrittenBy,
  })
  newIdea.save().then((result) => {
    return res.status(200).json({
      message: "Idea Added Successfully",
    })
  }).catch((err) => {
    return res.status(500).json({message : err})
  });


}


const displayIdeas = (req, res, next) => {

  const teamId = req.params.id ;

  Ideas.find({Team : teamId})
  .then((result) => {
    return res.status(200).json({
      data : result
    })
  }
  ).catch((err) => {
    return res.status(404).json({
      message : err
    })
  }
  )
}

const deleteIdea = (req, res, next) => {

  const {ideaId} = req.params

}

module.exports = {displayIdeas , postIdeas , deleteIdea}
