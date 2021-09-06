const passport = require("passport");
const Sequelize = require('sequelize')
const LocalStrategy = require('passport-local').Strategy
const db = require('../config/db-config')
const Op = Sequelize.Op



passport.use(new LocalStrategy(async function (username, password, done) {
    const user = await db.user.findOne({ where: { username: { [Op.like]: username } } })
    if (!user) { return done(null, false, { message: "Incorrect Username" }) }
    if (!(await user.verifyPassword(password))) return done(null, false, { message: "Incorrect Password" })
    return done(null, user)
}))


passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
    const user = await db.user.findByPk(id);
    if (!user) return done(err, null)
    done(null, user)
})


module.exports = passport