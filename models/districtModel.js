const mongoose = require('mongoose')

const districtSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    region : {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Region"
    }
}, {timestamps: true} )

module.exports = mongoose.model("District",districtSchema)