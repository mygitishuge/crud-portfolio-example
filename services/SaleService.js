const SaleModel = require("../models/Sale");
 
exports.getAllSales = async () => {
  return await SaleModel.find();
};
 
exports.createSale = async (sale) => {
  return await SaleModel.create(sale);
};

exports.getSaleById = async (id) => {
  return await SaleModel.findById(id);
};
 
exports.updateSale = async (id, sale) => {
  const existingSale = await SaleModel.findById(id);

  if (sale.status === 'draft') {
    throw new Error('Cannot update a blog that is still in draft status');
  }

  if (!existingSale) {
    throw new Error(`Sale with ID ${id} not found`);
  }

  const updatedSale = await SaleModel.findByIdAndUpdate(id, sale, { new: true });

  return updatedSale;
};

 
exports.deleteSale = async (id) => {
  return await SaleModel.findByIdAndDelete(id);
};