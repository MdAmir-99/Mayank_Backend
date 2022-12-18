const order = require('../models/model')



const createOrder = async(req,res) => {

    try{

        let data = req.body

        await order.create(data)
        return res.status(201).send({msg:"Success"})

    }
    catch(err){
           return res.status(500).send({err})
    }
   
}

module.exports = {createOrder}