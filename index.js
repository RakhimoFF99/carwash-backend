const express = require('express')
const db = require('./db/db')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser())
app.use('/api',require('./routes/userRoute'))
app.use('/api',require('./routes/authUser'))

const PORT = process.env.PORT ||3000


function startServer () {
    db()
    app.listen(PORT,console.log(`Server is running on port ${PORT}`))
}

startServer()