const express = require('express')
const app = express()
const PORT = 3200
const router = require('./api');
require('dotenv').config()
const db = require('./config/database')

app.get('/', (req, res) => {
    res.status(200).json('Hi Farmer Info server Listening on this port')
})
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api', router)

app.listen(PORT, () => {
    console.log(`Server Listening at Port No. ${PORT}`);
})