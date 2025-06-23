const capitalize = require("./capitalize");

test("capitalize banana", () => {
  expect(capitalize("banana")).toBe("Banana");
});

test("capitalize Apple", () => {
  expect(capitalize("Apple")).toBe("Apple");
});

test("capitalize cAPITALIZE", () => {
  expect(capitalize("cAPITALIZE")).toBe("CAPITALIZE");
});
