const {Router}  = require('express')
const {getAllDistrict,getDistrictById,addDistrict,deleteDistrictById,updateDistrictById}  = require('../controllers/districtController')
const verifyToken = require('../controllers/verifyToken')
const router = Router()

router.get('/district/all',getAllDistrict)
router.get('/district/:id',getDistrictById)
router.post('/district/add',verifyToken,addDistrict)
router.delete('/district/delete/:id',verifyToken,deleteDistrictById)
router.put('/district/update/:id',updateDistrictById)



module.exports = router