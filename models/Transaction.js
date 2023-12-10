import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Transaction = db.define("transaction", {
  transaction_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
  },
  address_id: {
    type: DataTypes.INTEGER,
  },
  product_id: {
    type: DataTypes.INTEGER,
  },
});

export default Transaction;
