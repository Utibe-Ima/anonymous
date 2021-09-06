require('dotenv').config()
const { Sequelize } = require('sequelize');
const users = require('../Models/User')
const messages = require('../Models/messages')



const sequelize = new Sequelize('Users', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});


const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = users(sequelize, Sequelize.DataTypes);
db.message = messages(sequelize, Sequelize.DataTypes)


module.exports = db