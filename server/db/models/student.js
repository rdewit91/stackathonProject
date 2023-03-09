const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('student', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          isEmail: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://i.pinimg.com/736x/61/c0/d2/61c0d210e4e6d6d4771e8ce1db67669d.jpg',
    },
    gpa: {
        type: Sequelize.STRING(10),
        allowNull: false,
        validate: {
          min: 0.1,
          max: 4.0
        }
    },
})

