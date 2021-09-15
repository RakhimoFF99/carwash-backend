const {Schema}  = require('mongoose')

const schema = new Schema({
    phone:{
        type:Number,
        required:true,
        trim:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    }

})