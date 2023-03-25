const express = require("express");

console.log("Transaction route loaded successfully");

const {
  getAllTransactions,
  createTransaction,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/TransactionController");
 
const transactionRouter = express.Router();
 
transactionRouter.route("/").get(getAllTransactions).post(createTransaction);
transactionRouter.route("/:id").get(getTransactionById).put(updateTransaction).delete(deleteTransaction);
 
module.exports = transactionRouter;