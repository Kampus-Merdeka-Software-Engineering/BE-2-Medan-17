import dbConnection from '../config/Database.js';
import { DataTypes } from 'sequelize';

const Login = dbConnection.define('Login', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING }
}, {
  freezeTableName: true
});

export default Login;

