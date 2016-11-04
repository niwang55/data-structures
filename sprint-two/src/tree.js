var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  newTree.parent = null;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  newTree.parent = this;
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  var ret = false;

  var iterator = function(currentTree) {
    if (currentTree.value === target) {
      ret = true;
    }

    if (currentTree.children.length > 0 ) {
      for ( var i = 0; i < currentTree.children.length; i++) {
        iterator(currentTree.children[i]);
      }
    }
  };

  iterator( this );
  return ret;
};

treeMethods.removeFromParent = function(tree) {
  for (var i = 0; i < tree.parent.children.length; i++) {
    if (tree.parent.children[i].value === tree.value) {
      tree.parent.children.splice(i, 1);
    }
  }

  tree.parent = null;
};

treeMethods.traverse = function(cb) {
  var iterator = function(currentTree) {
    cb(currentTree.value);
    for (var i = 0; i < currentTree.children.length; i++) {
      iterator(currentTree.children[i]);
    }
  };

  iterator(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
