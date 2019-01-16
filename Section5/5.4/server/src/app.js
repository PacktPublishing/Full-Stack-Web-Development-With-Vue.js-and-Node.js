const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const AuthController = require('./controller/AuthController')
const SongsController = require('./controller/SongsController')
const AuthControllerPolicy = require('./policies/AuthControllerPolicy')

const app = express()
const port = 3000

app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register',AuthControllerPolicy.register, AuthController.register)
app.post('/login',AuthController.login)
app.post('/songs',SongsController.post)
app.get('/songs',SongsController.get)
app.get('/songs/:songId', SongsController.show)
app.put('/songs/:songId', SongsController.put)
app.delete('/songs/:songId', SongsController.delete)

sequelize.sync()
    .then(() => {
        app.listen(port, ()=> console.log(`Your App listening on port ${port}`))
    })

