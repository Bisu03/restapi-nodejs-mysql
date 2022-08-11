const { Sequelize } = require('sequelize');
const sequelize = require('../db/connectdb');

const Product = sequelize.define("product", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    desc: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    imageurl: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = Product