const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let cleanStr = String(str);
  let separator;
  options.separator !== undefined ? separator = options.separator : separator = '+';
  let repeatTimes = options.repeatTimes;

  let addition;
  options.addition !== undefined ? addition = String(options.addition) : addition = '';
  let additionSeparator;
  options.additionSeparator !== undefined ? additionSeparator = options.additionSeparator : additionSeparator = '|';
  let additionRepeatTimes = options.additionRepeatTimes;
  let compliteAddition = (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition;

  return (cleanStr + compliteAddition + separator).repeat(repeatTimes - 1) + cleanStr + compliteAddition;
};
