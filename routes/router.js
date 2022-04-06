const express = require("express");
const router = express.Router();
const qrcode = require("qrcode");

// Halaman Utama
router.get("/", (req, res) => {
  res.render("pages/home");
});

// Proses Pembuatan QR Code
router.post("/qrcode", async (req, res) => {
  const url = req.body.url;

  if (url.length === 0) {
    res.send("Empty Data!");
  }

  try {
    const src = await qrcode.toDataURL(url, {
      errorCorrectionLevel: req.body.errorCorrectionLevel,
      margin: req.body.margin,
      color: {
        dark: req.body.dark,
        light: req.body.light,
      },
    });
    const image = await qrcode.toFile("./public/img/yourqrcode.png", url, {
      errorCorrectionLevel: req.body.errorCorrectionLevel,
      margin: req.body.margin,
      width: req.body.width,
      color: {
        dark: req.body.dark,
        light: req.body.light,
      },
    });
    res.render("pages/qrcode", {
      src,
    });
  } catch (error) {
    if (error) {
      res.send("Error occured");
    }
  }

  // qrcode.toDataURL(url, (err, src) => {
  //   if (err) res.send("Error occured");

  //   res.render("pages/qrcode", {
  //     src,
  //   });
  // });
});

// Halaman Error 404
router.use("/", (req, res) => {
  res.render("pages/error404");
});

module.exports = router;
