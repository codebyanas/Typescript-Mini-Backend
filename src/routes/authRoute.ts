import express, {Router} from 'express';
import {verifyToken} from '../middleware/verifyToken.js';
import { signup,  login, logout, checkAuth } from '../controllers/authController';

export const authRoutes: Router = express.Router()

authRoutes.get("/check-auth", verifyToken, checkAuth);
authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.post("/logout", logout);
