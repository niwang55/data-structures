var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.queueSize = 0;  
};

Queue.prototype.size = function () {
  return this.queueSize;
};

Queue.prototype.enqueue = function(value) {
  this.queueSize++;
  this.storage[this.queueSize] = value;
};

Queue.prototype.dequeue = function() {
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


