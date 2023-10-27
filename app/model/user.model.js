module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        }
    });

    User.associate = (models) => {
        User.hasMany(models.Rental, {
            foreignKey: 'UserId', // The name of the foreign key field in the 'Rentals' table
            onDelete: 'CASCADE'
        });
    };
    
    return User;
};
