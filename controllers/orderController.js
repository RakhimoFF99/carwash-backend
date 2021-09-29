
const orderModel = require('../models/orderModel')
exports.addOrder = function (req,res) {
   
}
exports.getAllOrder = async function (req,res) {
    try {
        const order = await orderModel.find({})
        if(order) {
            res.status(200).json({
                success:true,
                data:order
            })
        }
    }
    catch(e) {
        res.status(400).json({
            success:false,
            message:e
        })
    }
        
}
exports.getOrderById = async function(req,res) {
   try {
       const order = await orderModel.findById(req.params.id)
       if(order) {
           res.status(200).json({
               success:true,
               data:order
           })
       }
   }
   catch(e) {
       res.status(400).json({
           success:false,
           message:e
       })
   }
}
exports.deleteOrderById = async (req,res) => {
    try {
        const order = await orderModel.findByIdAndRemove(req.params.id)
        if(order) {
            res.status(200).json({
                success:true,
                data:order
            })
        }
    }
    catch(e) {
        res.status(400).json({
            success:false,
            message:e
        })
    }
    
}

exports.updateOrderById  = async (req,res) => {
    try {
        const order = await orderModel.findByIdAndUpdate(req.params.id,{$set:req.body})
        if(order) {
            res.status(200).json({
                success:true,
                data:order
            })
        }
    }
    catch(e) {
        res.status(400).json({
            success:false,
            message:e
        })
    }
  

} 