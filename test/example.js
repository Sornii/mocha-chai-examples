import chai from 'chai';
import example, { Example } from '../example';

chai.should();

describe('Example', function() {
  it('should default export a object', function () {
    example.should.be.a('object');
    example.should.be.an.instanceof(Example);
  })
  it('should export default title', function () {
    Example.title.should.be.a('string');
  })
  it('default title should be Example', function () {
    Example.title.should.equal('Example');
  })
  describe('instance', function() {
    it('should have a property title', function () {
      example.should.own.property('title').with.a('string');
    })
    it('title should be the same as default title', function () {
      example.title.should.be.equal(Example.title);
    })
  })
})
