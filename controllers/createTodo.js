const Todo = require("../models/todo");

exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const response = await Todo.create({ title, description });
    res.status(200).json({
      success: true,
      data: response,
      message: "Todo Created Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: error.message,
    });
  }
};
