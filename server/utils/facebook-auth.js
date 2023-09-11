var passport = require('passport');
var FacebookStrategy = require('passport-facebook');
console.log(process.env['FACEBOOK_CLIENT_ID'])
passport.use(new FacebookStrategy({
    clientID: process.env['FACEBOOK_CLIENT_ID'],
    clientSecret: process.env['FACEBOOK_CLIENT_SECRET'],
    callbackURL: 'http://localhost:3000/api/oauth2/redirect/facebook',
    scope: ["public_profile"]
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile)
    return cb(null, profile);
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});