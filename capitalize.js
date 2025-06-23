function capitalize(s) {
  if (s.length === 0) return s;
  return s.substr(0, 1).toUpperCase() + s.substr(1);
}
module.exports = capitalize;
