const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds poop + pee to equal pooppee", () => {
  expect(sum("poop", "pee")).toBe("pooppee");
});
