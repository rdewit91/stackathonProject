const db = require('./database')
const Student = require('../db/models/student')
const Campus  = require('../db/models/campus')

Student.hasMany(Campus)
Campus.belongsTo(Student)

Campus.hasMany(Student)
Student.belongsTo(Campus)

module.exports = {
    db,
    Student,
    Campus
};