const passport = require("passport")

module.exports.loginPage = (req, res)=> {
    res.render('login')
}


module.exports.login = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
})