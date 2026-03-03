import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.js";

const generateToken = (id) =>
  jwt.sign(
    { id },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

/* LOGIN */
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user)
    throw new Error("User not found");

  const match = await bcrypt.compare(
    password,
    user.password
  );

  if (!match)
    throw new Error("Invalid credentials");

  res.json({
    token: generateToken(user._id),
  });
});
