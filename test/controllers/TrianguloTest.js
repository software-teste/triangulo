//During the test the env variable is set to test
// process.env.NODE_ENV = 'test';

//Require the dev-dependencies
var chai = require('chai');
var chaiHttp = require('chai-http');
// var should = chai.should;
var expect = chai.expect;


var server = 'http://localhost:3000';

chai.use(chaiHttp);

describe('API Triangulo', function() {

  describe('Criar um triângulo novo num projeto', function() {
      it('Teste da URL', (done) => {
        chai.request(server)
            .post('/api/anonimo/triangulo/novo')
            .end(function(err, res) {
                expect(res).to.have.status(400);
                done();
            });
      });

      it('Teste se o retorno é JSON', (done) => {
        chai.request(server)
            .post('/api/anonimo/triangulo/novo')
            .end(function(err, res) {
                expect(res).to.have.status(400);
                expect(res).to.be.json;
                done();
            });
      });

      it('Teste da resposta a uma requisição inválida', (done) => {
        chai.request(server)
            .post('/api/anonimo/triangulo/novo')
            .end(function(err, res) {
                expect(res).to.have.status(400);
                expect(res).to.be.json;

                expect(res.body).to.have.property('resultado')
                  .and.equal('nok');
                expect(res.body).to.have.property('error')
                  .and.equal('-1');
                done();
            });
      });

      it('Teste da resposta a uma requisição válida', (done) => {
        var objetoJson = {
            nome:'anonimo',
            ponto_a:[5,5],
            ponto_b:[1,3],
            ponto_c:[2,1]};

        chai.request(server)
            .post('/api/anonimo/triangulo/novo')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send(objetoJson)
            .end(function(err, res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;

                expect(res.body).to.have.property('resultado')
                  .and.equal('ok');
                expect(res.body).not.to.have.property('error');
                done();
            });
      });

      it('Teste da resposta a uma requisição INválida', (done) => {
        var objetoJson = {
            nome:'anonimo',
            ponto_a:[0,5],
            ponto_b:[1,3],
            ponto_c:[2,1]};

        chai.request(server)
            .post('/api/anonimo/triangulo/novo')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send(objetoJson)
            .end(function(err, res) {
                expect(res).to.have.status(400);
                expect(res).to.be.json;

                expect(res.body)
                    .to.have.property('resultado')
                    .and.equal('nok');
                expect(res.body)
                    .to.have.property('error')
                    .and.equal('-2');
                done();
            });
      });

  });

  describe("Estratégia TOP-DOWN WS criar triângulo [nome] ponto_a linha_a angulo_b linha_b angulo_c linha_c", function() {
    it('Teste da resposta a uma requisição INválida', (done) => {
      var objetoJson = {
          nome:'anonimo',
          ponto_a:[5,5],
          linha_a: 10,
          angulo_b: 0,
          linha_b: 10,
          angulo_c: 0,
          linha_c: 10
        };

      chai.request(server)
          .post('/api/anonimo/triangulo/novo')
          .set('content-type', 'application/x-www-form-urlencoded')
          .send(objetoJson)
          .end(function(err, res) {
              expect(res).to.have.status(400);
              expect(res).to.be.json;

              expect(res.body)
                  .to.have.property('resultado')
                  .and.equal('nok');
              expect(res.body)
                  .to.have.property('error')
                  .and.equal('-2');
              done();
          });
    });

    it('Teste da resposta a uma requisição válida', (done) => {
      var objetoJson = {
          nome:'anonimo',
          ponto_a:[5,5],
          linha_a: 10,
          angulo_b: 45,
          linha_b: 10,
          angulo_c: 45,
          linha_c: 10
        };

      chai.request(server)
          .post('/api/anonimo/triangulo/novo')
          .set('content-type', 'application/x-www-form-urlencoded')
          .send(objetoJson)
          .end(function(err, res) {
              expect(res).to.have.status(200);
              expect(res).to.be.json;

              expect(res.body)
                  .to.have.property('resultado')
                  .and.equal('ok');
              expect(res.body)
                  .not.to.have.property('error');
              done();
          });
    });
  });

});
