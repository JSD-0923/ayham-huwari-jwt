const express = require('express');
const router = express.Router();
const rentalController = require('../controllers/rentals.controller');

const passport = require("passport")
// Rental creation route (protected with JWT authentication)



module.exports = (app) => {
 
    router.post('/', passport.authenticate('jwt', { session: false }), rentalController.create);
    //app.post('/', passport.authenticate('jwt', { session: false }))
 
    app.use('/rent', router);
};
