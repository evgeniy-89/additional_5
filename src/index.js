module.exports = function check(str, bracketsConfig) {
  let stringConfig = '';
  let stack = [];
  let character, bracePosition;

  for (let i = 0; i < bracketsConfig.length; i++) {
    stringConfig += bracketsConfig[i].join('');
  }

  for (let i = 0; character = str[i]; i++) {
    bracePosition = stringConfig.indexOf(character);

    if (bracePosition === -1) {
      continue;
    }

    if (bracePosition % 2 === 0) {
      stack.push(bracePosition + 1);
    } else {
      if (stack.pop() !== bracePosition) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
