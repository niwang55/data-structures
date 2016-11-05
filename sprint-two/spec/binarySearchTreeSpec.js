describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(3);
    binarySearchTree.insert(6);
    binarySearchTree.insert(4);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 3, 4, 6]);
  });

  it('should insert duplicates to the right of the current node', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(2);
    var array = [];
    expect(binarySearchTree.left.right.value).to.eql(2);
  });

  it('should have a parent for each node', function() {
    binarySearchTree.insert(3);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.parent.value).to.equal(5);
    expect(binarySearchTree.right.parent.value).to.equal(5);
  });

  it('should return an array of ordered values using the breadthFirst approach', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(3);
    binarySearchTree.insert(4);
    binarySearchTree.insert(6);
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([5, 3, 6, 4]);
  });

  it('should refactor when n < logn', function() {
    // expect depth to equal logn/log2;
  });
});
