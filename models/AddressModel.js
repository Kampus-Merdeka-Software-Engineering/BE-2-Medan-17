import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Address = db.define("address", {
  addres_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.STRING,
  },
  zipcode: {
    type: DataTypes.STRING,
  },
});

export default Address;
