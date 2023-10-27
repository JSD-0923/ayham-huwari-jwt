const db = require('../model');
const User = db.users;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt.config');

exports.register = (req, res) => {
    // Implement user registration logic here
    // Hash the password before saving it to the database
    // const hashedPassword = bcrypt.hashSync(req.body.password, 10);

    // User.create({
    //     username: req.body.username,
    //     email: req.body.email,
    //     password: hashedPassword
    //     // Add other user details as needed
    // })
    // .then(user => {
    //     const token = jwt.sign({ userId: user.id }, jwtConfig.secret, { expiresIn: '1h' });
    //     return res.status(200).json({
    //         auth: true,
    //         token: "Bearer " + token 
    //     });
   
    // })
    // .catch(err => {
    //     res.status(500).json({ message: 'Error registering user.' });
    // });
};

exports.login = (req, res) => {
    // Implement user login logic here
    // Verify user credentials and generate a JWT token
    User.findOne({ where: { username: req.body.username } })
    .then(user => {
        if (!user) {
            return res.status(401).send({
                success: false,
                message: "User does not exist"
            });
        }

        // Compare hashed password in the database with the provided password
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (err || !result) {
                return res.status(401).send({
                    success: false,
                    message: "Invalid password"
                });
            }

            // Password is correct, generate token
            const token = jwt.sign({ userId: user.id }, jwtConfig.secret, { expiresIn: '1h' });
            return res.status(200).json({
                 auth: true,
                 token: "Bearer " + token });
        });
    })
    .catch(err => {
        // Handle database or other errors
        res.status(500).json({ message: 'Error authenticating user.' });
    });
};

