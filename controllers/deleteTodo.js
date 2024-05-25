const Todo = require("../models/todo");

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Todo deleted successfully...",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: error.message,
      message: "Server Error",
    });
  }
};
