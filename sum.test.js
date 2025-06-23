const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 4 + 5 to equal 10", () => {
  expect(sum(4, 5)).toBe(10);
});

test("adds poop + pee to equal pooppee", () => {
  expect(sum("poop", "pee")).toBe("pooppee");
});
