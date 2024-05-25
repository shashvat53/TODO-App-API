const express = require("express");
const router = express.Router();

const { createTodo } = require("../controllers/createTodo");
const { updateTodo } = require("../controllers/updateTodo");
const { deleteTodo } = require("../controllers/deleteTodo");
const { getAllTodo, getTodoById } = require("../controllers/getTodo");

router.post("/createTodo", createTodo);
router.get("/getAllTodo", getAllTodo);
router.get("/getTodo/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);
module.exports = router;
