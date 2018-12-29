const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')

const app = express()
const port = 3000

app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
    res.send({
        message: `Success Sender : ${ req.body.sender }`
    })
})
sequelize.sync()
    .then(() => {
        app.listen(port, ()=> console.log(`Your App listening on port ${port}`))
    })

