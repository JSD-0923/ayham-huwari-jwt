const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport'); // Import Passport.js configuration
const app = express();
require('./app/config/passport.config')
//const passport = require('passport')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize()); // Initialize Passport.js

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//initializePassport(passport);
// Import and use your routes/
//require('./app/routes/book.route')(app); // Example book routes, modify as per your project requirements
require('./app/routes/rental.route.js')(app); // Example rental routes, modify as per your project requirements
require('./app/routes/auth.route.js')(app, passport); // Authentication routes


