const mongoose = require('mongoose');

const conn_url = process.env.BACKEND_DEVELOPMENT_URI;

const db = mongoose.connect(
    conn_url
).then(() => console.log('Mongo DB Connected Successfully'))
.catch((err) => {console.log(err)})

module.exports = db;