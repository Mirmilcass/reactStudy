const mongoose = require('mongoose')
const config = require('config');

const dbConfig = config.get('db');

console.log(dbConfig);


mongoose
    .connect(dbConfig.mongoUrl, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=> console.log('mongoDB connected'))
    .catch(e => {
        console.error('Connection error', e.message)
    })
mongoose.set("strictQuery", false)
const db = mongoose.connection

module.exports = db 