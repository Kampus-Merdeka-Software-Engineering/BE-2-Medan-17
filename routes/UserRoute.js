import express from "express";

import { signupUser } from "../controllers/UserController.js";

const router = express.Router();

router.post('/users', signupUser);

export default router;