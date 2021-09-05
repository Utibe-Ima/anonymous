const express = require('express')
const router = express.Router()
const registrationPage = require('../controllers/registration').registrationPage
const register = require('../controllers/registration').register
const loginPage = require('../controllers/login').loginPage
const login = require('../controllers/login').login
const home = require('../controllers/home').home


router.get('/registration', registrationPage)
router.get('/login', loginPage)
router.post('/registration', register)
router.post('/login', login)
router.get('/', home)






module.exports = router