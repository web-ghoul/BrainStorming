const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authControllers");
const rateLimit = require('express-rate-limit')


const ResetLimiter = rateLimit({
	windowMs: 1000, 
	max: 1, 
  message : 'Already send email' // Disable the `X-RateLimit-*` headers
	// store: ... , // Use an external store for more precise rate limiting
})

const CreateLimiter = rateLimit({
	windowMs: 2000, 
	max: 1, 
  message : 'Already send email' // Disable the `X-RateLimit-*` headers
	// store: ... , // Use an external store for more precise rate limiting
})



router.post("/register" , CreateLimiter , authControllers.register);



router.get("/verify/:userId/:uniqueString", authControllers.verify);

router.post("/login", authControllers.login);


router.post("/ForgotPassword" , ResetLimiter , authControllers.forgetPasswordRequest);

router.get("/reset_password/:userId/:uniqueString" , authControllers.forgetPasswordResponse
)

router.put("/ResetPassword" , authControllers.resetPassword );


module.exports = router;