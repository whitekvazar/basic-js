const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let season = 'Unable to determine the time of year!';

  if (!date) {
    return season;
  }

  month = Date.prototype.getMonth.call(date); // for last 'very tricky moment' test

  switch (month) {
    case 11:
    case 0:
    case 1:
      season = 'winter';
      break;
    case 2:
    case 3:
    case 4:
      season = 'spring';
      break;
    case 5:
    case 6:
    case 7:
      season = 'summer';
      break;
    case 8:
    case 9:
    case 10:
      season = 'autumn';
      break;
    default:
      season = 'Unable to determine the time of year!';
      break;
  }
  
  return season;
};
