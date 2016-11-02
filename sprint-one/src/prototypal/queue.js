var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create( queueMethods );
  newQueue.storage = {};
  newQueue.queueSize = 0;

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.queueSize++;
  this.storage[this.queueSize] = value;
};

queueMethods.dequeue = function() {
  if (this.queueSize) {
    var temp = this.storage[1];
    delete this.storage[1];
    this.queueSize--;

    for ( var key in this.storage) {
      this.storage[key - 1] = this.storage[key];
    }

    return temp;
  }
};

queueMethods.size = function() {
  return this.queueSize;
};

