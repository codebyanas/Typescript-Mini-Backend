"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = __importDefault(require("express"));
const verifyToken_js_1 = require("../middleware/verifyToken.js");
const authController_1 = require("../controllers/authController");
exports.authRoutes = express_1.default.Router();
exports.authRoutes.get("/check-auth", verifyToken_js_1.verifyToken, authController_1.checkAuth);
exports.authRoutes.post("/signup", authController_1.signup);
exports.authRoutes.post("/login", authController_1.login);
exports.authRoutes.post("/logout", authController_1.logout);
//# sourceMappingURL=authRoute.js.map