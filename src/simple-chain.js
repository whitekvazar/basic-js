const CustomError = require("../extensions/custom-error");

const chainMaker = {
  tempChain: [],

  getLength() {
    return this.tempChain.length;
  },

  addLink(value) {
    this.tempChain.push(value);
    return this;
  },

  removeLink(position) {
    let cleanChain = this.tempChain.filter(x => x !== undefined);
    this.tempChain = cleanChain;

    if(!Number.isInteger(position) ||
      position < 0 ||
      position > this.tempChain.length) {
        this.tempChain = [];
        throw new Error('Wrong position');
    }

    this.tempChain[position - 1] = undefined;
    return this;
  },

  reverseChain() {
    this.tempChain = this.tempChain.reverse();
    return this;
  },

  finishChain() {
    let cleanChain = this.tempChain.filter(x => x !== undefined);
    let result = '';
    
    cleanChain.forEach(function (element) {
      result += `( ${element} )~~`;
    });

    this.tempChain = [];
    return result.slice(0,-2);
  },
};

module.exports = chainMaker;
