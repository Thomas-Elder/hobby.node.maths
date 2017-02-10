
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

  /**
   * If the sample.length is even, we need to find the mean of the two values
   * either side of the true middle. sample.length / 2 will give us the index of
   * the value to the right of this middle, so we need to add it to the index
   * 1 to the left of that, and divide that sum by 2. 
   */
  if (sample.length % 2 === 0) {
    return (sample[sample.length / 2] + sample[(sample.length / 2) - 1]) / 2;
  }

  return sample[Math.floor(sample.length/2)]; 
};

var mode = function(sample) {

  for (var i = 0; i < sample.length; i++) {
    if (isNaN(sample[i]))
      throw new Error('NaN');
  }

  if (sample.length === 0)
    throw new Error('Empty sample');

  var high = 0;
  var currentMode = 0;

  for (var i = 0; i < sample.length; i++) {
    
    var count = 1;
    
    for (var k = 0; k < sample.length; k++) {
      if (sample[i] === sample[k])
        count++;
    }

    if (count > high) {
      currentMode = sample[i];
      high = count;
    } 
  }

  return currentMode;
};

var range = function(sample){

  for (var i = 0; i < sample.length; i++) {
    if (isNaN(sample[i]))
      throw new Error('NaN');
  }

  if (sample.length === 0)
    throw new Error('Empty sample');
  
  var min = sample[0];
  var max = sample[0];

  for (var i = 0; i < sample.length; i++) {

    if(sample[i] < min)
      min = sample[i];
    
    if(sample[i] > max)
      max = sample[i];
  }

  return max - min;
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
  range,
  variance,
  standardDeviation
}