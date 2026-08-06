import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import { User } from "../models/userModel";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie";
import { AuthenticatedRequest } from "../middleware/verifyToken";

export const signup = async (req: Request, res: Response): Promise<void> => {
  const { email, password, name } = req.body;

  try {
    const userAlreadyExists = await User.findOne({ email });

    if (userAlreadyExists) {
      res.status(400).json({ success: false, message: "User already exists" });
      return;
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    const verificationToken = Math.floor(
      100000 + Math.random() * 900000,
    ).toString();

    const user = new User({
      email,
      password: hashedPassword,
      name,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 10 * 60 * 1000, // 10 minutes
    });

    await user.save();

    // jwt
    generateTokenAndSetCookie(res, user._id.toString());

    const userDoc = (user as any)._doc || user;

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        ...userDoc,
        password: undefined,
      },
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ success: false, message: "Invalid credentials" });
      return;
    }
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(400).json({ success: false, message: "Invalid credentials" });
      return;
    }

    generateTokenAndSetCookie(res, user._id.toString());

    user.lastLogin = new Date();
    await user.save();

    const userDoc = (user as any)._doc || user;

    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      user: {
        ...userDoc,
        password: undefined,
      },
    });
  } catch (error: any) {
    console.log("Error in login ", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

export const logout = async (req: Request, res: Response): Promise<void> => {
  res.clearCookie("token");
  res.status(200).json({ success: true, message: "Logged out successfully" });
};

export const checkAuth = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) {
      res.status(400).json({ success: false, message: "User not found" });
      return;
    }

    res.status(200).json({ success: true, user });
  } catch (error: any) {
    console.log("Error in checkAuth ", error);
    res.status(400).json({ success: false, message: error.message });
  }
};
