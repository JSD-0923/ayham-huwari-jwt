const express = require('express');
const router = express.Router();
const bookController = require('../controllers/books.controller');
const passport = require('../config/passport.config'); // Verify the correct path

// Book creation route (protected with JWT authentication)
router.post('/', passport.authenticate('jwt', { session: false }), bookController.create);

// Other book routes can be added as needed

module.exports = router;
