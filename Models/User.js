const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        hooks: {
            beforeCreate: async function (user, options) {
                const salt = await bcrypt.genSalt()
                const hash = await bcrypt.hash(user.password, salt)
                user.password = hash
            }
        }
    })


    User.prototype.verifyPassword = async function (password) {
        // runs the check to verify password
        let match = await bcrypt.compare(password, this.password)
        return match
    };
    return User;
}