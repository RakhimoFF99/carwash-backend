const { Router } = require('express')
const  { addWash ,getAllWash,getWashById,deleteWash}  = require('../controllers/washController')
const router = Router()


router.get('/wash/all',getAllWash)
router.get('/wash/:id',getWashById)
router.post('/wash/add',addWash)
router.delete('/wash/delete/:id',deleteWash)
module.exports = router