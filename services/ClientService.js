const ClientModel = require("../models/Client");
 
exports.getAllClients = async () => {
  return await ClientModel.find();
};
 
exports.createClient = async (client) => {
  return await ClientModel.create(client);
};

exports.getClientById = async (id) => {
  return await ClientModel.findById(id);
};
 
exports.updateClient = async (id, name) => {
  const existingClient = await ClientModel.findById(id);

  if (!existingClient) {
    throw new Error(`Client with ID ${id} not found`);
  }

  existingClient.name = name;
  const updatedClient = await existingClient.save();

  return updatedClient;
};

 
exports.deleteClient = async (id) => {
  return await ClientModel.findByIdAndDelete(id);
};