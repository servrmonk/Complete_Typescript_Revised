import { Router } from "express";
import { Todo } from "../models/todo";

// u can also create the type alias
type RequestBody = { text: string };
type RequestParams = { todoId: string };

let todos: Todo[] = [];

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ todos: todos });
});

router.post("/todo", (req, res) => {
  // const body = req.body as {text:string}
  const body = req.body as RequestBody;
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: body.text,
  };
  todos.push(newTodo);
  res.status(201).json({ message: "Added Todo", todo: newTodo, todos: todos });
});

router.put("/todo/:todoId", (req, res) => {
  const params = req.params as RequestParams;
  const tid = params.todoId;
  const body = req.body as RequestBody;
  const todoIndex = todos.findIndex((todoItem) => todoItem.id === tid);

  if (todoIndex >= 0) {
    todos[todoIndex] = { ...todos[todoIndex], text: req.body.text }; // Spread operator to retain other properties
    return res.status(200).json({ message: "Updated todo", todos: todos });
  }
  res.status(404).json({ message: "Could not find todo for this id" });
});

router.delete("/todo/:todoId", (req, res) => {
  const params = req.params as RequestParams;
  const todoId = params.todoId;
  todos = todos.filter((todoItem) => todoItem.id !== todoId); // Ensure 'todos' is mutable
  res.status(200).json({ message: "Deleted todo", todos: todos });
});

export default router; // Export the instance of the router, not the Router function
