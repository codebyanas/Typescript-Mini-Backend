"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (req, res, next) => {
    const token = req.cookies?.token;
    if (!token) {
        res
            .status(401)
            .json({ success: false, message: "Unauthorized - no token provided" });
        return;
    }
    try {
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error("JWT_SECRET environment variable is not set.");
        }
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        if (!decoded || !decoded.userId)
            res
                .status(401)
                .json({ success: false, message: "Unauthorized - invalid token" });
        return;
        req.userId = decoded.userId;
        next();
    }
    catch (error) {
        console.log("Error in verifyToken ", error);
        res.status(500).json({ success: false, message: "Server error" });
        return;
    }
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=verifyToken.js.map