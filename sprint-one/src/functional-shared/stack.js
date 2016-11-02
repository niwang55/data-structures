var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.stackSize = 0;

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
	push: function(value) {
		this.stackSize++;
	},

	pop: function() {
		if( this.stackSize ) {
			this.stackSize--;
		}
	},

	size: function() {
		return this.stackSize;
	}
};


