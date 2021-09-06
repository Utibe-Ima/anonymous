const express = require('express')
const router = express.Router()
const registrationPage = require('../controllers/registration').registrationPage
const register = require('../controllers/registration').register
const loginPage = require('../controllers/login').loginPage
const login = require('../controllers/login').login
const home = require('../controllers/home').home
const auth = require('../middlewares/authorize')


router.get('/registration', auth.isLoggedIn, registrationPage)
router.get('/login', auth.isLoggedIn, loginPage)
router.post('/registration', register)
router.post('/login', login)
router.get('/', auth.isNotLoggedIn, home)






module.exports = router