const Product = require("../models/products.model");

// CREATE
const createProduct = async (req, res) => {
  console.log(req.body);

  try {
    const data = req.body;
    let answer = await new Product(data).save();
    res.status(201).json(answer);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

// READ
const getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    let products = id
      ? await Product.find({ id }, "-_id -__v").populate("provider", '-_id -__v')
      : await Product.find({}, "-_id -__v").populate("provider", '-_id -__v'); //{}
    res.status(200).json(products); // Respuesta de la API para 1 producto
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

// UPATE
const editProduct = (req, res) => {
  res.status(200).send("Producto editado!");
};

// DELETE
const deleteProduct = (req, res) => {
  res.status(200).send("Producto borrado!. Has borrado:" + req.params.id);
};

module.exports = {
  createProduct,
  getProduct,
  editProduct,
  deleteProduct,
};
