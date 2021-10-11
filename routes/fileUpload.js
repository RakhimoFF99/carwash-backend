const router = require('express').Router()
const {uploadFile} = require('../controllers/fileUploadController')
const multer = require('multer')

const fileStorageEngine = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,"./images")
    },
    filename:(req,file,cb) => {
        cb(null,Date.now() + "--" + file.originalname)
    }
})
const upload = multer({storage:fileStorageEngine })


router.post('/file/upload',upload.single('image'),uploadFile)

module.exports = router