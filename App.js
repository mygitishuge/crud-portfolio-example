//Express library
const express = require("express");
const app = express();

//Mongoose database
const mongoose = require("mongoose");
// const { MongoClient } = require('mongodb');

//Routers
const transactionRouter = require("./routes/TransactionRoutes");
const clientRouter = require("./routes/ClientRoutes");
const supplierRouter = require("./routes/SupplierRoutes");
const saleRouter = require("./routes/SaleRoutes");
const purchaseRouter = require("./routes/PurchaseRoutes");
const productRouter = require("./routes/ProductRoutes");
const stockroomRouter = require("./routes/StockroomRoutes");

// Parse JSON request bodies
app.use(express.json());

// Parse urlencoded request bodies
app.use(express.urlencoded({ extended: true }));

// configure mongoose
(async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/myapp', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
})();

// const uri = `mongodb://localhost:27017/`;

// const client = new MongoClient(uri);

// (async () => {
//   try {

//     // Connect to the MongoDB cluster
//     await client.connect();


//   } catch (error) {
//     console.log(error);
//   }
// })

//middleware
app.use("/api/transactions", transactionRouter);
app.use("/api/clients", clientRouter);
app.use("/api/suppliers", supplierRouter);
app.use("/api/sales", saleRouter);
app.use("/api/purchases", purchaseRouter);
app.use("/api/stockrooms", stockroomRouter);
app.use("/api/products", productRouter);


app.use(express.json());

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

module.exports = app;

