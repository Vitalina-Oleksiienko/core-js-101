function findElement(arr, value) {
  return arr.indexOf(value);
}
function generateOdds(len) {
  return Array.from({ length: len }, (_, i) => 2 * i + 1);
}
function doubleArray(arr) {
  return arr.concat(arr);
}
function getArrayOfPositives(arr) {
  return arr.filter((num) => num > 0);
}
function getArrayOfStrings(arr) {
  return arr.filter((item) => typeof item === 'string');
}
function removeFalsyValues(arr) {
  return arr.filter((item) => Boolean(item));
}
function getUpperCaseStrings(arr) {
  return arr.map((str) => str.toUpperCase());
}
function getStringsLength(arr) {
  return arr.map((str) => str.length);
}
function insertItem(arr, item, index) {
  return [...arr.slice(0, index), item, ...arr.slice(index)];
}
function getHead(arr, n) {
  return arr.slice(0, n);
}
function getTail(arr, n) {
  return arr.slice(-n);
}
function toCsvText(arr) {
  return arr.map((row) => row.join(',')).join('\n');
}
function toArrayOfSquares(arr) {
  return arr.map((num) => num * num);
}
function getMovingSum(arr) {
  return arr.reduce((acc, num, i) => {
    const sum = num + (i > 0 ? acc[i - 1] : 0);
    acc.push(sum);
    return acc;
  }, []);
}
function getSecondItems(arr) {
  return arr.filter((_, index) => index % 2 === 1);
}
function propagateItemsByPositionIndex(arr) {
  return arr.flatMap((item, index) => Array(index + 1).fill(item));
}
function get3TopItems(arr) {
  return arr.slice().sort((a, b) => b - a).slice(0, 3);
}
function getPositivesCount(arr) {
  return arr.filter((num) => typeof num === 'number' && num > 0).length;
}
function sortDigitNamesByNumericOrder(arr) {
  const digitOrder = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine',
  ];
  return arr.slice().sort((a, b) => digitOrder.indexOf(a) - digitOrder.indexOf(b));
}
function getItemsSum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
function getFalsyValuesCount(arr) {
  return arr.filter((item) => !item).length;
}
function findAllOccurrences(arr, item) {
  return arr.filter((val) => val === item).length;
}
function toStringList(arr) {
  return arr.join(',');
}
function sortCitiesArray(arr) {
  return arr.slice().sort((a, b) => {
    if (a.country === b.country) {
      return a.city.localeCompare(b.city);
    }
    return a.country.localeCompare(b.country);
  });
}
function getIdentityMatrix(n) {
  const matrix = [];
  for (let i = 0; i < n; i += 1) {
    const row = [];
    for (let j = 0; j < n; j += 1) {
      row.push(i === j ? 1 : 0);
    }
    matrix.push(row);
  }
  return matrix;
}
function getIntervalArray(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}
function distinct(arr) {
  return [...new Set(arr)];
}
function group(array, keySelector, valueSelector) {
  return array.reduce((map, item) => {
    const key = keySelector(item);
    const value = valueSelector(item);
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(value);
    return map;
  }, new Map());
}
function selectMany(arr, childrenSelector) {
  return arr.flatMap(childrenSelector);
}
function getElementByIndexes(arr, indexes) {
  let result = arr;
  for (let i = 0; i < indexes.length; i += 1) {
    const index = indexes[i];
    if (result && Array.isArray(result) && index >= 0 && index < result.length) {
      result = result[index];
    } else {
      return undefined;
    }
  }
  return result;
}
function swapHeadAndTail(arr) {
  const middle = Math.floor(arr.length / 2);
  const head = arr.slice(0, middle);
  const tail = arr.slice(-middle);
  if (arr.length % 2 === 0) {
    return [...tail, ...head];
  }
  return [...tail, arr[middle], ...head];
}
module.exports = {
  findElement,
  generateOdds,
  doubleArray,
  getArrayOfPositives,
  getArrayOfStrings,
  removeFalsyValues,
  getUpperCaseStrings,
  getStringsLength,
  insertItem,
  getHead,
  getTail,
  toCsvText,
  toStringList,
  toArrayOfSquares,
  getMovingSum,
  getSecondItems,
  propagateItemsByPositionIndex,
  get3TopItems,
  getPositivesCount,
  sortDigitNamesByNumericOrder,
  getItemsSum,
  getFalsyValuesCount,
  findAllOccurrences,
  sortCitiesArray,
  getIdentityMatrix,
  getIntervalArray,
  distinct,
  group,
  selectMany,
  getElementByIndexes,
  swapHeadAndTail,
};
