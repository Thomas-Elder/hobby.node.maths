var arithmetic = require('./src/arithmetic');
var statistics = require('./src/statistics');

module.exports = {
  // arithmetic
  sum: arithmetic.sum,
  subtract: arithmetic.subtract,
  multiply: arithmetic.multiply,
  divide: arithmetic.divide,

  // statistics
  sampleSize: statistics.sampleSize,
  frequency: statistics.frequency,
  mean: statistics.mean,
  median: statistics.median,
  mode: statistics.mode,
  range: statistics.range,
  interquartileRange: statistics.interquartileRange,
  variance: statistics.variance,
  standardDeviation: statistics.standardDeviation
};

