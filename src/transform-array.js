const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let temptArray = arr.slice();

  for (let i = 0; i < temptArray.length; i++) {
    if (temptArray[i] == '--discard-next') {
      if (i < temptArray.length - 1) {
        delete temptArray[i];
        delete temptArray[i+1]
      }
      delete temptArray[i];
    }

    if (temptArray[i] == '--discard-prev') {
      if (i > 0) {
        delete temptArray[i];
        delete temptArray[i-1]
      }
      delete temptArray[i];
    }

    if (temptArray[i] == '--double-next') {
      if (i < temptArray.length - 1) {
        temptArray.splice(i, 1, temptArray[i+1], temptArray[i+1])
      }
      delete temptArray[i];
    }

    if (temptArray[i] == '--double-prev') {
      if (i > 0) {
        temptArray.splice(i, 1, temptArray[i-1], temptArray[i-1])
      }
      delete temptArray[i];
    }
  }

  for (let i = 0; i < temptArray.length; i++) {
    if (typeof(temptArray[i])  == 'undefined') {
      temptArray.splice(i, 1);
      i--;
    }
  }

  return temptArray;
};
