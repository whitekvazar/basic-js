const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
  }

  encrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error();
    }

    message = message.toUpperCase();
    let keyWord = key.toUpperCase();
    let realKey = keyWord.repeat(Math.ceil(message.length / keyWord.length));
    realKey = realKey.substr(0, message.length).split('');
    
    let encryptMessage = '';
    for(let i = 0; i < message.length; i++) {
      if(message.charCodeAt(i) >= 65 &&  message.charCodeAt(i) <= 90) {
        encryptMessage = encryptMessage + String.fromCharCode(((message.charCodeAt(i) + realKey[0].charCodeAt(0)) % 26) + 65);
        realKey.shift();
      } else {
        encryptMessage = encryptMessage + message.charAt(i);
      }
    }

    if(this.type === false) {
      return encryptMessage.split('').reverse().join('');
    }
    return encryptMessage;
  }    

  decrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error();
    } 

    message = message.toUpperCase();
    let keyWord = key.toUpperCase();
    let realKey = keyWord.repeat(Math.ceil(message.length / keyWord.length));
    realKey = realKey.substr(0, message.length).split('');

    let decryptMessage = '';
    for(let i = 0; i < message.length; i++) {
      if(message.charCodeAt(i) >= 65 &&  message.charCodeAt(i) <= 90) {
        decryptMessage = decryptMessage + String.fromCharCode(((message.charCodeAt(i) + 26 - realKey[0].charCodeAt(0)) % 26) + 65);
        realKey.shift();
      } else {
        decryptMessage = decryptMessage + message.charAt(i);
      }
    }

    if(this.type === false) {
      return decryptMessage.split('').reverse().join('');
    }
    return decryptMessage;

  }
}

module.exports = VigenereCipheringMachine;
