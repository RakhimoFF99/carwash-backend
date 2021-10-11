const FileUpload = require('../models/fileUploadModel')
exports.uploadFile = async (req,res) => {
    console.log(req.file)
    res.status(201).json({
        success:true,
        image:{
            filename:req.file.filename,
            path:`images/${req.file.filename}`
        }
    })
}