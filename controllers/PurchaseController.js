const purchaseService = require("../services/PurchaseService");
 
exports.getAllPurchases = async (req, res) => {
  try {
    const purchases = await purchaseService.getAllPurchases();
    res.json({ data: purchases, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createPurchase = async (req, res) => {
  try {
    const purchase = await purchaseService.createPurchase(req.body);
    res.json({ data: purchase, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getPurchaseById = async (req, res) => {
  try {
    const purchase = await purchaseService.getPurchaseById(req.params.id);
    res.json({ data: purchase, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updatePurchase = async (req, res) => {
  try {
    const purchase = await purchaseService.updatePurchase(req.params.id, req.body);
    res.json({ data: purchase, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deletePurchase = async (req, res) => {
  try {
    const purchase = await purchaseService.deletePurchase(req.params.id);
    res.json({ data: purchase, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};