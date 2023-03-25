const SupplierModel = require("../models/Supplier");
 
exports.getAllSuppliers = async () => {
  return await SupplierModel.find();
};
 
exports.createSupplier = async (supplier) => {
  return await SupplierModel.create(supplier);
};

exports.getSupplierById = async (id) => {
  return await SupplierModel.findById(id);
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

 
exports.deleteSupplier = async (id) => {
  return await SupplierModel.findByIdAndDelete(id);
};