

module.exports = (sequelize, DataTypes) => {
    const message = sequelize.define('messages', {
        username: {
            type: DataTypes.STRING
        }
    })
    return message;
}