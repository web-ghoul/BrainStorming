const fs = require("fs").promises;
const path = require("path");

exports.DeleteFiles = async (req, res) => {
  try {
    const folderPath = path.join(__dirname, "../uploads");
    const files = await fs.readdir(folderPath);

    for (const file of files) {
      const filePath = path.join(folderPath, file);
      await fs.unlink(filePath);
    }
    console.log("Files Deleted !")
  } catch (error) {
    console.log(error)
  }
};
