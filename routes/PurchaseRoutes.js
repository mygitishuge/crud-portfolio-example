const express = require("express");

const {
  getAllPurchases,
  createPurchase,
  getPurchaseById,
  updatePurchase,
  deletePurchase,
} = require("../controllers/PurchaseController");
 
const purchaseRouter = express.Router();
 
purchaseRouter.route("/").get(getAllPurchases).post(createPurchase);
purchaseRouter.route("/:id").get(getPurchaseById).put(updatePurchase).delete(deletePurchase);
 
module.exports = purchaseRouter;