module.exports = {
    HOST: "localhost",
    USER: "root", // Replace with your MySQL username
    PASSWORD: "ayham123", // Replace with your MySQL password
    DB: "bookslibrary", // Replace with your MySQL database name
    DIALECT: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};