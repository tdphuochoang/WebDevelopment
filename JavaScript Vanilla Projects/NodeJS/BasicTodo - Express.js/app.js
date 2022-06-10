const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const todos = require("./todos");

//Middleware
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

//GET REQUEST
app.get("/todos", (req, res) => {
  if (!todos) {
    console.log("Files not exist");
  } else {
    res.status(200).json(todos);
    console.log(todos);
  }
});

//POST REQUEST
app.post("/todos", (req, res) => {
  const newtodo = {
    title: req.body.title,
    description: req.body.description,
    id: req.body.id,
    timestamp: new Date(),
    status: req.body.status,
  };

  todos.push(newtodo);
  res.status(201).json(todos);
});

//PUT REQUEST
app.put("/todos/:id", (req, res) => {
  let { id } = req.params;
  let { status } = req.body;
  let todo = todos.find((p) => p.id == id);
  todo.status = status;
  res.status(200).json(todo);
});

//server configs
app.listen(3000, () => {
  console.log("Server started listening on port 3000");
});
