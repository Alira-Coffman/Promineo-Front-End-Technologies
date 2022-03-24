var assert = chai.assert;
var expect = chai.expect;
describe('Array', function(){
    it('should start empty', function(){
        //TESTS GO HERE
        var arr = [];

        assert.equal(arr.length,0, 'Array length was not zero');
    });
});

describe('calculateSum', function(){
    it('should calculate & return a sum', function()
    {
        var a = 5, b = 4;
        assert.strictEqual(calculateSum(a,b), 9);
    })
})

describe('calculateMultiply', function(){
    it('should calculate & return a product', function(){
        var a = 2, b = 1, c = 4;

        assert.strictEqual(calculateProduct(a,b,c), 8);
    })
})

describe('strings', function(){
    it('should return a concated string', function(){

        var a = 'Hello ', b = 'World';

        assert.strictEqual(stringAdding(a,b), 'Hello World');
    })
    it('returns a string', function(){
        var a = 'Hello ', b = 'World';

        assert.isString(stringAdding(a,b), 'Is not a string');
    })
})


describe('Objects', function(){
    it('should be empty', function(){
        //TESTS GO HERE
        var obj = {};

        //expect({}).to.be.empty;
        expect(obj).to.be.empty;
    });
});