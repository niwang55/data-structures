var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.stackSize = 0;
  someInstance.storage = {};

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.stackSize++;
    this.storage[this.stackSize] = value;
  },
  dequeue: function() {
    if (this.stackSize) {
      var temp = this.storage[1];
      delete this.storage[1];
      this.stackSize--;

      for ( var key in this.storage) {
        this.storage[key - 1] = this.storage[key];
      }

      return temp;
    }
  },
  size: function() {
    return this.stackSize;
  }
};

var queue = Queue();
queue.enqueue('a');
queue.enqueue('b');
console.log(queue);


