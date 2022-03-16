var assert = chai.assert;
describe('Array', function() {
    it('should start empty', function() {
      // Test implementation goes here
      var arr = []; //REFERED TO AS A SUT - System under test not doing anyting yet

      //assert.equal(arr.length,0); //This is our validation. 
      assert.equal(arr.length, 0, 'Array length was not 0');
    });
  
    // We can have more its here
  });

describe('calculateSum', function() {
    it('should calculate sum', function() {
      // Test implementation goes here
      
            var a = 7, b = 8;
          
            assert.strictEqual(calculateSum(a,b), 15 , 'not equal');
    
      //assert.equal(arr.length,0); //This is our validation. 
      
    });
  
    // We can have more its here
  });