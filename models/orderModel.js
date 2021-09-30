const mongoose = require('mongoose')

const  orderSchema = mongoose.Schema({
    orderTime:{
        type:Date,
        default:Date.now()
    },
    cancelled:{
        type:Boolean,
        default:false,
    },
    finished:{
        type:Boolean,
        default:false
    },
    rejected:{
        type:Boolean,
        default:false
    },
    completed:{
        type:Boolean,
        default:false
    },
    service:{
        type:String,
        required:true
    },
    carModel:{
        type:String,
        required:true
    },
    washId :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Wash",
        required:true
    },
    UserId :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }


})

module.exports = mongoose.model('orderModel',orderSchema)