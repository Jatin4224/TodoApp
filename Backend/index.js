//write basic express boilerp;late code.
//with express.json() middleware.

const express = require("express");
const app = express();

app.use(express.json());

//body {
// title: string,
// description: string;
//}

app.post("/", function (req, res) {
  const createPayload = req.body;
});

app.get("/", function (req, res) {});

app.put("/", function (req, res) {});

app.listen(3000);
