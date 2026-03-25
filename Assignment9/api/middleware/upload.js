const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Ensure images directory exists
const imagesDir = path.join(__dirname, "../images");
if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir);

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/gif"];

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, imagesDir),
  filename: (req, file, cb) => {
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, unique + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  if (ALLOWED_TYPES.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      Object.assign(new Error("Invalid file format. Only JPEG, PNG, and GIF are allowed."), {
        status: 400,
      }),
      false
    );
  }
};

const multerInstance = multer({ storage, fileFilter });

// Middleware wrapper — handles multer errors and returns JSON
const upload = (req, res, next) => {
  multerInstance.single("image")(req, res, (err) => {
    if (err) {
      return res.status(err.status || 400).json({ error: err.message });
    }
    next();
  });
};

module.exports = upload;