const express = require("express");
const app = express();

app.get("/", function (req, res) {
  let a = 1;
  let b = 2;

  let c = a + b;
  res.send("Hello World");
});

app.listen(3000);
