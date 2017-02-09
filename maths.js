var arithmetic = require('./src/arithmetic');

var Maths = function(){};

Maths.prototype.sum = arithmetic.sum;
Maths.prototype.subtract = arithmetic.subtract;

module.exports = Maths;