const clientService = require("../services/ClientService");
 
exports.getAllClients = async (req, res) => {
  try {
    const clients = await clientService.getAllClients();
    res.json({ data: clients, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createClient = async (req, res) => {
  console.log('Create client called in controller');
  try {
    const client = await clientService.createClient(req.body);
    res.json({ data: client, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getClientById = async (req, res) => {
  console.log('Read client by id called in controller');
  console.log(req.params.id);
  try {
    const client = await clientService.getClientById(req.params.id);
    res.json({ data: client, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateClient = async (req, res) => {
  try {
    console.log(req.body.name);
    const client = await clientService.updateClient(req.params.id, req.body.name);
    res.json({ data: client, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteClient = async (req, res) => {
  try {
    const client = await clientService.deleteClient(req.params.id);
    res.json({ data: client, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};