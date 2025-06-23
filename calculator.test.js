const calculator = require("./calculator");

test("1 + 1 = 2", () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test("8 - 5 = 3", () => {
  expect(calculator.subtract(8, 5)).toBe(3);
});

test("4 * 6 = 24", () => {
  expect(calculator.multiply(4, 6)).toBe(24);
});

test("121 / 11 = 11", () => {
  expect(calculator.divide(121, 11)).toBe(11);
});
