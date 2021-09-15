const express = require('express')
const db = require('./db/db')
const app = express()


app.use('/api',require('./routes/userRoute'))

const PORT = process.env.PORT ||3000


function startServer () {
    db()
    app.listen(PORT,console.log(`Server is running on port ${PORT}`))
}

startServer()