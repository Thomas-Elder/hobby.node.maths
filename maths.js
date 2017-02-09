var arithmetic = require('./src/arithmetic');

var Maths = function(){};

Maths.prototype.sum = arithmetic.sum;
Maths.prototype.subtract = arithmetic.subtract;
Maths.prototype.multiply = arithmetic.multiply;
Maths.prototype.divide = arithmetic.divide;

module.exports = Maths;