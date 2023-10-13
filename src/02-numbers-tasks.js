function getRectangleArea(width, height) {
  return width * height;
}

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

function getAverage(value1, value2) {
  return value1 / 2 + value2 / 2;
}

function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function getLinearEquationRoot(a, b) {
  return -b / a;
}

function getAngleBetweenVectors(x1, y1, x2, y2) {
  // const angle = Math.atan2(y2 - y1, x2 - x1);
  // if (angle < 0) {
  //   return angle + 2 * Math.PI;
  // }
  // return angle;
  const dotProduct = x1 * x2 + y1 * y2;
  const length1 = Math.sqrt(x1 * x1 + y1 * y1);
  const length2 = Math.sqrt(x2 * x2 + y2 * y2);
  const angle = Math.acos(dotProduct / (length1 * length2));

  return angle;
}

function getLastDigit(value) {
  return Math.abs(value) % 10;
}

function parseNumberFromString(value) {
  return parseFloat(value);
}

function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(a ** 2 + b ** 2 + c ** 2);
}

function roundToPowerOfTen(num, pow) {
  const multiplier = 10 ** pow;
  return Math.round(num / multiplier) * multiplier;
}

function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

function toNumber(value, def) {
  const result = Number(value);
  return Number.isNaN(result) ? def : result;
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
};
