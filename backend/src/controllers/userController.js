import User from "../models/user.js";

// Login user
export const loginUser = async (req, res) => {
    res.json({mssg: 'Login user'});
}

// Register user 
export const registerUser = async (req, res) => {
    res.json({mssg: 'Registered new user'});
}