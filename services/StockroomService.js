const StockroomModel = require("../models/Stockroom");
 
exports.getAllStockrooms = async () => {
  return await StockroomModel.find();
};
 
exports.createStockroom = async (stockroom) => {
  return await StockroomModel.create(stockroom);
};

exports.getStockroomById = async (id) => {
  return await StockroomModel.findById(id);
};
 
exports.updateStockroom = async (id, user, products) => {
  const existingStockroom = await StockroomModel.findById(id);

  if (!existingStockroom) {
    throw new Error(`Stockroom with ID ${id} not found`);
  }

  existingStockroom.user = user;
  existingStockroom.products = products;
  const updatedStockroom = await existingStockroom.save();

  return updatedStockroom;
};

 
exports.deleteStockroom = async (id) => {
  return await StockroomModel.findByIdAndDelete(id);
};