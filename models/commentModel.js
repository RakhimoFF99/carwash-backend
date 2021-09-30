const mongoose = require('mongoose')


const commentSchema = mongoose.Schema({
    comment:{
        type:String,
    },
    washId :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    WashId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Wash",
        required:true,
    }
})

module.exports = mongoose.model('comment',commentSchema)