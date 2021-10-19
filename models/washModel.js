const mongoose = require('mongoose')

const washSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    isActive:{
        type:Boolean,
        default:false
    },
    phone:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    logo:{
        type:String,
    
    },
    photos:[
        {
            type:String,
        }
    ],  
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
    serviceType:{
        type:Array,
    },
    like:{
        type:Number,
        default:0
    },
    dislike:{
        type:Number,
        default:0
    },
   
    workFrom:{
        type:String,

    },
    workTo : {
        type:String
    },
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