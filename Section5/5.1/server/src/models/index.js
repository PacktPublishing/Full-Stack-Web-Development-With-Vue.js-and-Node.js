const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully')
    })
    .catch(err => {
        console.log('Unable to connect to database: ', err)
    })

db['User'] = sequelize.import('./user.js')
db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db