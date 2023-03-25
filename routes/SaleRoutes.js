const express = require("express");

const {
  getAllSales,
  createSale,
  getSaleById,
  updateSale,
  deleteSale,
} = require("../controllers/SaleController");
 
const saleRouter = express.Router();
 
saleRouter.route("/").get(getAllSales).post(createSale);
saleRouter.route("/:id").get(getSaleById).put(updateSale).delete(deleteSale);
 
module.exports = saleRouter;