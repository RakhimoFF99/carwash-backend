const {Router}  = require('express')
const checkRole = require('../controllers/checkRole')
const {getAllDistrict,getDistrictById,addDistrict,deleteDistrictById,updateDistrictById}  = require('../controllers/districtController')
const verifyToken = require('../controllers/verifyToken')

const router = Router()

router.get('/district/all',getAllDistrict)
router.get('/district/:id',getDistrictById)
router.post('/district/add',verifyToken,checkRole,addDistrict)
router.delete('/district/delete/:id',verifyToken,checkRole,deleteDistrictById)
router.put('/district/update/:id',verifyToken,checkRole,updateDistrictById)



module.exports = router