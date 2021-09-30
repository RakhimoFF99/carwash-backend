const {Router} = require('express')
const router = Router()
const {addComment,getAllComment,getCommentById,deleteCommentById,updateCommentById} = require('../controllers/commentController')



router.get('/comment/all',getAllComment)
router.get('/comment/:id',getCommentById)
router.post('/comment/add',addComment)
router.delete('/comment/delete/:id',deleteCommentById)
router.put('/comment/update/:Id',updateCommentById)


module.exports = router