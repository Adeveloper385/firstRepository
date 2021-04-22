const mongoose = require('mongoose');
const Schema = mongoose.Schema

const itemSchema = new Schema({
    product: String,
    price: String 
})

const Item = mongoose.model('Item', itemSchema);

itemSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = Item 
