const express = require("express");
const app = express();
const path = require("path");

// Setup EJS
app.set("view engine", "ejs");

// Akses File Statis
app.use("/public", express.static(path.join(__dirname, "/public")));

// Parsing Body Request
app.use(express.urlencoded({ extended: true }));

// Include Router
const router = require("./routes/router");
app.use("/", router);

// Starting Server
const port = 8080;
app.listen(port, () => {
  console.log(`Application running at http://localhost:${port}`);
});
