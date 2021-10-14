const {Router}  = require('express')
const {addRegion,getAllRegion,getRegionById,updateRegionById}  = require('../controllers/regionController')
const verifyToken = require('../controllers/verifyToken')
const checkRole = require('../controllers/checkRole')

const router = Router()

router.get('/region/all',getAllRegion)
router.get('/region/:id',getRegionById)
router.post('/region/add',verifyToken,checkRole,addRegion)
router.put('/region/update/:id',verifyToken,checkRole,updateRegionById)

module.exports = router