import express from "express";
import User from "../models/UserModel.js";
import { loginUser, signupUser } from "../controllers/UserController.js";


const router = express.Router();
const app = express();
router.post('/users', signupUser);
router.get("/users", loginUser);
router.post("/register");


// Registration route
router.post('/register', async (req, res) => {
    try {
        // Extract user data from the request body
        const { username, password } = req.body;

        // Create a new user in the database
        const newUser = await User.create({
            username,
            password,
        });
        // Respond with a success message
        res.status(201).json({ msg: "User created successfully!", user: newUser });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



app.post('/index.html', (req, res) => {
    // Handle the POST request here
});


export default router;


