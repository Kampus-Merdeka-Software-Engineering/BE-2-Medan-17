import express from "express";
import cors from "cors";
import db from "./config/Database.js";
import dotenv from "dotenv";
import UserRoute from  "./routes/UserRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import ContactUsRoute from "./routes/ContactUsRoute.js";
import LoginRoute from "./routes/LoginRoute.js";




// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// for gettin data from frontend
app.use(express.json());
// for cors policy
app.use(cors());
//routes
app.use(UserRoute);
app.use(ProductRoute);
app.use(ContactUsRoute);
app.use(LoginRoute);
app.use(express.static('public')); 

// connection to database and activate server
db.sync({alter: true})
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  })
  .catch(error => {
    console.log(`Unable to connect to database: ${error}`);
  });

