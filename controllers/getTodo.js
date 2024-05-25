const Todo = require("../models/todo");

exports.getAllTodo = async (req, res) => {
  try {
    const response = await Todo.find({});
    res.status(200).json({
      success: true,
      data: response,
      message: "fetched All Todo's",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: error.message,
      message: "internal server error",
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });
    if (!todo) {
      return res.status(404).json({
        success: false,
        meassage: "Todo not found by givin this id",
      });
    }

    res.status(200).json({
      success: true,
      data: todo,
      message: "Todo found by givin this id",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: error.message,
      message: "internal server error",
    });
  }
};
