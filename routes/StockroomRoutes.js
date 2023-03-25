const express = require("express");

console.log("Stockroom route loaded successfully");

const {
  getAllStockrooms,
  createStockroom,
  getStockroomById,
  updateStockroom,
  deleteStockroom,
} = require("../controllers/StockroomController");
 
const stockroomRouter = express.Router();
 
stockroomRouter.route("/").get(getAllStockrooms).post(createStockroom);
stockroomRouter.route("/:id").get(getStockroomById).put(updateStockroom).delete(deleteStockroom);
 
module.exports = stockroomRouter;