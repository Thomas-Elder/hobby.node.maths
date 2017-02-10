var maths = require('../maths');

describe('Statistics', function(){

  describe('sampleSize', function(){
      
    it('should return 5 when given 2 and 3', function(done){
      
      var sample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      var expected = 10;
      var result = maths.sampleSize(sample);

      expect(result).toEqual(expected);

      done();
    });
    
    it('should throw a NaN error when the sample contains a non-numeric character', function(done){
      
      var sample = [1, 2, 3, 4, 5, 6, "thing", 8, 9, 10];

      try {
        maths.sampleSize(sample);
      } catch (error) {

        done();
      }
    });
  });

  /*
  describe('mean', function(){
      
    it('should return -1 when given 2 and 3', function(done){
        
      var expected = -1;
      var result = maths.subtract(2, 3);

      expect(result).toEqual(expected);

      done();
    });
    
    it('should throw a NaN error when given a non-numeric parameter', function(done){
      
      try {
        maths.subtract("two", 3);
      } catch (error) {

        done();
      }
    });
  });

  describe('median', function(){
      
    it('should return 6 when given 2 and 3', function(done){
        
      var expected = 6;
      var result = maths.multiply(2, 3);

      expect(result).toEqual(expected);

      done();
    });
    
    it('should throw a NaN error when given a non-numeric parameter', function(done){
      
      try {
        maths.multiply("two", 3);
      } catch (error) {

        done();
      }
    });
  });

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