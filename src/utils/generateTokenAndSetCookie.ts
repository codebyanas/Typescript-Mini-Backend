import dotenv from "dotenv";
import { Response } from "express";
import jwt from "jsonwebtoken";

dotenv.config();

export const generateTokenAndSetCookie = (res: Response, userId: string): string => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET environment variable are not set");
  }

  const token = jwt.sign({ userId }, secret, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 15 * 24 * 60 * 60 * 1000,
  });

  return token;
};

