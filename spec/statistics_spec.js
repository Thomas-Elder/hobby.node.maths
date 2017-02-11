var maths = require('../maths');

describe('Statistics', function(){

  var sample = [11, 23, 25, 158, 30, 21, 25, 16, 1, 26, 25, 29, 30, 25, 24, 23];
  var sampleOdd = [11, 23, 25, 158, 30, 21, 25, 16, 1, 26, 25, 29, 30, 25, 24, 23, 31];
  var sampleNaN = [11, 23, 25, "thing", 30, 21, 25, 16, 1, 26, 25, 29, 30, 25, 24, 23];
  var sampleEmpty = [];

  describe('sampleSize', function(){
      
    it('should return 11 when given a sample with 10 values', function(done){

      var expected = 16;
      var result = maths.sampleSize(sample);

      expect(result).toEqual(expected);

      done();
    });
    
    it('should throw a NaN error when the sample contains a non-numeric character', function(done){
      
      try {
        maths.sampleSize(sampleNaN);
      } catch (error) {
        expect(error.message).toEqual('NaN');
        done();
      }
    });

    it('should throw an empty sample error the sample contains no elements', function(done){
      
      var sample = [];

      try {
        maths.sampleSize(sampleEmpty);
      } catch (error) {
        expect(error.message).toEqual('Empty sample');
        done();
      }
    });
  });

  
  describe('mean', function(){
      
    it('should return 30.75 when given the test sample', function(done){

      var expected = 30.75;
      var result = maths.mean(sample);

      expect(result).toEqual(expected);

      done();
    });
    
    it('should throw a NaN error when the sample contains a non-numeric character', function(done){

      try {
        maths.mean(sampleNaN);
      } catch (error) {
        expect(error.message).toEqual('NaN');
        done();
      }
    });

    it('should throw an empty sample error the sample contains no elements', function(done){
      
      var sample = [];

      try {
        maths.mean(sampleEmpty);
      } catch (error) {
        expect(error.message).toEqual('Empty sample');
        done();
      }
    });
  });

  describe('median', function(){
      
    it('should return 25 when given the test sample with an even number of elements', function(done){

      var expected = 25;
      var result = maths.median(sample);

      expect(result).toEqual(expected);

      done();
    });

    it('should return 25 when given the test sample with an odd number of elements', function(done){

      var expected = 25;
      var result = maths.median(sampleOdd);

      expect(result).toEqual(expected);

      done();
    });
    
    it('should throw a NaN error when the sample contains a non-numeric character', function(done){

      try {
        maths.median(sampleNaN);
      } catch (error) {
        expect(error.message).toEqual('NaN');
        done();
      }
    });

    it('should throw an empty sample error the sample contains no elements', function(done){

      try {
        maths.median(sampleEmpty);
      } catch (error) {
        expect(error.message).toEqual('Empty sample');
        done();
      }
    });
  });
  
  describe('mode', function(){
      
    it('should return 25 when given the test sample', function(done){
        
      var expected = 25;
      var result = maths.mode(sample);

      expect(result).toEqual(expected);

      done();
    });
    
    it('should throw a NaN error when the sample contains a non-numeric character', function(done){

      try {
        maths.mode(sampleNaN);
      } catch (error) {
        expect(error.message).toEqual('NaN');
        done();
      }
    });

    it('should throw an empty sample error the sample contains no elements', function(done){

      try {
        maths.mode(sampleEmpty);
      } catch (error) {
        expect(error.message).toEqual('Empty sample');
        done();
      }
    });
  });

  describe('range', function(){
      
    it('should return 157 when given the test sample', function(done){
        
      var expected = 157;
      var result = maths.range(sample);

      expect(result).toEqual(expected);

      done();
    });
    
    it('should throw a NaN error when the sample contains a non-numeric character', function(done){

      try {
        maths.range(sampleNaN);
      } catch (error) {
        expect(error.message).toEqual('NaN');
        done();
      }
    });

    it('should throw an empty sample error the sample contains no elements', function(done){

      try {
        maths.range(sampleEmpty);
      } catch (error) {
        expect(error.message).toEqual('Empty sample');
        done();
      }
    });
  });

 describe('interquartileRange', function(){
      
    it('should return 5.5 when given the test sample with an even number of elements', function(done){
        
      var expected = 5.5;
      var result = maths.interquartileRange(sample);

      expect(result).toEqual(expected);

      done();
    });

    it('should return 7.5 when given the test sample with an odd number of elements', function(done){
        
      var expected = 7.5;
      var result = maths.interquartileRange(sampleOdd);

      expect(result).toEqual(expected);

      done();
    });
    
    it('should throw a NaN error when given a non-numeric parameter', function(done){
      
      try {
        maths.interquartileRange(sampleNaN);
      } catch (error) {
        expect(error.message).toEqual('NaN');
        done();
      }
    });

    it('should throw a divide by zero error when given zero as a second parameter', function(done){
      
      try {
        maths.interquartileRange(sampleEmpty);
      } catch (error) {
        expect(error.message).toEqual('Empty sample');
        done();
      }
    });
  });

  describe('variance', function(){
      
    it('should return 1131.5625 when given the test sample', function(done){
        
      var expected = 1131.5625;
      var result = maths.variance(sample);

      expect(result).toEqual(expected);

      done();
    });
    
    it('should throw a NaN error when given a non-numeric parameter', function(done){
      
      try {
        maths.variance(sampleNaN);
      } catch (error) {
        expect(error.message).toEqual('NaN');
        done();
      }
    });

    it('should throw a divide by zero error when given zero as a second parameter', function(done){
      
      try {
        maths.variance(sampleEmpty);
      } catch (error) {
        expect(error.message).toEqual('Empty sample');
        done();
      }
    });
  });

  describe('standardDeviation', function(){
      
    it('should return 33.638705385314694 when given the test sample', function(done){
        
      var expected = 33.638705385314694;
      var result = maths.standardDeviation(sample);

      expect(result).toEqual(expected);

      done();
    });
    
    it('should throw a NaN error when given a non-numeric parameter', function(done){
      
      try {
        maths.standardDeviation(sampleNaN);
      } catch (error) {
        expect(error.message).toEqual('NaN');
        done();
      }
    });

    it('should throw a divide by zero error when given zero as a second parameter', function(done){
      
      try {
        maths.standardDeviation(sampleEmpty);
      } catch (error) {
        expect(error.message).toEqual('Empty sample');
        done();
      }
    });
  });
});