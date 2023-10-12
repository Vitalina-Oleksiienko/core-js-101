function concatenateStrings(value1, value2) {
  return value1 + value2;
}

function getStringLength(value) {
  return value.length;
}

function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

function extractNameFromTemplate(value) {
  const matches = value.match(/Hello, (.+?)!/);
  return matches ? matches[1] : '';
}

function getFirstChar(value) {
  return value.charAt(0);
}

function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

function repeatString(value, count) {
  return value.repeat(count);
}

function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}

function unbracketTag(str) {
  return str.replace(/^<|>$/g, '');
}

function convertToUpperCase(str) {
  return str.toUpperCase();
}

function extractEmails(str) {
  return str.split(';').map((email) => email.trim());
}

function getRectangleString(width, height) {
  const horizontalBorder = `┌${'─'.repeat(width - 2)}┐\n`;
  const middle = `│${' '.repeat(width - 2)}│\n`;
  const verticalBorder = `└${'─'.repeat(width - 2)}┘\n`;
  return horizontalBorder + middle.repeat(height - 2) + verticalBorder;
}

function encodeToRot13(str) {
  return str.replace(/[A-Za-z]/g, (char) => {
    const shift = char <= 'Z' ? 65 : 97;
    const charCode = char.charCodeAt(0);
    const rotatedCharCode = ((charCode - shift + 13) % 26) + shift;
    return String.fromCharCode(rotatedCharCode);
  });
}

function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

function getCardId(value) {
  const initialDeck = [
    'A♣', '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣',
    'A♦', '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦',
    'A♥', '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥',
    'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠',
  ];
  return initialDeck.indexOf(value);
}
module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
