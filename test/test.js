var expect = require('chai').expect;

var addresses = require('../server.js');
var hostname = require('../server.js');

describe('Unit Test', function() {
  describe('Get IP Addresses', function() {
    it('expect addreses to be an array', function() {
      expect(addresses).to.be.a('array');
    });   
  });
    describe('Get OS information', function() {
    it('expect hostname to be a string', function() {
      expect(hostname).to.be.a('string');
    });   
  });
});