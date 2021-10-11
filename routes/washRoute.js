const { Router } = require('express')
const verifyToken = require('../controllers/verifyToken')
const  { addWash ,getAllWash,getWashById,deleteWash}  = require('../controllers/washController')
const router = Router()


router.get('/wash/all',getAllWash)
router.get('/wash/:id',getWashById)
router.post('/wash/add',verifyToken,addWash)
router.delete('/wash/delete/:id',verifyToken,deleteWash)
module.exports = router