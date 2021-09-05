require('dotenv').config()
const { Sequelize } = require('sequelize');
const users = require('../Models/User')


const sequelize = new Sequelize('Users', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});


const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = users(sequelize, Sequelize.DataTypes);



module.exports = db