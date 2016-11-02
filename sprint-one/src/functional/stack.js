var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.pop = function() {
    if( size ) {
      var currVal = storage[size - 1];
      delete storage.size;
      size--;
      return currVal;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
