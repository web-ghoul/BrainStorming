const cloudinary = require('cloudinary').v2;


const apiSecret = process.env.API_SECRET;

// Server-side function used to sign an Upload Widget upload.
const signuploadwidget = () => {
  const timestamp = Math.round((new Date).getTime()/1000);

  const signature = cloudinary.utils.api_sign_request({
    timestamp: timestamp,
    source: 'uw',
    folder: 'signed_upload_demo_uw'}, apiSecret);
  
  return { timestamp, signature }
}

module.exports = {
  signuploadwidget
}
