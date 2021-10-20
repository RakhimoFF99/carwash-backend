
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
        const order = await orderModel.find({}).sort({status:1,createdAt:-1})
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
        const order = await orderModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
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
  
  exports.completeOrder = async(req,res) => {
    const order = await orderModel.findById(req.params.id)
    if(order.status > 1) {
        return res.status(400).json({
            success:false,
            message:"Buyurtma allaqachon yakunlangan yoki bekor qilingan"
        })
    }
   try {
   
  
    order.status = 4
   await order.save()  
   res.status(200).json({
       success:true,
       data:order
   })
   } 
   catch(e) {
       res.status(400).json({
           success:true,
           message:e
       })
   } 

   
  }

  exports.rejectOrder = async (req,res) => {
    const order = await orderModel.findById(req.params.id)
    if(order.status > 1) {
        return res.status(400).json({
            success:false,
            message:"Buyurtma allaqachon yakunlangan yoki bekor qilingan"
        })
    }
    try {
      
        order.status = 3
       await order.save()  
       res.status(200).json({
           success:true,
           data:order
       })
       } 
       catch(e) {
           res.status(400).json({
               success:true,
               message:e
           })
       } 
    
  }