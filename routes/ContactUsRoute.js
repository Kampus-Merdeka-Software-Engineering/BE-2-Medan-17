// ContactUsRoute.js
import express from 'express';
import { addContact } from '../controllers/contactUsController.js'; // <-- Correct casing

const router = express.Router();

// Define your contactUs routes
router.post('/contact-us', addContact);

export default router;

