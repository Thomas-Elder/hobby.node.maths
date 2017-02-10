
var sampleSize = function(sample) {
  
  console.log(sample);

  for (var i = 0; i < sample.length; i++) {
    if (isNaN(sample[i]))
      throw new Error('NaN');
  }
  
  return sample.length;
};

var mean = function() {

};

var median = function() {

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