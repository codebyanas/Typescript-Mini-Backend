"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const mongodbURI = process.env.MONGODB_URI;
const connectDB = async () => {
    try {
        if (!mongodbURI) {
            throw new Error('MONGODB_URI environment variable is not defined');
        }
        await mongoose_1.default.connect(`${mongodbURI}/ts-mini-backend`);
        console.log("Connected to Database Successfully!");
    }
    catch (error) {
        console.log("Database connection error", error);
    }
};
exports.connectDB = connectDB;
//# sourceMappingURL=connectDatabase.js.map