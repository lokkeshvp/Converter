// Convert ISIN from Cusip and Country code
var cusip = '36617baM6'
var countryCode = 'US'
function generate (){

const isinDigest = contCode + cusip.toUpperCase()

let convert = isinDigest.split('')
const result = convert.map(item => {
    if (!isNaN(Number(item))) {
        return Number(item);
    } else {
         return item.charCodeAt()-55
    }
})

let data = result;
let newData = data.join('');
const arrOfDigits = Array.from(String(newData));
const arr = arrOfDigits.reverse();

const secDouble = () => {
  var a = [],
      b = arr,
      c = [];
    for (var i = 0; i < b.length; i++) {
      if(i % 2 === 0){
        var x = b[i];
        a.push(x * 2);
      }
      else {
        var x = b[i];
        c.push(Number.parseInt(x))
      }
    }
    return a.concat(c);
}
const digitSum = () => {
    var a = [],
        b = secDouble();
      for (var i = 0; i < b.length; i++) {
        var x = b[i];
        var y = [Math.floor(x/10) + x%10]
        a.push(Number.parseInt(y))
      }
      var lodash = require('lodash');
      var sum = lodash.sum(a);
      return sum
  }
  const checkDigest = () => {
    var a = ((10 - digitSum() % 10) % 10);
    return a.toString();
  }
  return isinDigest + checkDigest()
}
generate();
console.log("Output",generate())
