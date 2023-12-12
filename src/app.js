const express = require('express')
require('dotenv').config()
const app = express()

const router = require("./api/routes/index");
app.use(express.json())
app.use('/', router);


const cookieParser = require("cookie-parser");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(cookieParser());
app.set('view engine', 'html'); 

app.use('/', require('./api/routes/pages'));
app.use('/auth', require('./api/routes/auth'));

app.listen(process.env.SERVER_PORT, process.env.SERVER_URL, () => {
    console.log(`Example app listening on port ${process.env.SERVER_PORT}`)
})
require('./database').init()


