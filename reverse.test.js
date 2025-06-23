const reverse = require("./reverse");

test("reverse banana", () => {
  expect(reverse("banana")).toBe("ananab");
});

test("reverse Shadowshark99", () => {
  expect(reverse("Shadowshark99")).toBe("99krahswodahS");
});

test("reverse reverse#$%", () => {
  expect(reverse("reverse#$%")).toBe("%$#esrever");
});
