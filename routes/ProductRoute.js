import express from "express";

import { getAllProducts, getAllProductsFromDatabase, addMultipleProductsToDatabase } from "../controllers/ProductController.js";
import Product from "../models/ProductModel.js";

const router = express.Router();

router.get("/users", getAllProducts);
router.get("/products-database", getAllProductsFromDatabase);
router.post("/products-database", addMultipleProductsToDatabase);
router.post('/addProduct', async (req, res) => {
  try {
    const { name, price } = req.body;

    // Create a new product in the database
    const newProduct = await Product.create({
      name,
      price,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;