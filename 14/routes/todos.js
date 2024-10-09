"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = []; // Use 'let' instead of 'const' to allow reassignment
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.status(200).json({ todos: todos });
});
router.post("/todo", (req, res) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    todos.push(newTodo);
    res.status(201).json({ message: "Added Todo", todo: newTodo, todos: todos });
});
router.put("/todo/:todoId", (req, res) => {
    const tid = req.params.todoId;
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === tid);
    if (todoIndex >= 0) {
        todos[todoIndex] = Object.assign(Object.assign({}, todos[todoIndex]), { text: req.body.text }); // Spread operator to retain other properties
        return res.status(200).json({ message: "Updated todo", todos: todos });
    }
    res.status(404).json({ message: "Could not find todo for this id" });
});
router.delete("/todo/:todoId", (req, res) => {
    const todoId = req.params.todoId;
    todos = todos.filter((todoItem) => todoItem.id !== todoId); // Ensure 'todos' is mutable
    res.status(200).json({ message: "Deleted todo", todos: todos });
});
exports.default = router; // Export the instance of the router, not the Router function
