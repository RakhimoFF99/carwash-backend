const {Router}  = require('express')
const {getAllDistrict,getDistrictById,addDistrict,deleteDistrictById,updateDistrictById}  = require('../controllers/districtController')
const router = Router()

router.get('/district/all',getAllDistrict)
router.get('/district/:id',getDistrictById)
router.post('/district/add',addDistrict)
router.delete('/district/delete/:id',deleteDistrictById)
router.put('/district/update/:id',updateDistrictById)



module.exports = router