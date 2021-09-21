const {Router} = require('express')
const  {addWash,getAllWash,getWashById}  = require('../controllers/washController')
const router = Router()


router.get('/wash/all',getAllWash)
router.get('/user/:id',getWashById)
router.post('/user/add',addWash)

module.exports = router