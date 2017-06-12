class Queue {
  constructor() {
    this._storage = [];
  };

  size() {
    return this._storage.length;
  };

  enqueue(item) {
    return this._storage.unshift(item);
  };

  dequeue() {
    return this._storage.shift();
  };
}

module.exports = Queue;
