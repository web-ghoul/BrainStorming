const fs = require('fs').promises;
const path = require('path');

exports.DeleteFiles = async (req, res) => {
  try {
    const folderPath = path.join(__dirname, '../uploads');
    const files = await fs.readdir(folderPath);

    for (const file of files) {
      const filePath = path.join(folderPath, file);
      await fs.unlink(filePath);
    }

    res.status(200).json({ message: 'All files deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while deleting the files' });
  }
};
