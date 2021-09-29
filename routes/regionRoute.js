const {Router}  = require('express')
const {addRegion,getAllRegion,getRegionById,updateRegionById}  = require('../controllers/regionController')

const router = Router()

router.get('/region/all',getAllRegion)
router.get('/region/:id',getRegionById)
router.post('/region/add',addRegion)
router.put('/region/update/:id',updateRegionById)

module.exports = router