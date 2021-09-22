const {Router} = require('express')
const  {addUser,getAllUser,getUserById,deleteUserById,updateUserById}  = require('../controllers/userController')
const router = Router()


router.get('/user/all',getAllUser)
router.get('/user/:id',getUserById)
router.post('/user/add',addUser)
router.delete('/user/delete/:id',deleteUserById)
router.put('/user/update/:id',updateUserById)

module.exports = router