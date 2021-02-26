const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) !== 'string') {
    return false;
  }

  if (Number(sampleActivity) == 0 || isNaN(Number(sampleActivity))) {
    return false;
  }

  if (Number(sampleActivity) > 15 || Number(sampleActivity) < 0) {    // inadequate values
    return false;
  }

  return Math.ceil(((Math.log(MODERN_ACTIVITY / sampleActivity)) / (Math.log(2)) * HALF_LIFE_PERIOD));
};
