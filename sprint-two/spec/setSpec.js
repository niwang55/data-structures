describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should have the correct number of items', function() {
    set.add('1');
    set.add('2');
    set.add('3');
    expect(set._storage.length).to.equal(3);
  });

  it('should add numbers to a set', function() {
    set.add(1);
    set.add(2);
    expect(set.contains(1)).to.equal(true);
    expect(set.contains(2)).to.equal(true);
  });

  it('should handle input objects of any type', function() {
    set.add([1]);
    set.add({ var1: 'var1' });
    expect(set._storage[0]).to.eql([1]);
    // expect(set.contains([1])).to.equal(true);
    // expect(set.contains({ var1: 'var1' })).to.equal(true);
  });
});
