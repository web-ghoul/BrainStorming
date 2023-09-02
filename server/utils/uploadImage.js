var cloudinary = require("cloudinary").v2;

const cloud_name = process.env.CLOUD_NAME;
const api_key = process.env.API_KEY;
const api_secret = process.env.API_SECRET;

cloudinary.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret,
});

const uploadImage = (file) => {
  //imgage = > base64
  console.log("hello");
  var folderName;
  if (file && file.mimetype.startsWith("image/")) {
    folderName = "images";
  } else if (file && file.mimetype.startsWith("audio/")){
    folderName = "audio";
  }else
  {
    folderName = "files";
  }
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      file.path,
      { folder: folderName },
      (error, result) => {
        if (result) {
          console.log(result);
          return resolve({ url: result.secure_url, type: folderName });
        }
        console.log(error.message);
        return reject({ message: error.message });
      },
    );
  });
};
module.exports = (file) => {
  console.log("hello");
  var folderName;
  if (file && file.mimetype.startsWith("image/")) {
    folderName = "profileImages";
  } else {
    return false;
  }
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      file.path,
      { folder: folderName },
      (error, result) => {
        if (result) {
          console.log(result);
          return resolve(result.secure_url);
        }
        console.log(error.message);
        return reject({ message: error.message });
      },
    );
  });
};

module.exports.uploadMultipleImages = (images) => {
  return new Promise((resolve, reject) => {
    const uploads = images.map((base) => uploadImage(base));
    Promise.all(uploads)
      .then((values) => resolve(values))
      .catch((err) => reject(err));
  });
};
