const express = require('express')
const morgan = require('morgan')
const axios = require('axios')

require('dotenv')
const app = express()

// Middleware để phân tích dữ liệu POST
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))

app.get('/', async (req, res) => {
    res.render('home')
})

app.post('/sign-up', async (req, res) => {
    res.render('signup')
})

app.get('/sign-in', async (req, res) => {
    axios({
        method: 'get',
        url: 'http://localhost:3000/send-data',
        responseType: 'json'
    }).then(function (response) {
        console.log(response);
        const { data } = response.data
        res.render('signin', {data: data})
    })
    
})

app.post('/sign-in', async (req, res) => {
    const { email, password } = req.body
    console.log(email, password)
    // Lấy dữ liệu từ form
    const data = req.body;
    axios
      .post('http://localhost:3000/receive-data', data)
      .then(() => console.log('Send data successfully'))
      .catch(err => {
        console.error(err);
      });

    res.send('Sign in successfully')
})




const port = 9999
app.listen(port, () => {
    console.log(`Listening on url localhost:${port}`)
})

/* EJS */
app.set("view engine", "ejs");
app.set("views", "./views/ejs/");

app.use(express.static(__dirname + '/views'));