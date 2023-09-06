const TodoController = require(".../../../controller/todo.controller");

const todoModel = require("../../model/todo.model");

const newTodo = require("../../data/fakeData.json");
const httpMocks = require("node-mocks-http");

todoModel.create = jest.fn();

let req, res, next;
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = null;
});

describe("TodoController.createTodo", () => {
  it("should have a createTodo function", () => {
    expect(typeof TodoController.createTodo).toBe("function");
  });
  it("should have todo.create", () => {
    req.body = newTodo;
    TodoController.createTodo(req, res, next);

    expect(todoModel.create).toBeCalledWith(newTodo);

    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled()).toBeTruthy();
  });
  it("should return json body in response", () => {
    todoModel.create.mockReturnValue(newTodo);
    TodoController.createTodo(req, res, next);
    expect(res._getJSONData()).toStrictEqual(newTodo);
  });
});
