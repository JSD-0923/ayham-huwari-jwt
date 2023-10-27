const db = require("../model");
const Book= db.books;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    console.log('Inside create function');
    if(!req.body.book_name){
        res.status(400).send({
            message: "content an not be empty"
        });
        return;
    }

    console.log("weeeeeeeeeeeeeeeee")
    const book= {
        book_name: req.body.book_name,
        author: req.body.author,
        published_year: req.body.published_year,
        gener: req.body.gener,
        description: req.body.description,
        createdAt: new Date(), // Set the createdAt field explicitly
        updatedAt: new Date() 
    }

    Book.create(book)
        .then(data=>{
            console.log("done")
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                     "some error occured while creating a book"
            })
        })
}