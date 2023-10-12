function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  } if (num % 3 === 0) {
    return 'Fizz';
  } if (num % 5 === 0) {
    return 'Buzz';
  }
  return num;
}
function getFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i += 1) {
    result *= i;
  }
  return result;
}
function getSumBetweenNumbers(n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i += 1) {
    sum += i;
  }
  return sum;
}
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}
function doRectanglesOverlap(rect1, rect2) {
  return (
    rect1.left < rect2.left + rect2.width
    && rect1.left + rect1.width > rect2.left
    && rect1.top < rect2.top + rect2.height
    && rect1.top + rect1.height > rect2.top
  );
}
function isInsideCircle(circle, point) {
  const dx = point.x - circle.center.x;
  const dy = point.y - circle.center.y;
  const distanceSquared = dx * dx + dy * dy;
  return distanceSquared <= circle.radius ** 2;
}
function findFirstSingleChar(str) {
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (str.indexOf(char) === i && str.indexOf(char, i + 1) === -1) {
      return char;
    }
  }
  return null;
}
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const startBracket = isStartIncluded ? '[' : '(';
  const endBracket = isEndIncluded ? ']' : ')';
  return `${startBracket}${Math.min(a, b)}, ${Math.max(a, b)}${endBracket}`;
}
function reverseString(str) {
  return str.split('').reverse().join('');
}
function reverseInteger(num) {
  const reversedNum = parseInt(num.toString().split('').reverse().join(''), 10);
  return reversedNum * Math.sign(num);
}
function isCreditCardNumber(ccn) {
  const ccnStr = ccn.toString();
  let sum = 0;
  let double = false;

  for (let i = ccnStr.length - 1; i >= 0; i -= 1) {
    let digit = parseInt(ccnStr[i], 10);

    if (double) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    double = !double;
  }

  return sum % 10 === 0;
}
function getDigitalRoot(num) {
  let n = num;
  if (n < 10) {
    return n;
  }
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return getDigitalRoot(sum);
}
function isBracketsBalanced(str) {
  const bracketPairs = {
    '(': ')',
    '{': '}',
    '[': ']',
    '<': '>',
  };
  const stack = [];
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (bracketPairs[char]) {
      stack.push(char);
    } else if (Object.values(bracketPairs).includes(char)) {
      if (stack.length === 0 || bracketPairs[stack.pop()] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
function toNaryString(num, n) {
  return num.toString(n);
}
function getCommonDirectoryPath(pathes) {
  if (pathes.length === 0) {
    return '';
  }
  const splitPaths = pathes.map((path) => path.split('/'));
  const minLength = Math.min(...splitPaths.map((parts) => parts.length));
  const commonPath = [];
  for (let i = 0; i < minLength; i += 1) {
    const partsAtCurrentIndex = splitPaths.map((parts) => parts[i]);
    if (new Set(partsAtCurrentIndex).size === 1) {
      commonPath.push(partsAtCurrentIndex[0]);
    } else {
      break;
    }
  }
  if (commonPath.length === 0) {
    return '';
  }
  return `${commonPath.join('/')}/`;
}
function getMatrixProduct(m1, m2) {
  const A = m1.length;
  const B = m1[0].length;
  const C = m2[0].length;
  const result = new Array(A);
  for (let i = 0; i < A; i += 1) {
    result[i] = new Array(C).fill(0);
  }
  for (let i = 0; i < A; i += 1) {
    for (let j = 0; j < C; j += 1) {
      for (let k = 0; k < B; k += 1) {
        result[i][j] += m1[i][k] * m2[k][j];
      }
    }
  }
  return result;
}
function evaluateTicTacToePosition(position) {
  for (let i = 0; i < 3; i += 1) {
    if (position[i][0] === 'X' && position[i][1] === 'X' && position[i][2] === 'X') return 'X';
    if (position[0][i] === 'X' && position[1][i] === 'X' && position[2][i] === 'X') return 'X';
    if (position[i][0] === '0' && position[i][1] === '0' && position[i][2] === '0') return '0';
    if (position[0][i] === '0' && position[1][i] === '0' && position[2][i] === '0') return '0';
  }
  if (position[0][0] === 'X' && position[1][1] === 'X' && position[2][2] === 'X') return 'X';
  if (position[0][2] === 'X' && position[1][1] === 'X' && position[2][0] === 'X') return 'X';
  if (position[0][0] === '0' && position[1][1] === '0' && position[2][2] === '0') return '0';
  if (position[0][2] === '0' && position[1][1] === '0' && position[2][0] === '0') return '0';
  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      if (position[i][j] === undefined) return undefined;
    }
  }
  return undefined;
}
module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
