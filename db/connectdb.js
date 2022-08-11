
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DBNAME, process.env.USERNAME, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql'
});

module.exports = sequelize