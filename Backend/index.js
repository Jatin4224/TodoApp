//write basic express boilerp;late code.
//with express.json() middleware.

const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();

app.use(express.json());

//body {
// title: string,
// description: string;
//}

app.post("/todo", function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "you sent wrong inputs",
    });
    return;
  }
  //else put in monogdb .
});

app.get("/todos", function (req, res) {});

app.put("/completed", function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "you sent the wrong inputs",
    });
    return;
  }
});

app.listen(3000);
