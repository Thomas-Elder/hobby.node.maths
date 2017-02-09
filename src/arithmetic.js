
var sum = function(a, b) {

  if (isNaN(a) || isNaN(b))
    throw new Error('Cannot sum non-numeric values');

  return a + b;
};

var subtract = function(a, b) {
  
  if (isNaN(a) || isNaN(b))
    throw new Error('Cannot subtract non-numeric values');

  return a - b;
};

var multiply = function(a, b) {
  
  if (isNaN(a) || isNaN(b))
    throw new Error('Cannot multiply non-numeric values');

  return a * b;
};

var divide = function(a, b) {
  
  if (isNaN(a) || isNaN(b))
    throw new Error('Cannot divide non-numeric values');
  
  if (b === 0)
    throw new Error('Cannot divide value by zero');

  return a / b;
};

module.exports = {
  sum,
  subtract,
  multiply,
  divide
};