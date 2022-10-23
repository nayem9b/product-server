const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const products = require("./product.json");

const port = process.env.port || 5000;

app.get("/", (req, res) => {
  res.send(products);
});

app.get("/category/:name", (req, res) => {
  const category = products.find((cat) => cat.category == req.params.name);
  res.send(category);
});

app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const singleProduct = products.filter((p) => p.id == id);
  if (!singleProduct) {
    res.send("Hudai time nosto");
  }
  res.send(singleProduct);
});

app.listen(port, () => {
  console.log("Port is running on", port);
});
