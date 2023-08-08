const Teams = require('Teams');
const bcrypt = require('bcryptjs');


const createTeam = (req,res,next) => {
  const {Name , Password} = req.body 

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(Password, salt);
  
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


const displayTeams = (req, res, next) => {

  Teams.find()
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

module.exports = {createTeam ,  displayTeams}
