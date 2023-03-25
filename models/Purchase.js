const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
//This schema contains the data for each purchase

const purchaseSchema = new Schema({
    name: String,
    supplier: {
        type: Schema.Types.ObjectId,
        ref: "Supplier",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
 
module.exports = mongoose.model("Purchase", purchaseSchema);