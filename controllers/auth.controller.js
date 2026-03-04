import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const signUp = async (req, res, next) => {
  try {
    const { full_name, email, password } = req.body;
    if (!full_name || !email || !password) {
      const error = new Error("ful_name,email,password required");
      error.statusCode = 400;
      throw error;
    }
    const emailExist = await User.findOne({ email });
    if (emailExist) {
      const error = new Error("User already exist");
      error.statusCode = 409;
      throw error;
    }
    if (password.length < 8) {
      const error = new Error("Not strong password");
      error.statusCode = 409;
      throw error;
    }
;
    const hashed_passowrd = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      full_name,
      email,
      password: hashed_passowrd,
    });
    res.status(201).json({
      sucess: true,
      data: newUser,
    });
  } catch (err) {
    next(err);
  }
};

export const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      const error = new Error("ful_name,email,password required");
      error.statusCode = 400;
      throw error;
    }
    const user = await User.findOne({ email });
    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }

    const validPassword = bcrypt.compare(password, user.password);
    if (!validPassword) {
      const error = new Error("Invalid credential");
      error.statusCode = 401;
      throw error;
    }

    res.status(200).json({
      sucess: true,
      data: user,
    });
  } catch (err) {
    next(err);
  }
};
