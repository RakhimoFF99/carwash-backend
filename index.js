const express = require('express')
const db = require('./db/db')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser())
app.use(cors())
app.use('/api',require('./routes/userRoute'))
app.use('/api',require('./routes/authUser'))
app.use('/api',require('./routes/washRoute'))
app.use('/api',require('./routes/regionRoute'))
app.use('/api',require('./routes/districtRoute'))
app.use('/api',require('./routes/orderRoute'))
app.use('/api',require('./routes/commentRoute'))
app.use('/api',require('./routes/fileUpload'))
app.use(require('./routes/sendFile.js'))



app.get('/',(req,res) => {
    res.send("<h1 style='margin:0 200px;'>Working</h1>")
})

const PORT = process.env.PORT ||5200


function startServer () {
    db()
    app.listen(PORT,console.log(`Server is running on port ${PORT}`))
}

startServer()