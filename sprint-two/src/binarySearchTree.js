var BinarySearchTree = function(value) {
  var newBST = Object.create(BSTMethods);
  newBST.value = value;
  newBST.left;
  newBST.right;
  newBST.parent = null;

  return newBST;
};

var BSTMethods = {};

BSTMethods.insert = function(value) {

  var iterator = function(thisBST) {
    if (value < thisBST.value) {
      if ( thisBST.left === undefined ) {
        thisBST.left = BinarySearchTree(value);
        thisBST.left.parent = thisBST;
      } else {
        iterator(thisBST.left);
      }
    } else {
      if ( thisBST.right === undefined ) {
        thisBST.right = BinarySearchTree(value);
        thisBST.right.parent = thisBST;
      } else {
        iterator(thisBST.right);
      }
    }
  };

  iterator(this);
};

BSTMethods.contains = function(value) {
  var ret = false;

  var iterator = function(thisBST) {
    if (thisBST.value === value) {
      ret = true;
    } else if (value < thisBST.value && thisBST.left !== undefined) {
      iterator(thisBST.left);
    } else if (value > thisBST.value && thisBST.right !== undefined) {
      iterator(thisBST.right);
    }
  };

  iterator(this);

  return ret;
};

BSTMethods.depthFirstLog = function(cb) {
  var iterator = function(thisBST) {
    cb(thisBST.value);

    if (thisBST.left !== undefined) {
      iterator(thisBST.left);
    }

    if (thisBST.right !== undefined) {
      iterator(thisBST.right);
    }
  };

  iterator(this);
};

BSTMethods.breadthFirstLog = function(cb) {
  var queue = new Queue();
  queue.enqueue(this);

  var iterator = function(node) {
    if (node.left) {
      queue.enqueue(node.left);
    }

    if (node.right) {
      queue.enqueue(node.right);
    }

    var temp = queue.dequeue();
    cb(temp.value);

    if (queue.size() > 0) {
      iterator(queue.storage[1]);
    }
  };

  iterator(this);
};
/*
 * Complexity: What is the time complexity of the above functions?
 */







function Queue() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.queueSize = 0;  
}

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
