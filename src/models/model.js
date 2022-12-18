const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    
    Ward:{
        type:String,
        required:true
    },

    Bed:{
        type:String,
        required:true
    },

    Date:{
        type:Date,
        default: new Date(),
    },

    OrderType:{
        type:String,
        enum:['Breakfast','Lunch','Dinner']
    },

    order:{
        type:Array,
        required:true
    }

})

module.exports = mongoose.model("Order",orderSchema)