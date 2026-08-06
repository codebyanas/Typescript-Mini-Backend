import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export interface AuthenticatedRequest extends Request {
  userId?: string;
}

export const verifyToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
): void => {
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

    const decoded = jwt.verify(token, secret) as JwtPayload;

    if (!decoded || !decoded.userId)
      res
        .status(401)
        .json({ success: false, message: "Unauthorized - invalid token" });
    return;

    req.userId = decoded.userId as string;
    next();
  } catch (error) {
    console.log("Error in verifyToken ", error);
    res.status(500).json({ success: false, message: "Server error" });
    return;
  }
};
