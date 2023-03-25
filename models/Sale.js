const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//This schema contains the data for each sale

const saleSchema = new Schema({
    name: String,
    client: {
        type: Schema.Types.ObjectId,
        ref: "Client",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
 
module.exports = mongoose.model("Sale", saleSchema);