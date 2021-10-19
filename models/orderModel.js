const mongoose = require('mongoose')

const  orderSchema = mongoose.Schema({
    orderTime:{
        type:Date,
        default:Date.now
    },
    name:{
        type:String
    },
    phone:{
        type:Number
    },
   status:{
    type :Number,
    default:1
    },
    serviceType:{
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
     
    }


})

module.exports = mongoose.model('orderModel',orderSchema)