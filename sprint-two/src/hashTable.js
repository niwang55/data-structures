

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var values = this._storage.get(index);

  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    for (var i = 0; i < values.length; i++) {
      if (values[i][0] === k) {
        values[i][1] = v;
      } else {
        this._storage.get(index).push([k, v]);
      }
    }

  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var value = this._storage.get(index);

  if ( value ) {
    for (var i = 0; i < value.length; i++) {
      if (value[i][0] === k ) {
        return value[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function( e, i, c ) {
    if (i === index) {
      c.splice( i, 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


