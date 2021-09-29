const mongoose = require('mongoose')

const washSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    phone:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    address:{
        type:String,
        required:true,
        trim:true,
    },
    lat:{
        type:Number
    },
    lang:{
        type:Number
    },
    serviceType:[],
    districtId:{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
      ref:"District"
    },
    ownerId: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    }
}, {timestamps: true} )

module.exports = mongoose.model('Wash',washSchema)