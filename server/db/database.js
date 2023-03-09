const chalk = require('chalk')
const Sequelize = require('sequelize')
const pkg = require('../../package.json')

console.log(chalk.yellow('Opening database connection'))

const db = new Sequelize('postgres://localhost:5432/acme_schools_db', {
  logging: false
})

module.exports = db

// const Sequelize = require('sequelize')
// const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/acme_schools_db', {
//   logging: false
// })

// module.exports = db