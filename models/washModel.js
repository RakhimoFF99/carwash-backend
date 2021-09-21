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
        trim:true
    },
    address:{
        type:String,
        required:true,
        trim:true,

    },
    services:[],
    ownerId: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    }
})

module.exports = mongoose.model('Wash',washSchema)