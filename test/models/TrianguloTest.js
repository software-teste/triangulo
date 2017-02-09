var assert = require('assert');
var should = require('should');

var Triangulo = require('../../app/models/Triangulo.js');

describe('# Teste da classe Triangulo', function() {
  describe('## Construtores', function() {
      it('Triângulo VALIDO', function() {
        var triangulo = new Triangulo('anomimo', [5,5], [1,3], [2,1]);

        triangulo.should.not.be.null;
      });

      it('Triângulo INVALIDO', function() {
        var triangulo = new Triangulo('anomimo', [0,5], [1,3], [2,1]);

        triangulo.should.be.null;
      });
  });
});
