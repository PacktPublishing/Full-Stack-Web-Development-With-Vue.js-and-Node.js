const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function HashPassword (user, options) {
    const SALT = 8
    if(!user.changed('password')) {
        return
    }

    return bcrypt
        .genSaltAsync(SALT)
        .then(salt => bcrypt.hashAsync(user.password, salt, null))
        .then(hash => {
            user.setDataValue('password', hash)
        })
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email:{
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    },{
        hooks: {
            beforeCreate: HashPassword,
            beforeUpdate: HashPassword
        }
    })
    
    User.prototype.comparePassword = function (password) {
        return bcrypt.compareAsync(password, this.password)
    }

    return User
}