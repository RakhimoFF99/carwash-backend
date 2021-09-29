const {Router} = require('express')
const  {addOrder,getOrderById,getAllOrder,deleteOrderById,updateOrderById}  = require('../controllers/orderController')
const router = Router()

router.get('/order/all',getAllOrder)
router.get('/order/:id',getOrderById)
router.put('order/update/:id',updateOrderById)
router.delete('/order/delete/:id',deleteOrderById)
router.post('/order/add',addOrder)

module.exports = router