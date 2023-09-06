const todoModel = require("../model/todo.model");
exports.createTodo = (req, res, next) => {
  todoModel.create(req.body);
  res.status(201);
};
