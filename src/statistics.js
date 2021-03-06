
var sampleSize = function(sample) {

  for (var i = 0; i < sample.length; i++) {
    if (isNaN(sample[i]))
      throw new Error('NaN');
  }
  
  if (sample.length === 0)
    throw new Error('Empty sample');

  return sample.length;
};

var frequency = function(sample, val) {

  for (var i = 0; i < sample.length; i++) {
    if (isNaN(sample[i]))
      throw new Error('NaN');
  }
  
  if (sample.length === 0)
    throw new Error('Empty sample');

  var count = 0;

  for (var i = 0; i < sample.length; i++) {
    if (sample[i] === val) {
      count++;
    }
  }

  return count;
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

  var sortedSample = sample.sort(function(a, b) { return a - b });

  /**
   * If the sample.length is even, we need to find the mean of the two values
   * either side of the true middle. sample.length / 2 will give us the index of
   * the value to the right of this middle, so we need to add it to the index
   * 1 to the left of that, and divide that sum by 2. 
   */
  if (sortedSample.length % 2 === 0) {
    return (sortedSample[sortedSample.length / 2] + sortedSample[(sortedSample.length / 2) - 1]) / 2;
  }

  return sortedSample[Math.floor(sortedSample.length/2)]; 
};

var mode = function(sample) {

  for (var i = 0; i < sample.length; i++) {
    if (isNaN(sample[i]))
      throw new Error('NaN');
  }

  if (sample.length === 0)
    throw new Error('Empty sample');

  var high = 0;
  var modes = [];

  for (var i = 0; i < sample.length; i++) {     
    var count = frequency(sample, sample[i]);
    if (count > high)
      high = count;
  }

  for (var i = 0; i < sample.length; i++) {
    if (frequency(sample, sample[i]) === high && modes.indexOf(sample[i]) === -1)
      modes.push(sample[i]);
  }

  return modes;
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

var interquartileRange = function(sample) {

  for (var i = 0; i < sample.length; i++) {
    if (isNaN(sample[i]))
      throw new Error('NaN');
  }

  if (sample.length === 0)
    throw new Error('Empty sample');

  var sortedSample = sample.sort(function(a, b) { return a - b });

  var Q1, Q3;
  
  if (sampleSize(sortedSample) % 2 === 0) {
    Q1 = median(sortedSample.slice(0, sortedSample.length / 2));
    Q3 = median(sortedSample.slice(sortedSample.length / 2));
  } else {
    Q1 = median(sortedSample.slice(0, Math.floor(sortedSample.length / 2)));
    Q3 = median(sortedSample.slice(Math.ceil(sortedSample.length / 2)));
  }

  return Q3 - Q1;
};

var variance = function(sample){

  for (var i = 0; i < sample.length; i++) {
    if (isNaN(sample[i]))
      throw new Error('NaN');
  }

  if (sample.length === 0)
    throw new Error('Empty sample');

  var sum = 0;

  for (var i = 0; i < sample.length; i++) {
    sum += (sample[i] - mean(sample)) * (sample[i] - mean(sample));
  }

  return sum / sample.length;
};

var standardDeviation = function(sample) {

  for (var i = 0; i < sample.length; i++) {
    if (isNaN(sample[i]))
      throw new Error('NaN');
  }

  if (sample.length === 0)
    throw new Error('Empty sample');

  // be nice to make my own sqrt function sometime.
  return Math.sqrt(variance(sample));
};

module.exports = {
  sampleSize,
  frequency,
  mean,
  median,
  mode,
  range,
  interquartileRange,
  variance,
  standardDeviation
}