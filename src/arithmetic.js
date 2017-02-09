
var sum = function(a, b) {

  if (isNaN(a) || isNaN(b))
    throw new Error('Cannot sum non-numeric values');

  return a + b;
};

module.exports = {
  sum
};