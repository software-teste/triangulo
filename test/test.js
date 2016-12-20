var assert = require('assert');
var should = require('should');

describe('Teste das ferramentas', function() {
    // https://nodejs.org/api/assert.html
    // https://mochajs.org/
    describe('Mocha', function() {
        it('Teste do mocha com asserção verdade', function() {
            assert.ok(true, 'Ferramenta funcionou!');
        });
        it('Teste do mocha com asserção igualdade', function() {
            assert.equal(1, 1, 'Ferramenta funcionou!');
        });
    });

    // https://shouldjs.github.io/
    // https://github.com/tj/should.js
    describe('Should', function() {
        it('Teste do should com asserção de igualdade', function() {
            (1).should.be.equal(1);
        });
        it('Teste do should com asserção de tipo', function() {
            (1).should.be.type('number');
        });
    });
});