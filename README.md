# thombsaway-maths
[![Build Status](https://travis-ci.org/Thomas-Elder/hobby.node.maths.svg?branch=master)](https://travis-ci.org/Thomas-Elder/hobby.node.maths)

I set up this module to practice creating npm modules, versioning, publishing and using them in different packages. 

The module currently only has functions for basic arithmetic; sum, subtract, multiply and divide.

## Installation
`npm install thombsaway-maths`

## API
The module exposes the following functions:

### Arithmetic
#### sum
`sum(number, number);`

Adds the two parameters together.

Throws an error if either parameter is not a number.

#### subtract
`subtract(number, number);`

Subtracts the second parameter from the first.

Throws an error if either parameter is not a number.

#### multiply
`multiply(number, number);`

Multiplies the two parameters together.

Throws an error if either parameter is not a number.

#### divide
`divide(dividend, divisor);`

Divides the dividend by the divisor. 

Throws an error if either parameter is not a number.
Throws an error if the divisor is zero. 

### Statistics
#### sampleSize
`sampleSize(sample);`

Returns the size of the sample. 

Throws an error if the sample contains non-numeric elements.
Throws an error if the sample is empty.

#### frequency
`frequency(sample, val);`

Returns the frequency of a value in the the sample. Returns 0 if the value is not in the sample.

Throws an error if the sample contains non-numeric elements.
Throws an error if the sample is empty.


#### mean
`mean(sample);`

Returns the mean of the sample.

Throws an error if the sample contains non-numeric elements.
Throws an error if the sample is empty.

#### median
`median(sample);`

Returns the median of the sample.

Throws an error if the sample contains non-numeric elements.
Throws an error if the sample is empty.

#### mode
`mode(sample);`

Returns the mode of the sample.

Throws an error if the sample contains non-numeric elements.
Throws an error if the sample is empty.

#### range
`range(sample);`

Returns the range of the sample.

Throws an error if the sample contains non-numeric elements.
Throws an error if the sample is empty.

#### interquartileRange
`interquartileRange(sample);`

Returns the interquartile range range of the sample.

Throws an error if the sample contains non-numeric elements.
Throws an error if the sample is empty.

#### variance
`variance(sample);`

Returns the variance of the sample.

Throws an error if the sample contains non-numeric elements.
Throws an error if the sample is empty.

Note there's no precision control on the return value at the moment.

#### standardDeviation
`standardDeviation(sample);`

Returns the standard deviation of the sample.

Throws an error if the sample contains non-numeric elements.
Throws an error if the sample is empty.

Note there's no precision control on the return value at the moment.

## Changelog
###v1.1.1
Added changelog info on v1.1.0

###v1.1.0
Added the statistics functions to the module. 
The mode function can now handle multimodal samples.

###v1.0.7
Added API information to the README.md.

###v1.0.4
First release. The module currently only has functions for basic arithmetic.