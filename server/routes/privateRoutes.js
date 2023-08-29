const teamController = require("../controllers/teamControllers");
const ideaController = require("../controllers/ideasControllers");
const userControler = require("../controllers/userControllers");
const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, __dirname + '/../uploads'); // Corrected path
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  }
});

// Set saved storage options:
const upload = multer({ storage: storage });

router.post("/Teams", protect, teamController.createTeam);

router.get("/Ideas/:id", protect, ideaController.displayIdeas);

router.post("/Ideas", protect, upload.array("files"), ideaController.postIdeas);

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

module.exports = router;
