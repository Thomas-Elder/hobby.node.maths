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

#### mean
`mean(sample);`

Returns the mean of the sample.

Throws an error if the sample contains non-numeric elements.
Throws an error if the sample is empty.

## Changelog
###v1.0.7
Added API information to the README.md.

###v1.0.4
First release. The module currently only has functions for basic arithmetic.