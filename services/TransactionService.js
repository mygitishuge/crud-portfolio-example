const TransactionModel = require("../models/Transaction");
 
exports.getAllTransactions = async () => {
    return await TransactionModel.find();
};
 
exports.createTransaction = async (transaction) => {
    return await TransactionModel.create(transaction);
};

exports.getTransactionById = async (id) => {
    return await TransactionModel.findById(id);
};
 
exports.updateTransaction = async (id, transaction) => {
    const existingTransaction = await TransactionModel.findById(id);

    if (!existingTransaction) {
        throw new Error(`Transaction with ID ${id} not found`);
    }

    const updatedTransaction = await TransactionModel.findByIdAndUpdate(id, transaction, { new: true });

    return updatedTransaction;
};

 
exports.deleteTransaction = async (id) => {
  return await TransactionModel.findByIdAndDelete(id);
};