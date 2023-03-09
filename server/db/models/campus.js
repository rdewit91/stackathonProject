const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('campus', {

    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://www.shutterstock.com/image-photo/college-campus-spring-260nw-131270519.jpg',
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true
        }
    }
})