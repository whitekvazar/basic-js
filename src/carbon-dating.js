const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) !== 'string') {                          // string or not
    return false;
  }

  if (Number(sampleActivity) == 0 || isNaN(Number(sampleActivity))) { // 0 or NaN
    return false;
  }

  if (Number(sampleActivity) > 15 || Number(sampleActivity) < 0) {    // inadequate values
    return false;
  }

  return Math.ceil(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD);

};
