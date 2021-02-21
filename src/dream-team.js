const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let resultName = [];

  if (!Array.isArray(members)) {
    return false;
  }

  members.forEach(element => {
    if (typeof (element) == 'string') {
      let tempStrArray = element.toUpperCase().split(' ').join('').split('');
      resultName.push(tempStrArray[0]);
    }
  });

  return resultName.sort().join('');
};
