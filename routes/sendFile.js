const router = require('express').Router()
const path = require('path')


router.get('/images/:filename',(req,res) => {
    res.sendFile(path.resolve(__dirname,"../",'images',req.params.filename))
 
})
module.exports = router