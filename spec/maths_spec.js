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
  });
});