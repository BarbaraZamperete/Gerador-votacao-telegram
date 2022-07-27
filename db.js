const mongoose = require('mongoose')

require('dotenv').config()

mongoose.connect(process.env.URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(db => console.log("Database is connected to", db.connection.host)).catch(err => console.log(err))