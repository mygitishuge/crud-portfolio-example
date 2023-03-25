const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stockroomSchema = new Schema({
  user: { // User associated with the stock
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: true
  },
  products: [{
    product: { // Product associated with the stock
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: { // Quantity of the product in the user's stock
      type: Number,
      required: true,
      default: 0
    }
  }]
});


module.exports = mongoose.model("Stockroom", stockroomSchema);
