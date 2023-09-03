const Teams = require("../models/TeamsSchema");
const User = require("../models/UserSchema");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const uploadImage = require("../utils/uploadImage");
const logger = require("../logger/index");
const { DeleteFiles } = require("../utils/deleteFiles");
const path = require('path');

const teamList = [
  'team1',
  'team2',
  'team3',
  'team4',
  'team5',
  'team6',
  'team7',
  'team9',
  'team10',
  'team11',
  'team12',
  'team13',
];


const createTeam = asyncHandler(async (req, res, next) => {
  const { name, password } = req.body;

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  const check = await Teams.findOne({ Name: name });
  if (check) {
    return res.status(402).json({
      message: "This Name Already Used",
    });
  }
  
  const randomNumber = Math.floor(Math.random()*12)
  var filePath = path.join(__dirname , `../../defaultImgsteams/${teamList[randomNumber]}.jpg`)
  const newTeam = new Teams({
    Name: name,
    Password: hash,
    TeamLeader: req.userId,
    Image: filePath,
  });

  newTeam
    .save()
    .then((result) => {
      return res.status(200).json({
        message: "Team created successfully",
      });
    })
    .catch((err) => {
      return res.status(404).json({
        message: err,
      });
    });
});

const displayTeams = asyncHandler((req, res, next) => {
  Teams.find()
    .select("-Password")
    .populate("TeamLeader")
    .then((result) => {
      return res.status(200).json({
        data: result,
      });
    })
    .catch((err) => {
      return res.status(404).json({
        message: err,
      });
    });
});

const joinTeam = asyncHandler(async (req, res, next) => {
  const { password, teamId } = req.body;

  const data = await Teams.findOne({ _id: teamId });

  if (data.Members.includes(req.userName)) {
    res.status(404).json({
      message: "Already joind the team",
    });
  } else {
    bcrypt.compare(password, data.Password, async (err, result) => {
      if (err) {
        res.status(403).json({
          error: err,
        });
      }
      if (result) {
        data.Members.push(req.userId);
        await data.save();
        await User.findByIdAndUpdate(
          { _id: req.userId },
          { $push: { Teams: teamId } },
        );
        res.status(200).json({
          message: "Joined team successfully !",
        });
      } else {
        res.status(403).json({
          message: "Password is incorrect",
        });
      }
    });
  }
});

const EnterTeam = asyncHandler(async (req, res, next) => {
  const teamId = req.params.id;

  const data = await Teams.findOne({ _id: teamId });

  if (data.Members.includes(req.userId)) {
    res.status(200).json({
      message: "Entered team successfully",
    });
  } else {
    res.status(403).json({
      message: "FLAG{THE_EAZY_FLAG}",
    });
  }
});

const setTeamImage = asyncHandler(async (req, res, next) => {
  console.log(req.files);
  var data = await Teams.findOne({ _id: req.params.id }).populate("TeamLeader");
  if (data.TeamLeader._id == req.userId) {
    var urlOfImage;
    if (req.files != undefined) {
      try {
        urlOfImage = await uploadImage(req.files[0]);
        data.Image = urlOfImage;
        data.save();
        logger.info(data);
      } catch (err) {
        return res.status(500).json({
          message: "Error while uploading image !",
        });
      }
    } else {
      return res.status(404).json({
        message: "you have to set an image",
      });
    }

    res.status(200).json({
      message: "Image updated successfully !",
      data: data,
    });
    DeleteFiles();
  } else {
    res.status(403).json({
      message: "you are not authorized",
    });
  }


});


const getTeamInfo = asyncHandler(async(req,res,next) => {
  try{  
    const data =  await Teams.findOne({_id : req.params.id}).populate([{path:"Members" , select : "-Password"},{path:"TeamLeader" , select : "-Password"}]).select("-Password")
    return res.status(200).json({
      data : data
    })
  }
  catch(err)
  {
    return res.status(404).json({
      message : "Error while getting team information"
    })
  }
}
)


module.exports = {
  createTeam,
  displayTeams,
  joinTeam,
  EnterTeam,
  setTeamImage,
  getTeamInfo,
};
