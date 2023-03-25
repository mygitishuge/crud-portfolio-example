const PurchaseModel = require("../models/Purchase");
 
exports.getAllPurchases = async () => {
  return await PurchaseModel.find();
};
 
exports.createPurchase = async (purchase) => {
  return await PurchaseModel.create(purchase);
};

exports.getPurchaseById = async (id) => {
  return await PurchaseModel.findById(id);
};
 
exports.updatePurchase = async (id, purchase) => {
  const existingPurchase = await PurchaseModel.findById(id);

  if (!existingPurchase) {
    throw new Error(`Purchase with ID ${id} not found`);
  }

  existingPurchase.name = purchase.name; 
  existingPurchase.supplier = purchase.supplier; 
  const updatedPurchase = await existingPurchase.save();

  return updatedPurchase;
};

 
exports.deletePurchase = async (id) => {
  return await PurchaseModel.findByIdAndDelete(id);
};