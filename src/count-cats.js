const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let counter = 0;
  matrix.flat().forEach(element => {
    if (element == '^^') {
      counter++;
    }
  });
  return counter;
};