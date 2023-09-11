const teamController = require("../controllers/teamControllers");
const ideaController = require("../controllers/ideasControllers");
const userControler = require("../controllers/userControllers");
const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const multer = require("multer");
const path = require("path");
const maxSize = 10 * 1024 * 1024;
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, __dirname + "/../uploads");
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

// Set saved storage options:
const upload = multer({
  storage: storage,
  limits: { fileSize: maxSize },
  fileFilter: (req, file, cb) => {
    const allowedFileTypes = /\.(jpeg|jpg|png|pdf|ogg|avi|aac|flac|wav|webm|avi|mov|flv|mp4|mp3|doc|pdf|docx|xlsx|pptx|csv|png|jfif|jpeg|gif|jpg|tiff|tif|webp|bmp)$/i; // Add allowed file extensions

    const extname = allowedFileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    if (extname) {
      return cb(null, true);
    } else {
      return cb("Error: Invalid file type.");
    }
  },
});

router.post("/Teams", protect, teamController.createTeam);

router.get("/Ideas/:id", protect, ideaController.displayIdeas);

router.post(
  "/Ideas",
  protect,
  upload.fields([
    { name: "files" },
    { name: "idea" },
    { name: "description" },
    { name: "team" },
    {name: "record"}
  ]),
  ideaController.postIdeas
);

router.patch("/JoinTeam", protect, teamController.joinTeam);

router.get("/EnterTeam/:id", protect, teamController.EnterTeam);

router.delete("/DeleteIdea/:id", protect, ideaController.deleteIdea);

router.put("/updateIdea/:id", protect, ideaController.updateIdea);

router.patch(
  "/uploadProfileImage",
  protect,
  upload.array("files"),
  userControler.setProfilePic
);

router.delete("/DeleteIdea/:id", protect, ideaController.deleteIdea);

router.put("/updateIdea/:id", protect, ideaController.updateIdea);

router.patch(
  "/uploadProfileImage",
  protect,
  upload.array("files"),
  userControler.setProfilePic
);

router.patch(
  "/uploadBackgroundPic",
  protect,
  upload.array("files"),
  userControler.setBackgroundPic
);

router.patch(
  "/uploadTeamImage/:id",
  protect,
  upload.array("files"),
  teamController.setTeamImage
);

router.patch("/updateProfile", protect, userControler.updateProfile);

router.get("/getTeamInfo/:id", protect, teamController.getTeamInfo);

//router.delete("/deleteTeam/:id", protect, teamController.deleteTeam);

router.delete("/leaveTeam/:id" , protect , teamController.leaveTeam)

router.delete("/deleteAccount" , protect , userControler.deleteUser)

router.get("/allIdeas" , protect , userControler.allPostsForUser)

module.exports = router;
