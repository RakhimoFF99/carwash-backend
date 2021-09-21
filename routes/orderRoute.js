const {Router} = require('express')
const  {addOrder,getOrderById,getAllOrder}  = require('../controllers/orderController')
const router = Router()


router.get('/order/all',getAllOrder)
router.get('/order/:id',getOrderById)
router.post('/order/add',addOrder)

module.exports = router