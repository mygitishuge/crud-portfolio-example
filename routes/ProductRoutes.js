const express = require("express");

const {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/ProductController");
 
const productRouter = express.Router();
 
productRouter.route("/").get(getAllProducts).post(createProduct);
productRouter.route("/:id").get(getProductById).put(updateProduct).delete(deleteProduct);
 
module.exports = productRouter;