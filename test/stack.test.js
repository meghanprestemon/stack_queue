const expect = require('chai').expect;
const Stack = require('../src/Stack');

describe('Stack', function() {

  describe('Stack.size', function() {
    it('should have a size operation', function() {
      const stack = new Stack();
      expect(stack.size).is.a('function');
    });
    it('should return 0 when given a new stack', function() {
      let stack = new Stack();
      expect(stack.size()).to.equal(0);
    });
    it('should not return 0 after we add an item', function() {
      let stack = new Stack();
      stack.push(1);
      expect(stack.size()).to.not.equal(0);
    });
  });

  describe('Stack.pop', function() {
    it('should have a pop operation', function() {
      const stack = new Stack();
      expect(stack.pop).is.a('function');
    });
    it('should return a value', function() {
      const stack = new Stack();
    });
    it('should remove an item from the end of the stack', function() {
      const stack = new Stack();
      for (var i = 0; i < 5; i++) {
        stack.push(i);
      }
      expect(stack.pop()).to.equal(4);
    });
  });

  describe('Stack.push', function() {
    it('should have a push operation', function() {
      const stack = new Stack();
      expect(stack.push).is.a('function');
    });
    it('should increase the size of the stack', function() {
      const stack = new Stack();
      stack.push(1);
      expect(stack.size()).to.equal(1);
    });
    it('should add an item to the end of the stack', function() {
      const stack = new Stack();
      for (var i = 0; i < 5; i++) {
        stack.push(i);
      }
      expect(stack.pop()).to.equal(4);
    });
  });

});
