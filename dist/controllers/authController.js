"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = exports.logout = exports.login = exports.signup = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userModel_1 = require("../models/userModel");
const generateTokenAndSetCookie_1 = require("../utils/generateTokenAndSetCookie");
const signup = async (req, res) => {
    const { email, password, name } = req.body;
    try {
        const userAlreadyExists = await userModel_1.User.findOne({ email });
        if (userAlreadyExists) {
            res.status(400).json({ success: false, message: "User already exists" });
            return;
        }
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();
        const user = new userModel_1.User({
            email,
            password: hashedPassword,
            name,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 10 * 60 * 1000, // 10 minutes
        });
        await user.save();
        // jwt
        (0, generateTokenAndSetCookie_1.generateTokenAndSetCookie)(res, user._id.toString());
        const userDoc = user._doc || user;
        res.status(201).json({
            success: true,
            message: "User created successfully",
            user: {
                ...userDoc,
                password: undefined,
            },
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
exports.signup = signup;
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel_1.User.findOne({ email });
        if (!user) {
            res.status(400).json({ success: false, message: "Invalid credentials" });
            return;
        }
        const isPasswordValid = await bcryptjs_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(400).json({ success: false, message: "Invalid credentials" });
            return;
        }
        (0, generateTokenAndSetCookie_1.generateTokenAndSetCookie)(res, user._id.toString());
        user.lastLogin = new Date();
        await user.save();
        const userDoc = user._doc || user;
        res.status(200).json({
            success: true,
            message: "Logged in successfully",
            user: {
                ...userDoc,
                password: undefined,
            },
        });
    }
    catch (error) {
        console.log("Error in login ", error);
        res.status(400).json({ success: false, message: error.message });
    }
};
exports.login = login;
const logout = async (req, res) => {
    res.clearCookie("token");
    res.status(200).json({ success: true, message: "Logged out successfully" });
};
exports.logout = logout;
const checkAuth = async (req, res) => {
    try {
        const user = await userModel_1.User.findById(req.userId).select("-password");
        if (!user) {
            res.status(400).json({ success: false, message: "User not found" });
            return;
        }
        res.status(200).json({ success: true, user });
    }
    catch (error) {
        console.log("Error in checkAuth ", error);
        res.status(400).json({ success: false, message: error.message });
    }
};
exports.checkAuth = checkAuth;
//# sourceMappingURL=authController.js.map