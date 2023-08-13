const Teams = require('../models/Teams');
const bcrypt = require('bcryptjs');
const asyncHandler = require("express-async-handler");

const createTeam = asyncHandler (async(req,res,next) => {
  const {Name , Password} = req.body 

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(Password, salt);
  const check = await Teams.findOne({Name:Name})
  if(check)
  {
    return res.status(402).json({
      message : "This Name Already Used"
    })
  }
  const newTeam = new Teams({
    Name : Name,
    Password : hash
  })

  newTeam.save()
  .then((result) => {
    return res.status(200).json({
      message : "Team created successfully"
    })
  }
  ).catch((err) => {
    return res.status(404).json({
      message : err
    })
  }
  )
}
)

const displayTeams = asyncHandler( (req, res, next) => {

  Teams.find().select('-Password')
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

const EnterRoom = asyncHandler ( (req,res,next) => {
  
})


module.exports = {createTeam ,  displayTeams}
