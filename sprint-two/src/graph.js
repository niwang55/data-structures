

// Instantiate a new graph
var Graph = function() {
  this.allNodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = graphNode(node, []);
  this.allNodes.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.allNodes.length; i++) {
    if (this.allNodes[i].value === node) {
      return true;
    }
  }

  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var i = 0;

  while ( this.allNodes.length > i ) {
    if (this.allNodes[i].value === node) {
      this.allNodes.splice(i, 1);
    } else {
      i++;
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for ( var i = 0; i < this.allNodes.length; i++ ) {
    if ( this.allNodes[i].value === fromNode ) {
      this.allNodes[i].edges.push();
      debugger;
    }

    if ( this.allNodes[i].value === toNode ) {
      this.allNodes[i].edges.push();
      debugger;
    }
    debugger;
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

var graphNode = function(value, edges) {
  var node = {};

  node.value = value;
  node.edges = edges;

  return node;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */


