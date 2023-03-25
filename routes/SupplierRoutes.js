const express = require("express");

const {
  getAllSuppliers,
  createSupplier,
  getSupplierById,
  updateSupplier,
  deleteSupplier,
} = require("../controllers/SupplierController");
 
const supplierRouter = express.Router();
 
supplierRouter.route("/").get(getAllSuppliers).post(createSupplier);
supplierRouter.route("/:id").get(getSupplierById).put(updateSupplier).delete(deleteSupplier);
 
module.exports = supplierRouter;