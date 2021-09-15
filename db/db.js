const config = require('config')
const mongoose = require('mongoose')

const db = function () {
    try {
        mongoose.connect(
            config.get('mongoUri'),
            {},
            console.log('connected to db')
            )
    }
    catch(e) {
        console.log(e)
    }
}
module.exports = db

