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
    },
    role:{
        type:String,
        required:true,
        default:"user",
        enum:["admin","supervisor","user"]
    }

},{timestamps:true})

module.exports = model("User",schema)