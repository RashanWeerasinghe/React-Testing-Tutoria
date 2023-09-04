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

describe("getCurrencies", () => {
  it("should return supported Currencies", () => {
    const result = lib.getCurrencies();

    //to general
    expect(result).toBeDefined();
    expect(result).not.toBeNull();

    //"USD", "AUD", "EUR"
    //too specific
    expect(result[0]).toBe("USD");
    expect(result[1]).toBe("AUD");
    expect(result[2]).toBe("EUR");
    expect(result.length).toBe(3);

    //Proper Way
    expect(result).toContain("USD");
    expect(result).toContain("AUD");
    expect(result).toContain("EUR");
    //Ideal Way
    expect(result).toEqual(expect.arrayContaining(["USD", "AUD", "EUR"]));
  });
});

describe("getProduct", () => {
  it("should return the product with given id", () => {
    const result = lib.getProduct(1);
    expect(result).toEqual({ id: 1, price: 10 });
    expect(result).toMatchObject({ id: 1, price: 10 });
    expect(result).toHaveProperty("id", 1);
  });
});

describe("register User", () => {
  it("should trow if username is falsy", () => {
    const array = [null, undefined, NaN, "", 0, false];
    array.forEach((a) =>
      expect(() => {
        lib.registerUser(a);
      }).toThrow()
    );
  });

  it("should return a user object if valid username is passed", () => {
    const result = lib.registerUser("rashan");
    expect(result).toMatchObject({ username: "rashan" });
    expect(result.id).toBeGreaterThan(0);
  });
});
