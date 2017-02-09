//During the test the env variable is set to test
// process.env.NODE_ENV = 'test';

//Require the dev-dependencies
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should;
var expect = chai.expect;


var server = 'http://localhost:3000';

chai.use(chaiHttp);

//Our parent block
describe('API Triangulo', function() {
    // beforeEach((done) => { //Before each test we empty the database
    //     Book.remove({}, (err) => {
    //        done();
    //     });
    // });
/*
  * Testa criar novos objetos no projeto
  */
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
        chai.request(server)
            .post('/api/anonimo/triangulo/novo')
            .send({nome:'anonimo',
                ponto_a:[5,5],
                ponto_b:[1,3],
                ponto_c:[2,1]})
            .end(function(err, res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;

                expect(res.body).to.have.property('resultado')
                  .and.equal('ok');
                expect(res.body).not.to.have.property('error');
                done();
            });
      });

      // testar :
      // -> se o retorno foi OK triangulo válido e criado
      //   {"retorno":"ok"}
      // - se o retorno foi NAO OK triangulo é inválido
      //   {"retorno":"nok","motivo":"triângulo inválido"}
      // OK se o retorno foi NAO OK porque não foi passado JSON como parametro
      //   {"retorno":"nok","motivo":"requisição inválida"}
  });

});
