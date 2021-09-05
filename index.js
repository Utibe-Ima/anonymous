require('dotenv').config()

const express = require('express')
const app = express()
const http = require('http')
const db = require('./config/db-config')
const flash = require('express-flash')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const passport = require('passport');


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())
app.use(flash())
app.use(session({
    secret: process.env.SESSION_TOKEN,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
require('./middlewares/passport-config')


const Router = require('./routes/routes')
app.use('/', Router)







const PORT = process.env.PORT || 7000;
const server = http.createServer(app) 

db
.sequelize
.sync({force:false})
    .then(() => {
        server.listen(PORT)
    }).catch((err)=> {
        console.error(err)
    })






