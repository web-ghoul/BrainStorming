const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const IdeaSchema = Schema(
  {
    Idea: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
    },
    Images: {
      type: [String],
      default: [],
    },
    Files: {
      type: [String],
      default: [],
    },
    Team: {
      type: Schema.Types.ObjectId,
      ref: "Team",
      required: true,
    },
    Record: {
      type: String,
      default: "",
    },
    WrittenBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Idea", IdeaSchema);
