const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authControllers");
const rateLimit = require("express-rate-limit");
const passport = require("passport");
const axios = require('axios');

const ResetLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hours
  max: 3,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    message: "Too many password reset attempts, please try again later.",
  },
  keyGenerator: (req) => {
    // Use the first IP address from X-Forwarded-For header
    return req.headers["x-forwarded-for"]?.split(",")[0] || req.ip;
  },
});

const CreateLimiter = rateLimit({
  windowMs: 30 * 60 * 1000,
  max: 5,
  message: {
    message: "Too many registration attempts, please try again later.",
  },
  keyGenerator: (req) => {
    // Use the first IP address from X-Forwarded-For header
    return req.headers["x-forwarded-for"]?.split(",")[0] || req.ip;
  },
});

const LoginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { message: "Too many login attempts, please try again later." }, // Disable the `X-RateLimit-*` headers
  keyGenerator: (req) => {
    // Use the first IP address from X-Forwarded-For header
    return req.headers["x-forwarded-for"]?.split(",")[0] || req.ip;
  },
});

router.post("/register", CreateLimiter, authControllers.register);

router.get("/verify/:userId/:uniqueString", authControllers.verify);

router.post("/login", LoginLimiter, authControllers.login);

router.post(
  "/ForgotPassword",
  ResetLimiter,
  authControllers.forgetPasswordRequest,
);

router.get(
  "/reset_password/:userId/:uniqueString",
  authControllers.forgetPasswordResponse,
);

router.put("/ResetPassword", authControllers.resetPassword);

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    error: true,
    message: "Log in failure",
  });
});

router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login/failed" }),
  authControllers.googleRegister,
);


router.get("/login/facebook", passport.authenticate("facebook"));
router.get('/oauth2/redirect/facebook',
  passport.authenticate('facebook', { failureRedirect: '/login', failureMessage: true }),
    authControllers.facebookRegister);



const CLIENT_ID = process.env.LINKEDIN_API_KEY ;
const CLIENT_SECRET = process.env.LINKEDIN_SECRET_KEY;
const REDIRECT_URI = "https://brainstorm-server.onrender.com/api/auth/linkedin/callback";

router.get('/auth/linkedin/callback', async (req, res) => {
  const { code } = req.query;

  // Exchange the authorization code for an access token
  console.log("first axios")
  try {
    const response = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', null, {
      params: {
        grant_type: 'authorization_code',
        code,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
      },
    });

    const accessToken = response.data.access_token;
    console.log("second  axios")
    // Use the access token to fetch user data from LinkedIn
    const userProfile = await axios.get('https://api.linkedin.com/v2/userinfo', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // Now you have the user's LinkedIn profile data in `userProfile.data`
    
    req.userData = userProfile.data
    console.log("req.userData");
    console.log(req.userData);
    // You can store this data in your database or use it for authentication.
    // Implement your logic here.
    return authControllers.linkedinRegister(req,res)
  
  } catch (error) {
    console.error('LinkedIn authentication error:', error);
    res.status(500).send('LinkedIn sign-in failed');
  }
});



module.exports = router;
