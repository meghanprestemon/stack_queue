const expect = require('chai').expect;
const Queue = require('../src/Queue')

describe('Queue', function() {

  describe('Queue.size', function() {
    it('should have a size operation', function() {
      const queue = new Queue();
      expect(queue.size).is.a('function');
    });
    it('should return 0 when given a new queue', function() {
      let queue = new Queue();
      expect(queue.size()).to.equal(0);
    });
    it('should not return 0 after we add an item', function() {
      let queue = new Queue();
      queue.enqueue(1);
      expect(queue.size()).to.not.equal(0);
    });
  });

  describe('Queue.dequeue', function() {
    it('should have a dequeue operation', function() {
      const queue = new Queue();
      expect(queue.dequeue).is.a('function');
    });
    it('should return a value', function() {
      const queue = new Queue();
    });
    it('should remove an item from the beginning of the queue', function() {
      const queue = new Queue();
      for (var i = 0; i < 5; i++) {
        queue.enqueue(i);
      }
      expect(queue.dequeue()).to.equal(4);
    });
  });

  describe('Queue.enqueue', function() {
    it('should have an enqueue operation', function() {
      const queue = new Queue();
      expect(queue.enqueue).is.a('function');
    });
    it('should increase the size of the queue', function() {
      const queue = new Queue();
      queue.enqueue(1);
      expect(queue.size()).to.equal(1);
    });
    it('should add an item to the beginning of the queue', function() {
      const queue = new Queue();
      for (var i = 0; i < 5; i++) {
        queue.enqueue(i);
      }
      expect(queue.dequeue()).to.equal(4);
    });
  });

});
