
var sum = function(a, b) {

  if (isNaN(a) || isNaN(b))
    throw new Error('NaN');

  return a + b;
};

var subtract = function(a, b) {
  
  if (isNaN(a) || isNaN(b))
    throw new Error('NaN');

  return a - b;
};

var multiply = function(a, b) {
  
  if (isNaN(a) || isNaN(b))
    throw new Error('NaN');

  return a * b;
};

var divide = function(a, b) {
  
  if (isNaN(a) || isNaN(b))
    throw new Error('NaN');
  
  if (b === 0)
    throw new Error('Zero divisor');

  return a / b;
};

module.exports = {
  sum,
  subtract,
  multiply,
  divide
};