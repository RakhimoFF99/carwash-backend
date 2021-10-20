const {Router} = require('express')
const checkRole = require('../controllers/checkRole')
const  {addOrder,getOrderById,getAllOrder,deleteOrderById,updateOrderById,completeOrder,rejectOrder}  = require('../controllers/orderController')
const verifyToken = require('../controllers/verifyToken')
const router = Router()

router.get('/order/all',getAllOrder)
router.get('/order/:id',getOrderById)
router.put('order/update/:id',verifyToken,checkRole,updateOrderById)
router.delete('/order/delete/:id',verifyToken,checkRole,deleteOrderById)
router.post('/order/add',addOrder)
router.post('/complete/order/:id',completeOrder)
router.post('/reject/order/:id',rejectOrder)

module.exports = router