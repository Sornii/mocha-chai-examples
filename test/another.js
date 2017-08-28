import chai from 'chai';
import example, { Example } from '../example';
import Another from '../another';

chai.should();

describe('Another', function() {
  it('should export Another class', function () {
    Another.should.be.a('function');
  })
  it('should have a instance of Example', function() {
    const another = new Another();
    another.should.own.property('example').with.instanceof(Example);
  })
})
