const express = require('express');
const router = express.Router();
const signature = require('../models/uploadclientwidget');

const cloudinary = require('cloudinary').v2
const cloudName = process.env.CLOUD_NAME;
const apiKey = process.env.API_KEY;

// using this API should require authentication
router.get('/', function (req, res, next) {
  const sig = signature.signuploadwidget()
  res.json({
    signature: sig.signature,
    timestamp: sig.timestamp,
    cloudname: cloudName,
    apikey: apiKey
  })
})

module.exports = router
