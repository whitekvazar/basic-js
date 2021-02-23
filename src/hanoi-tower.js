const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let resultObj = {
    turns: 0,
    seconds: 0,
  };

  resultObj.turns = (2 ** disksNumber) - 1;
  resultObj.seconds = Math.floor(resultObj.turns / turnsSpeed * 3600) ;

  return resultObj;
};
