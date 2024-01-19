const sum = require('../src/mochasum.js');
var chai =  require('chai')
var sinon =  require('sinon')
var obj = new sum();
var expect = chai.expect;

describe("test files", function(){
    
    it('test the add method',function(){
        expect(obj.add(1,2)).to.be.equal(3);
    });

    it('spy the add method',function(){
        var spy =  sinon.spy(obj,"add");
        var x = 10, y =20;
        obj.addanotherfn(x,y);
        // sinon.assert.calledOnce(spy);
        expect(spy.calledOnce).to.be.true;
    })
})