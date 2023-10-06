const express = require("express");
const PORT = 5001;

const app = express();

app.get("/", (req, res) => {
  res.json({ status: 200, message: "Server run successfully" });
});

app.listen(PORT, (req, res) => {
  console.log(`Server is runing at port: http://localhost:${PORT}`);
});
