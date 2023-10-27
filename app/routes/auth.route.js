const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const passport = require("passport");
module.exports = (app) => {
    // User registration route
    router.post('/register', authController.register);

    // User login route
    router.post('/login', authController.login);

    // Secure route using Passport.js middleware
    router.get('/secure-route', passport.authenticate('jwt', { session: false }), (req, res) => {
        // Handle secure route logic
        res.status(200).json({ message: 'You have access to the secure route.' });
    });

    app.use('/auth', router);
};
