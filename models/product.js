const {Schema, model} = require('mongoose');

const productSchema = new Schema({
    name: {type:String, required:true},
    description: {type:String, required:true},
    img: {type:String},
    price: {type:Number, required:true},
    qty: {type:Number, min:0}
})

module.exports = model('Product', productSchema);