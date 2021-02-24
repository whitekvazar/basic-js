const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if(!Array.isArray(arr)) {
      return 1;
    }

    let depthLevel = 1;

    arr.forEach(element => {
      if(Array.isArray(element)) {
        let tempCounter = this.calculateDepth(element) + 1;

        if(depthLevel < tempCounter) {
          depthLevel = tempCounter;
        }
      }

    });
    return depthLevel;
  }
};
