var assert = chai.assert;
var expect = chai.expect;


describe('checking sum', function(){
    it('should calculate and return a sum of two numbers. ', function(){
        var x = 3, y = 7;

        assert.strictEqual(calculateTotal(x,y),10);
    })
})

describe('calculate product', function(){
    it('should calculate and return the product of three numbers', function(){
        var a = 1, b=0, c=7;

        assert.strictEqual(calculateProduct(a,b,c), 0);
    })
})

describe('string test', function(){
    it('should return concat string', function(){
        var a = 'Hello', b ='World';

        assert.strictEqual(stringConcat(a,b), 'HelloWorld');
    });
    it('string is returned', function(){
        var a = 'Hello', b ='World';

        assert.isString(stringConcat(a,b), 'A string not returned')
    })

})