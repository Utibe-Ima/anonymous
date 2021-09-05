
const db = require('../config/db-config')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports.registrationPage= (req, res) => {
    res.render('registration')
}

module.exports.register = async (req, res) => {
    const {username, password} = req.body;
    const userExists = await db.user.findOne({where: {username: {[Op.like]: username}}});
    if (userExists) {
        res.send('User Already Exists')
    } else{
        const newUser = await db.user.create({username, password})
    }
    res.redirect('/login')
    
}