const jwtConfig = require('../config/jwt.config');
const db = require('../model');
const User = db.users;
const passport = require("passport");
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = jwtConfig.secret;


passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({ where: { id: jwt_payload.userId } })
        .then(user => {
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        })
        .catch(err => {
            return done(err, false);
        });
}));
