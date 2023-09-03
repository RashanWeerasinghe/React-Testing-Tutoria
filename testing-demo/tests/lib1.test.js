const lib = require("../lib");

test("first test", () => {});

test("absolute-should return positive number if input is positive", () => {
  const result = lib.absolute(1);
  expect(result).toBe(1);
});

test("absolute-should return negative  number if input is negative", () => {
  const result = lib.absolute(-1);
  expect(result).toBe(1);
});

test("absolute-should return zero  number if input is zero", () => {
  const result = lib.absolute(0);
  expect(result).toBe(0);
});
