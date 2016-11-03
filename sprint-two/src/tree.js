var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
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



/*
 * Complexity: What is the time complexity of the above functions?
 */
