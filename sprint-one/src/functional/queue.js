var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    if ( size ) {
      var removedValue = storage[0];
      delete storage[0];
      size--;

      for( var key in storage ) {
        var currVal = storage[key];

        //Decrease each key in the storage by 1
        storage[key-1] = currVal;

        //Remove the value with the +1 key
        delete storage[key];
      }
      return removedValue;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
