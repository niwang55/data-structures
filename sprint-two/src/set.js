var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  var ret = false;

  for (var i = 0; i < this._storage.length; i++) {
    if (_.isEqual(this._storage[i], item)) {
      ret = true;
    }
  }
  return ret;
};

setPrototype.remove = function(item) {
  if (this.contains(item) ) {
    var removed = this._storage.indexOf(item);

    this._storage.splice(removed, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
