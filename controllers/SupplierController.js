const supplierService = require("../services/SupplierService");
 
exports.getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await supplierService.getAllSuppliers();
    res.json({ data: suppliers, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createSupplier = async (req, res) => {
  try {
    console.log(req.body);
    const supplier = await supplierService.createSupplier(req.body);
    res.json({ data: supplier, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getSupplierById = async (req, res) => {
  try {
    const supplier = await supplierService.getSupplierById(req.params.id);
    res.json({ data: supplier, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateSupplier = async (req, res) => {
  try {
    const supplier = await supplierService.updateSupplier(req.params.id, req.body.name);
    res.json({ data: supplier, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteSupplier = async (req, res) => {
  try {
    const supplier = await supplierService.deleteSupplier(req.params.id);
    res.json({ data: supplier, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};