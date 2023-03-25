const saleService = require("../services/SaleService");
 
exports.getAllSales = async (req, res) => {
  try {
    const sales = await saleService.getAllSales();
    res.json({ data: sales, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createSale = async (req, res) => {
  try {
    const sale = await saleService.createSale(req.body);
    res.json({ data: sale, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getSaleById = async (req, res) => {
  try {
    const sale = await saleService.getSaleById(req.params.id);
    res.json({ data: sale, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateSale = async (req, res) => {
  try {
    const sale = await saleService.updateSale(req.params.id, req.body);
    res.json({ data: sale, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteSale = async (req, res) => {
  try {
    const sale = await saleService.deleteSale(req.params.id);
    res.json({ data: sale, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};