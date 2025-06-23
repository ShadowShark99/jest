function reverse(s) {
  if (s.length === 0) return s;
  return reverse(s.substr(1)) + s.substr(0, 1);
}
module.exports = reverse;
