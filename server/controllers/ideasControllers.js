const Ideas = require('Ideas');

const postIdeas = (req,res,next) => {

  const {Idea  , Description , Image , Points , Team , WrittenBy} = req.body

  if(!Name || !WrittenBy)
  {
    return res.status(400).json({
      message: "Please fill both Idea and WrittenBy"})
  }

  const newIdea = new Idea({
    Idea,
    Description,
    Image,
    Points,
    Team,
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

  Ideas.find()
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
