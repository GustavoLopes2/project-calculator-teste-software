const { add, subtract, multiply, divide } = require("../src/calculator");

describe("Calculator", () => {
  test("add soma corretamente", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test("subtract subtrai corretamente", () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(0, 5)).toBe(-5);
  });

  test("multiply multiplica corretamente", () => {
    expect(multiply(4, 3)).toBe(12);
    expect(multiply(-2, 3)).toBe(-6);
  });

  test("divide divide corretamente e lança erro para zero", () => {
    expect(divide(8, 2)).toBe(4);
    expect(() => divide(1, 0)).toThrow(/Divisão por zero/);
  });

  test("erro proposital", () => {
    throw new Error("Erro proposital para testar o Actions");
  });
});
