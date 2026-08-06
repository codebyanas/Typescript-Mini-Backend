import dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";

import { connectDB } from "./database/connectDatabase";
import { authRoutes } from "./routes/authRoute";

dotenv.config();

const app = express();
const port: string | number = process.env.PORT || 5000;

// Middleware to handle dynamic CORS
app.use((req: Request, res: Response, next: NextFunction) => {
  const allowedOrigins: string[] = ["http://localhost:3000"];
  const origin = req.headers.origin;

  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  next();
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Connect to Database
connectDB();

// Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("You are in the root file of the web!");
});

app.get("*", (req, res) => {
  res.status(404).send("404 Page not found");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
