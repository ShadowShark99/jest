function caesar(s, shiftVal) {
  if (s.length === 0) return s;
  return shift(s[0], shiftVal) + caesar(s.substr(1), shiftVal);
}

function shift(c, shiftVal) {
  const lowerA = 97;
  const upperA = 65;
  const lowerZ = 122;
  const upperZ = 90;

  c = c.charCodeAt(0);
  if (c >= lowerA && c <= lowerZ) {
    //console.log("lower");
    c = ((c - lowerA + shiftVal) % 26) + lowerA;
  }
  if (c >= upperA && c <= upperZ) {
    c = ((c - upperA + shiftVal) % 26) + upperA;
  }

  return String.fromCharCode(c);
}

module.exports = caesar;
