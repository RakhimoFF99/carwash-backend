const commentModel = require('../models/commentModel')


exports.getAllComment = async (req,res) => {
    console.log('allComment')
    try {
        const comment = await commentModel.find({})
        if(comment) {
            res.status(200).json({
                success:true,
                data:comment
            })
        }
    }
    catch(e) {
        res.status(400).json({
            success:false,
            message:e
        })
    }
}

exports.getCommentById = async (req,res) => {
    try {   
        const comment = await commentModel.findById(req.params.id) 
        if(comment) {
            res.status(200).json({
                success:true,
                data:comment
            })
        }
    }
    catch(e) {
        res.status(400).json({
            success:false,
            message:e
        })
    }
}


exports.updateCommentById  = async (req,res) => {
    try {
        const comment = await commentModel.findByIdAndUpdate(req.params.id,{
            $set:req.body
        })
        if(comment) {
            res.status(200).json({
                success:true,
                data:comment
            })
        }
    }
    catch(e) {
        res.status(400).json({
            success:false,
            message:e
        })
    }
}
exports.deleteCommentById = async (req,res) => {
    try {
        const comment = await commentModel.findByIdAndDelete(req.params.id) 
        if(comment) {
            res.status(200).json({
                success:true,
                data:comment
            })
        }
    }
    catch(e) {
        res.status(400).json({
            success:false,
            message:e
        })
    }
  
}

exports.addComment  = async (req,res) => {
    try {
        const comment = await new commentModel (req.body) 
        const response = await comment.save()
        if(response) {
            res.status(200).json({
                success:true,
                data:response
            })
        }
    }
    catch(e) {
        res.status(400).json ({
            success:false,
            message:e
        })
    }
   
}
