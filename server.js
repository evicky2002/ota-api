const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "files/");
  },
  filename: (req, file, cb) => {
    cb(null, "uploadedFile" + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.send("File uploaded and overwritten successfully.");
});

app.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "files", "uploadedFile");
  if (fs.existsSync(filePath)) {
    res.download(filePath, "latestFile");
  } else {
    res.status(404).send("No file found.");
  }
});

app.listen(port, () => {
  console.log(`Server running on port:${port}`);
});
