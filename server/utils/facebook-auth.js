const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const express = require('express');

const router = express.Router();
require('dotenv').config();

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: "/api/facebook/callback",
      profileFields: ['id', 'displayName', 'photos', 'email']
    },
    function (accessToken, refreshToken, profile, callback) {
			return callback(null, profile);
		}
  )
);


passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});

// router.get('/', passport.authenticate('facebook', { scope: 'email' }));

// router.get(
//   '/callback',
//   passport.authenticate('facebook', {
//     failureRedirect: '/auth/facebook/error',
//   }),
//   function (req, res) {
//     // Successful authentication, redirect to success screen.
//     res.redirect('/auth/facebook/success');
//   }
// );

// router.get('/success', async (req, res) => {
//   const userInfo = {
//     id: req.session.passport.user.id,
//     displayName: req.session.passport.user.displayName,
//     provider: req.session.passport.user.provider,
//   };
//   res.render('fb-github-success', { user: userInfo });
// });

// router.get('/error', (req, res) => res.send('Error logging in via Facebook..'));

// router.get('/signout', (req, res) => {
//   try {
//     req.session.destroy(function (err) {
//       console.log('session destroyed.');
//     });
//     res.render('auth');
//   } catch (err) {
//     res.status(400).send({ message: 'Failed to sign out fb user' });
//   }
// });

module.exports = router;