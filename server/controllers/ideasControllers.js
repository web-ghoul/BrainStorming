const Ideas = require('../models/IdeasSchema');
const uploadImage = require("../utils/uploadImage");
const logger = require("../logger/index")
const asyncHandler = require("express-async-handler");


/*
const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');

// Define a route to delete files
router.delete('/delete-file/:filename', async (req, res) => {
  const filename = req.params.filename;

  const filePath = path.join(__dirname, '../uploads', filename);

  try {
    // Check if the file exists
    await fs.access(filePath);

    // Delete the file
    await fs.unlink(filePath);

    res.status(200).json({ message: 'File deleted successfully' });
  } catch (error) {
    if (error.code === 'ENOENT') {
      res.status(404).json({ message: 'File not found' });
    } else {
      res.status(500).json({ message: 'An error occurred while deleting the file' });
    }
  }
});

*/


const postIdeas = asyncHandler (async(req,res,next) => {

  const {Idea  , Description , Team } = req.body

  if(!Idea )
  {
    return res.status(400).json({
      message: "Please fill Brainwave"})
  }

  console.log(req.files)
  logger.info(req.body)
  var arrayOfUrls ;
  if(req.files != undefined){
  try{
  arrayOfUrls  = await uploadImage.uploadMultipleImages(req.files)
  logger.info(arrayOfUrls)

  } catch(err){
    return res.status(500).json({
      message : "Error while uploading files and images !"
    })
  }

  

  var imagesArray 
  var filesArray
  
  for(let i = 0 ; i < arrayOfUrls.length ; i++)
  {
    if(arrayOfUrls[i].type == "files")
    {
      filesArray.push(arrayOfUrls[i].url)
    }
    else
    {
      imagesArray.push(arrayOfUrls[i].url)
    }
  }
  }
  const newIdea = new Ideas({
    Idea,
    Description,
    Images : imagesArray,
    Files : filesArray,
    Team,
    WrittenBy:req.userName,
  })
  newIdea.save().then((result) => {
    return res.status(200).json({
      message: "Idea Added Successfully",
    })
  }).catch((err) => {
    return res.status(500).json({message : err})
  });


}
)

const displayIdeas = asyncHandler((req, res, next) => {

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
})

const deleteIdea = asyncHandler(async(req, res, next) => {

  const data = await Ideas.findOne({_id : req.params.id})

  if(data && data.WrittenBy == req.userName)
  {
    await Ideas.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: 'Data deleted successfully.' });
  }
  else
  {
    return res.status(403).json({ error: 'Access denied or data not found.' });
  }

})

const updateIdea = asyncHandler(async(req,res,next) => {
  
  const {Idea  , Description} = req.body

  const data = await Ideas.findOne({_id : req.params.id})

  if(data && data.WrittenBy == req.userName)
  {
    data.Idea = Idea 
    data.Description = Description
    await data.save()
    return res.status(200).json({ message: 'Data updated successfully.' });
  }
  else
  {
    return res.status(403).json({ error: 'Access denied or data not found.' });
  }


}
)


module.exports = {displayIdeas , postIdeas , deleteIdea , updateIdea}
