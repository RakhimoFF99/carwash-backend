const { Router } = require('express')
const verifyToken = require('../controllers/verifyToken')
const checkToken = require('../controllers/checkRole')
const  { addWash ,getAllWash,getWashById,deleteWash,findWashByLetter,updateWashById}  = require('../controllers/washController')
const router = Router()


router.get('/wash/all',getAllWash)
router.get('/wash/find/:letter',findWashByLetter)
router.get('/wash/:id',getWashById)
router.put('/wash/update/:id',updateWashById)
router.post('/wash/add',verifyToken,checkToken,addWash)
router.delete('/wash/delete/:id',verifyToken,deleteWash)
module.exports = router