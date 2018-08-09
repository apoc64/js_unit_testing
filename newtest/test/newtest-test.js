
const chai = require('chai');
const expect = chai.expect;
const Hello = require('../newtest.js');

describe('New Stuff', function() {
  it('says hi', function() {
    const hello = new Hello();

    expect(hello.sayHi).to.equal("Hi");
  });
});
