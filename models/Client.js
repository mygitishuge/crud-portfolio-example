const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
//This schema contains the data for each client

const clientSchema = new Schema({
    name: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
 
module.exports = mongoose.model("Client", clientSchema);
