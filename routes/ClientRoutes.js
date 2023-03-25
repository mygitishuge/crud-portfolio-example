const express = require("express");

console.log("Client route loaded successfully");

const {
  getAllClients,
  createClient,
  getClientById,
  updateClient,
  deleteClient,
} = require("../controllers/ClientController");
 
const clientRouter = express.Router();
 
clientRouter.route("/").get(getAllClients).post(createClient);
clientRouter.route("/:id").get(getClientById).put(updateClient).delete(deleteClient);
 
module.exports = clientRouter;