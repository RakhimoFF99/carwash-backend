
const orderModel = require('../models/orderModel')
exports.addOrder = async  function (req,res) {
    try {
        const order = await new orderModel(req.body)
        const result = await order.save()
        res.status(201).json({
            success:true,
            message:"Buyurtma mufaqqiyatli qo'shildi",
            data:result
        })

    }
    catch(e) {
        res.status(400).send(e)
    }

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