const ProductModel = require("../models/Product");
 
exports.getAllProducts = async () => {
  return await ProductModel.find();
};
 
exports.createProduct = async (product) => {
  return await ProductModel.create(product);
};

exports.getProductById = async (id) => {
  return await ProductModel.findById(id);
};
 
exports.updateProduct = async (id, name, supplier, costPrice, sellPrice) => {
  const existingProduct = await ProductModel.findById(id);

  if (!existingProduct) {
    throw new Error(`Product with ID ${id} not found`);
  }

  existingProduct.name = name;
  existingProduct.supplier = supplier;
  existingProduct.costPrice = costPrice;
  existingProduct.sellPrice = sellPrice;
  const updatedProduct = await existingProduct.save();

  return updatedProduct;
};

exports.updateSupplier = async (id, name) => {
  const existingSupplier = await SupplierModel.findById(id);

  if (!existingSupplier) {
    throw new Error(`Supplier with ID ${id} not found`);
  }

  existingSupplier.name = name;
  const updatedSupplier = await existingSupplier.save();

  return updatedSupplier;
};

 
exports.deleteProduct = async (id) => {
  return await ProductModel.findByIdAndDelete(id);
};