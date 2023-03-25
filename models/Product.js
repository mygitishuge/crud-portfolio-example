const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const productSchema = new Schema({
    name: String,
    supplier: {
        type: Schema.Types.ObjectId,
        ref: "Supplier",
        required: true,
    },
    costPrice: {
        type: mongoose.Decimal128,
        required: true,
        min: 0,
    },
    sellPrice: {
        type: mongoose.Decimal128,
        required: true,
        min: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
 
module.exports = mongoose.model("Product", productSchema);