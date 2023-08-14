const Teams = require('../models/TeamsSchema');
const User = require('../models/UserSchema')
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

const joinTeam = asyncHandler ( async(req,res,next) => {

  const {Password , TeamId} = req.body 

  const data = await Teams.findOne({_id : TeamId})

  if (data.Members.includes(req.userName)) {
    res.status(404).json({
      message : "Already joind the team"
    })
  } else {
    bcrypt.compare(Password , data.Password , async(err , result) => {
      if (err) {
        res.status(403).json({
          error: err,
        });
      }
      if(result)
      {
        data.Members.push(req.userName)
        await data.save()
        await User.findByIdAndUpdate({_id : req.userId} , {$push : {Teams : TeamId} })
        res.status(200).json({
          message : "Joined team successfully !"
        })
      }
      else {
        res.status(403).json({
          message: "Password is incorrect",
        });
      }
    }
    )

    
  }

  

})

const EnterTeam = asyncHandler ( async(req,res,next) => {

  const {TeamId} = req.body 

  const data = await Teams.findOne({_id : TeamId})
  
  if(data.Members.includes(req.userName))
  {
    res.status(200).json({
      message : "Entered team successfully"
    })
  }
  else
  {
    res.status(403).json({
      message : "FLAG{THE_EAZY_FLAG}"
    })

  }

})


module.exports = {createTeam ,  displayTeams , joinTeam}
