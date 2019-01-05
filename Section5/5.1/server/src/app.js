const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const AuthController = require('./controller/AuthController')
const AuthControllerPolicy = require('./policies/AuthControllerPolicy')

const app = express()
const port = 3000

app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register',AuthControllerPolicy.register, AuthController.register)
app.post('/login',AuthController.login)

sequelize.sync()
    .then(() => {
        app.listen(port, ()=> console.log(`Your App listening on port ${port}`))
    })

