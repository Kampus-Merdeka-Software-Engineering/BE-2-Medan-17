import dbConnection from '../config/Database.js';
import { DataTypes } from 'sequelize';

const contactUs = dbConnection.define('contactUs', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  message: { type: DataTypes.STRING }
}, {
  freezeTableName: true
});

export default contactUs;

