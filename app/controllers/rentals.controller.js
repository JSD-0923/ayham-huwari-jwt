const db = require('../model'); // Import your Sequelize models

const Rental = db.rentals; // Assuming your model is named 'Rental' in your Sequelize setup

exports.create = (req, res) => {
    console.log("hellloooooooooooooooooooooooooooooop")
    // Extract data from request body
    const { rental_date, return_date, status, userId, bookId } = req.body;

    console.log(rental_date)
    console.log(return_date)
    console.log(status)
    console.log(userId)
    console.log(bookId)
    // Create a new Rental instance
    Rental.create({
        rental_date: rental_date,
        return_date: return_date,
        status: status,
        UserId: userId,   // Associate the rental with a user based on userId from request body
        BookId: bookId    // Associate the rental with a book based on bookId from request body
    })
    .then(rental => {
        res.status(201).json(rental); // Respond with the created rental object
    })
    .catch(err => {
        res.status(500).json({ message: 'Error creating rental.' });
    });
};
