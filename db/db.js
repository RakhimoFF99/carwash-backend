const config = require('config')
const mongoose = require('mongoose')

const db = async function () {
    config.get('secret_key')
    try {
       await mongoose.connect(
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

