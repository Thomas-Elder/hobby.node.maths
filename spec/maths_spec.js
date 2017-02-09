var Maths = require('../maths');

describe('Maths', function(){

  var maths = new Maths();

  describe('Arithmetic', function(){

    describe('Sum', function(){
        
      it('should return 5 when given 2 and 3', function(done){
          
        var expected = 5;
        var result = maths.sum(2, 3);

        expect(result).toEqual(expected);

        done();
      });
      
      it('should throw a NaN error when given a non-numeric parameter', function(done){
        
        try {
          maths.sum("two", 3);
        } catch (error) {

          done();
        }
      });
    });

    describe('Subtract', function(){
        
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

    describe('Multiply', function(){
        
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
  });
});