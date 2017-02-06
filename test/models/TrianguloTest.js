var assert = require('assert');
var should = require('should');

var Triangulo = require('../../app/models/Triangulo.js');

describe('# Teste da classe Triangulo', function() {
  describe('### Construtores', function() {
      it('###### VALIDO nome, ponto, ponto, ponto', function() {
        var triangulo = new Triangulo('anomimo', [0,0], [0,0], [0,0]);
        triangulo.should.not.be.equal(undefined);
      });
  });
});
