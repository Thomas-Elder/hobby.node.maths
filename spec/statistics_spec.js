var maths = require('../maths');

describe('Statistics', function(){

  describe('sampleSize', function(){
      
    it('should return 11 when given a sample with 10 values', function(done){
      
      var sample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

      var expected = 11;
      var result = maths.sampleSize(sample);

      expect(result).toEqual(expected);

      done();
    });
    
    it('should throw a NaN error when the sample contains a non-numeric character', function(done){
      
      var sample = [1, 2, 3, 4, 5, 6, "thing", 8, 9, 10, 11];

      try {
        maths.sampleSize(sample);
      } catch (error) {
        expect(error.message).toEqual('NaN');
        done();
      }
    });

    it('should throw an empty sample error the sample contains no elements', function(done){
      
      var sample = [];

      try {
        maths.sampleSize(sample);
      } catch (error) {
        expect(error.message).toEqual('Empty sample');
        done();
      }
    });
  });

  
  describe('mean', function(){
      
    it('should return 6 when given the test sample', function(done){
      
      var sample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

      var expected = 6;
      var result = maths.mean(sample);

      expect(result).toEqual(expected);

      done();
    });
    
    it('should throw a NaN error when the sample contains a non-numeric character', function(done){
      
      var sample = [1, 2, 3, 4, 5, 6, "thing", 8, 9, 10, 11];

      try {
        maths.mean(sample);
      } catch (error) {
        expect(error.message).toEqual('NaN');
        done();
      }
    });

    it('should throw an empty sample error the sample contains no elements', function(done){
      
      var sample = [];

      try {
        maths.mean(sample);
      } catch (error) {
        expect(error.message).toEqual('Empty sample');
        done();
      }
    });
  });
  
  describe('median', function(){
      
    it('should return 6 when given the test sample', function(done){
        
      var sample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

      var expected = 6;
      var result = maths.median(sample);

      expect(result).toEqual(expected);

      done();
    });
    
    it('should throw a NaN error when the sample contains a non-numeric character', function(done){
      
      var sample = [1, 2, 3, 4, 5, 6, "thing", 8, 9, 10];

      try {
        maths.median(sample);
      } catch (error) {
        expect(error.message).toEqual('NaN');
        done();
      }
    });

    it('should throw an empty sample error the sample contains no elements', function(done){
      
      var sample = [];

      try {
        maths.median(sample);
      } catch (error) {
        expect(error.message).toEqual('Empty sample');
        done();
      }
    });
  });

  /*
  describe('mode', function(){
      
    it('should return 2 when given 6 and 3', function(done){
        
      var expected = 2;
      var result = maths.divide(6, 3);

      expect(result).toEqual(expected);

      done();
    });
    
    it('should throw a NaN error when given a non-numeric parameter', function(done){
      
      try {
        maths.divide("two", 3);
      } catch (error) {

        done();
      }
    });

    it('should throw a divide by zero error when given zero as a second parameter', function(done){
      
      try {
        maths.divide(6, 0);
      } catch (error) {

        done();
      }
    });
  });

  describe('variance', function(){
      
    it('should return 2 when given 6 and 3', function(done){
        
      var expected = 2;
      var result = maths.divide(6, 3);

      expect(result).toEqual(expected);

      done();
    });
    
    it('should throw a NaN error when given a non-numeric parameter', function(done){
      
      try {
        maths.divide("two", 3);
      } catch (error) {

        done();
      }
    });

    it('should throw a divide by zero error when given zero as a second parameter', function(done){
      
      try {
        maths.divide(6, 0);
      } catch (error) {

        done();
      }
    });
  });

  describe('standardDeviation', function(){
      
    it('should return 2 when given 6 and 3', function(done){
        
      var expected = 2;
      var result = maths.divide(6, 3);

      expect(result).toEqual(expected);

      done();
    });
    
    it('should throw a NaN error when given a non-numeric parameter', function(done){
      
      try {
        maths.divide("two", 3);
      } catch (error) {

        done();
      }
    });

    it('should throw a divide by zero error when given zero as a second parameter', function(done){
      
      try {
        maths.divide(6, 0);
      } catch (error) {

        done();
      }
    });
  });*/
});