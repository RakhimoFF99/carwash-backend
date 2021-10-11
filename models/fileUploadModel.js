const {Schema,model} = require('mongoose')

const fileSchema = new Schema ({
    fileName : {
        type:"String",
        required:true
    },
    path :{
        type:String,
        required:true
    }
})

module.exports = model('fileUpload',fileSchema)