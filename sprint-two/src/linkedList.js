var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      var newNode = new Node(value);
      list.head = newNode;
      list.tail = newNode;
    } else {
      var nextNode = new Node(value);

      list.tail.next = nextNode;
      list.tail = list.tail.next;
      
    }


  };

  list.removeHead = function() {
    var temp = list.head;
    list.head = list.head.next;
    return temp.value;
  };

  list.contains = function(target) {
    var currentNode = list.head;

    do {
      if (currentNode.value === target) {
        return true;
      } 
      currentNode = currentNode.next;
    } while (currentNode !== null && currentNode.value !== undefined);

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
