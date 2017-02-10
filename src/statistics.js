
var sampleSize = function(sample) {

  for (var i = 0; i < sample.length; i++) {
    if (isNaN(sample[i]))
      throw new Error('NaN');
  }
  
  if (sample.length === 0)
    throw new Error('Empty sample');

  return sample.length;
};

var mean = function(sample) {

  for (var i = 0; i < sample.length; i++) {
    if (isNaN(sample[i]))
      throw new Error('NaN');
  }

  if (sample.length === 0)
    throw new Error('Empty sample');

  var sum = 0;
  
  for (var i = 0; i < sample.length; i++)
    sum += sample[i];

  return sum/sample.length;  
};

var median = function(sample) {

  for (var i = 0; i < sample.length; i++) {
    if (isNaN(sample[i]))
      throw new Error('NaN');
  }

  if (sample.length === 0)
    throw new Error('Empty sample');

  return sample[Math.floor(sample.length/2)]; 
};

var mode = function() {

};

var variance = function(){

};

var standardDeviation = function() {

};

module.exports = {
  sampleSize,
  mean,
  median,
  mode,
  variance,
  standardDeviation
}