// ContactUsRoute.js
import express from 'express';
import { addLogin } from '../controllers/LoginController.js'; // <-- Correct casing

const router = express.Router();

// Define your contactUs routes
router.post('/login', addLogin);

export default router;

