const express = require("express");
const router = express.Router();
const qr = require("qrcode");

// Halaman Utama
router.get("/", (req, res) => {
  res.render("pages/home");
});

// Proses Pembuatan QR Code
router.post("/qrcode", (req, res) => {
  const url = req.body.url;

  // If the input is null return "Empty Data" error
  if (url.length === 0) res.send("Empty Data!");

  qr.toDataURL(url, (err, src) => {
    if (err) res.send("Error occured");

    // Let us return the QR code image as our response and set it to be the source used in the webpage
    res.render("pages/qrcode", {
      src,
    });
  });
});

// Halaman Error 404
router.use("/", (req, res) => {
  res.render("pages/error404");
});

module.exports = router;
