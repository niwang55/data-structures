

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
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

  this._counter++;
  
  if (this._counter >= 0.75 * this._limit) {
    this._limit *= 2;
    this._counter = 0;
    var temp = this._storage;
    this._storage = LimitedArray(this._limit);

    temp.each( function(bucket) {
      if (bucket) {
        for (var i = 0; i < bucket.length; i++) {
          this.insert(bucket[i][0], bucket[i][1]);
        }
      }      
    }.bind(this));
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

  this._counter--;
  
  if (this._counter <= 0.25 * this._limit) {
    this._limit /= 2;
    this._counter = 0;
    var temp = this._storage;
    this._storage = LimitedArray(this._limit);

    temp.each( function(bucket) {
      if (bucket) {
        for (var i = 0; i < bucket.length; i++) {
          this.insert(bucket[i][0], bucket[i][1]);
        }
      }      
    }.bind(this));
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


