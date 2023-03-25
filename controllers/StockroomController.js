const stockroomService = require("../services/StockroomService");
 
exports.getAllStockrooms = async (req, res) => {
  try {
    const stockrooms = await stockroomService.getAllStockrooms();
    res.json({ data: stockrooms, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createStockroom = async (req, res) => {
  try {
    const stockroom = await stockroomService.createStockroom(req.body);
    res.json({ data: stockroom, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getStockroomById = async (req, res) => {
  try {
    const stockroom = await stockroomService.getStockroomById(req.params.id);
    res.json({ data: stockroom, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateStockroom = async (req, res) => {
  try {
    const stockroom = await stockroomService.updateStockroom(req.params.id, req.body.user, req.body.products, req.body.costPrice, req.body.sellPrice);
    res.json({ data: stockroom, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteStockroom = async (req, res) => {
  try {
    const stockroom = await stockroomService.deleteStockroom(req.params.id);
    res.json({ data: stockroom, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};