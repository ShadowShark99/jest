const analyzeArr = require("./analyzeArr");

test("analyze 1 8 3 4 2 6]", () => {
  expect(analyzeArr([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("analyze 1 2 3 4 5 6 7 8 9 10]", () => {
  expect(analyzeArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual({
    average: 5.5,
    min: 1,
    max: 10,
    length: 10,
  });
});
