const lib = require("../lib");

test("first test", () => {});

describe("absolute", () => {
  it("should return positive number if input is positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it("should return negative  number if input is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it("should return zero  number if input is zero", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe("greet", () => {
  it("should return greeting message", () => {
    const result = lib.greet("Rashan");
    expect(result).toBe("Welcome Rashan");
  });
});
