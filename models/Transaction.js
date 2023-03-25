const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    sale: {
        type: Schema.Types.ObjectId,
        ref: "Sale",
    },
    purchase: {
        type: Schema.Types.ObjectId,
        ref: "Purchase",
    },
    amount: {
        type: mongoose.Decimal128,
        required: true,
        min: 0,
    },
    discount: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});



// Validate that either sale or purchase is present, but not both
transactionSchema.pre("validate", function (next) {
    if ((!this.purchase && !this.sale) || (this.purchase && this.sale)) {
        const error = new Error(
            "A transaction must be connected to either a sale or a purchase, but not both."
        );
        next(error);
    } else {
        next();
    }
});

module.exports = mongoose.model("Transaction", transactionSchema);
