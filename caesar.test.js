const caesar = require("./caesar");

test("caesar banana -> 3", () => {
  expect(caesar("banana", 3)).toBe("edqdqd");
});

test("caesar abc -> 5", () => {
  expect(caesar("abc", 5)).toBe("fgh");
});

test("caesar @#$%coolPASSWORD -> 1", () => {
  expect(caesar("@#$%coolPASSWORD", 1)).toBe("@#$%dppmQBTTXPSE");
});
