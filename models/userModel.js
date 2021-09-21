const {Schema,model}  = require('mongoose')

const schema = new Schema({
    phone:{
        type:Number,
        required:true,
        trim:true,
        unique:true,
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

},{timestamps:true})

module.exports = model("User",schema)