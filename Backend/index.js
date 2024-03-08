// //write basic express boilerp;late code.
// //with express.json() middleware.

// const express = require("express");
// const { createTodo, updateTodo } = require("./types");
// const { todo } = require("./db");
// const app = express();

// app.use(express.json());

// //body {
// // title: string,
// // description: string;
// //}

// app.post("/todo", function (req, res) {
//   const createPayload = req.body;
//   const parsedPayload = createTodo.safeParse(createPayload);
//   if (!parsedPayload.success) {
//     res.status(411).json({
//       msg: "you sent wrong inputs",
//     });
//     return;
//   }
//else put in monogdb .
//   todo.create({
//     title: createPayload.title,
//     description: createPayload.description,
//     completed: false,
//   });
//   res.json({
//     msg: "Todo created",
//   });
// });

// app.get("/todos", async function (req, res) {
//   const todos = await todo.fund({});

//   res.json({
//     todos,
//   });
//   //promise use async await
// });

// app.put("/completed", function (req, res) {
//   const updatePayload = req.body;
//   const parsedPayload = updateTodo.safeParse(updatePayload);
//   if (!parsedPayload.success) {
//     res.status(411).json({
//       msg: "you sent the wrong inputs",
//     });
//     return;
//   }

//   await todo.update({
//     _id: req.body.id
//   }, {
//     completed: true
//   })
//   res.json({
//     msg:"Todo marked as completed"
//   })
// });

// app.listen(3000);
const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
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
    res.status(400).json({
      msg: "You sent wrong inputs",
    });
    return;
  }
  //else put in MongoDB.
  todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({
    msg: "Todo created",
  });
});

app.get("/todos", async function (req, res) {
  const todos = await todo.find({});

  res.json({
    todos,
  });
  //promise use async await
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(400).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }

  await todo.updateOne(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(3000);
