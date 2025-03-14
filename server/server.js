const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
/**const corsOption = {
    origin: 'http://localhost:8081',
    credentials:true,
}
app.use(cors(corsOption))*/

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true }))
//test
app.get('/', (req, res) => {
    res.json({message: 'Welcome'})
})

const PORT =  8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})

const db = require('./app/models')
db.connex.sync()
require('./app/routes/destination.route')(app)

const cookieParser = require('cookie-parser')

const corsOption = {
    credentials: true, //authetication cookies
    origin: 'http://localhost:8081'
}

app.use(cookieParser())
require('./app/routes/user.route')(app)