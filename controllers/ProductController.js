import User from "../models/UserModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    console.log("Products in the database:", products);

    res.status(200).json(products);
  } catch (error) {
    res.send(error);
  }
};

export const getAllProductsFromDatabase = async (req, res) => {
  try {
    const productsFromDatabase = await Product.findAll();
    res.status(200).json(productsFromDatabase);
  } catch (error) {
    console.error("Error retrieving products from the database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addMultipleProductsToDatabase = async (req, res) => {
  try {
    const { products } = req.body;

    // Add each product to the database
    const createdProducts = await Product.bulkCreate(products);
    res.status(201).json(createdProducts);
  } catch (error) {
    console.error("Error adding multiple products to the database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
