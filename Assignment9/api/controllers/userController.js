const bcrypt = require("bcrypt");
const User = require("../models/User");

const SALT_ROUNDS = 10;

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidFullName = (name) => /^[a-zA-Z\s]+$/.test(name);
const isValidPassword = (pw) =>
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(pw);

// POST /user/create
exports.createUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password)
      return res.status(400).json({ error: "All fields are required." });
    if (!isValidFullName(fullName))
      return res.status(400).json({ error: "Full name must contain only alphabetic characters." });
    if (!isValidEmail(email))
      return res.status(400).json({ error: "Invalid email format." });
    if (!isValidPassword(password))
      return res.status(400).json({ error: "Password must be at least 8 characters and include uppercase, lowercase, digit, and special character." });
    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing)
      return res.status(400).json({ error: "Email already in use." });
    const hashed = await bcrypt.hash(password, SALT_ROUNDS);
    await User.create({ fullName, email: email.toLowerCase(), password: hashed });
    return res.status(201).json({ message: "User created successfully." });
  } catch (err) {
    return res.status(500).json({ error: "Internal server error." });
  }
};

// POST /user/login
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "Email and password are required." });
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user)
      return res.status(401).json({ message: "Invalid email or password." });
    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(401).json({ message: "Invalid email or password." });
    return res.status(200).json({ message: "Login successful.", username: user.fullName, email: user.email });
  } catch (err) {
    return res.status(500).json({ error: "Internal server error." });
  }
};

// PUT /user/edit
exports.updateUser = async (req, res) => {
  try {
    const { email, fullName, password } = req.body;
    if (!email) return res.status(400).json({ error: "Email is required." });
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(404).json({ error: "User not found." });
    if (!fullName && !password)
      return res.status(400).json({ error: "Provide at least fullName or password to update." });
    if (fullName) {
      if (!isValidFullName(fullName))
        return res.status(400).json({ error: "Full name must contain only alphabetic characters." });
      user.fullName = fullName;
    }
    if (password) {
      if (!isValidPassword(password))
        return res.status(400).json({ error: "Password must be at least 8 characters and include uppercase, lowercase, digit, and special character." });
      user.password = await bcrypt.hash(password, SALT_ROUNDS);
    }
    await user.save();
    return res.status(200).json({ message: "User updated successfully." });
  } catch (err) {
    return res.status(500).json({ error: "Internal server error." });
  }
};

// DELETE /user/delete
exports.deleteUser = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: "Email is required." });
    const result = await User.findOneAndDelete({ email: email.toLowerCase() });
    if (!result) return res.status(404).json({ error: "User not found." });
    return res.status(200).json({ message: "User deleted successfully." });
  } catch (err) {
    return res.status(500).json({ error: "Internal server error." });
  }
};

// GET /user/getAll
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { fullName: 1, email: 1, _id: 0 });
    return res.status(200).json({ users });
  } catch (err) {
    return res.status(500).json({ error: "Internal server error." });
  }
};

// POST /user/uploadImage
exports.uploadImage = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: "Email is required." });
    if (!req.file) return res.status(400).json({ error: "Image file is required." });
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(404).json({ error: "User not found." });
    if (user.imagePath)
      return res.status(400).json({ error: "Image already exists for this user." });
    const filePath = `/images/${req.file.filename}`;
    user.imagePath = filePath;
    await user.save();
    return res.status(201).json({ message: "Image uploaded successfully.", filePath });
  } catch (err) {
    return res.status(500).json({ error: "Internal server error." });
  }
};