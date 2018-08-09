// test/Box-test.js

const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
chai.should();
const Box = require('../Box.js');

describe('Box', function() {
  it('should return true', function() {
    assert.equal(true, true);

    expect(true).to.equal(true);
    expect('foo').to.be.a('string');
    expect('foo').to.have.lengthOf(3);

    true.should.equal(true)
  });

  it('should have a default height and width', function() {
    var box = new Box();

    expect(box.height).to.equal(100);
    expect(box.width).to.equal(100);
  });

  it('should take h and w as arguements', function() {
    var box = new Box(50, 40);

    expect(box.height).to.equal(50);
    expect(box.width).to.equal(40);
  });

  it('should calculate area', function() {
    var box = new Box(30, 30);

    expect(box.area).to.equal(900);
  });

  // before, after, beforeEach, afterEach...

  it('should increment width by a value', function() {
    var box = new Box(50, 50);

    box.increaseWidth(10);

    expect(box.width).to.equal(60);
    expect(box.height).to.equal(50);
    expect(box.area).to.equal(3000);
  });

  it('should increment height by a value', function() {
    var box = new Box(50, 50);

    box.increaseHeight(10);

    expect(box.width).to.equal(50);
    expect(box.height).to.equal(60);
    expect(box.area).to.equal(3000);
  });


});
