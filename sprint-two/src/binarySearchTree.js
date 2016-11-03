var BinarySearchTree = function(value) {
  var newBST = Object.create(BSTMethods);
  newBST.value = value;
  newBST.left;
  newBST.right;

  return newBST;
};

var BSTMethods = {};

BSTMethods.insert = function(value) {

  var iterator = function(thisBST) {
    if (value < thisBST.value) {
      if ( thisBST.left === undefined ) {
        thisBST.left = BinarySearchTree(value);
      } else {
        iterator(thisBST.left);
      }
    } else {
      if ( thisBST.right === undefined ) {
        thisBST.right = BinarySearchTree(value);
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
/*
 * Complexity: What is the time complexity of the above functions?
 */
