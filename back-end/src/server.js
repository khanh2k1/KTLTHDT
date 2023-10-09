const express = require('express')
const { port } = require('./api/config/env.js')
const db = require('./api/databases/db.js')
const morgan = require('morgan')

const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv')
const app = express()

// Middleware để phân tích dữ liệu POST
// Sử dụng body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors())

db.conn()


app.post('/receive-data', (req, res) => {
    try {
        const { email, password } = req.body

        console.log(email, password)
        res.json({
            message: 'Sign in successfully'
        })
    } catch (error) {
        console.log(error)
        res.json({
            message: 'Sign in failed'
        })
    }
})

app.get('/send-data', async (req, res) => {
    const username = 'admin'
    const password = 'admin'
    console.log('::Send data successfully')
    res.json({
        success: true,
        data: {username, password}
    })
})


app.use(morgan('dev'))



app.listen(port, () => {
    console.log(`Listening on url localhost:${port}`)
})

