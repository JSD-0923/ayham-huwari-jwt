module.exports = (sequelize, Sequelize) => {
    const book = sequelize.define("book",{
        book_name:{
            type: Sequelize.STRING
        },
        author:{
            type: Sequelize.STRING
        },
        published_year: {
            type: Sequelize.INTEGER
        },
        gener:{
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
    });
    book.associate = (models) => {
        book.hasMany(models.Rental, {
            foreignKey: 'BookId', // The name of the foreign key field in the 'Rentals' table
            onDelete: 'CASCADE'
        });
    };
    
    return book;
}