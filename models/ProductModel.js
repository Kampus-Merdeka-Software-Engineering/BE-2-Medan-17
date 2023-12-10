import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Product = db.define("product", {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.INTEGER,
  },
});

export default Product;
