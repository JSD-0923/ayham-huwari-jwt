module.exports = (sequelize, Sequelize) => {
    const Rental = sequelize.define("rental", {
        rental_date: {
            type: Sequelize.DATE
        },
        return_date: {
            type: Sequelize.DATE
        },
        status: {
            type: Sequelize.STRING
        },
        UserId: {
            type: Sequelize.INTEGER
        },
        BookId: {
            type: Sequelize.INTEGER
        }
        // Add other rental fields as needed
    });

    Rental.associate = (models) => {
        Rental.belongsTo(models.User, {
            foreignKey: {
                name: 'UserId',
                allowNull: false,
                onDelete: 'CASCADE'//The onDelete: 'CASCADE' option means that if a User or Book is deleted, all associated Rentals will be deleted as well.
            }
        });
        Rental.belongsTo(models.Book, {
            foreignKey: {
                name: 'BookId',
                allowNull: false,
                onDelete: 'CASCADE' //The onDelete: 'CASCADE' option means that if a User or Book is deleted, all associated Rentals will be deleted as well.
            }
        });
    };
    return Rental;
};
