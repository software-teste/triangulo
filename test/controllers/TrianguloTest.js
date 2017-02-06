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
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                done();
            });
      });

      // testar :
      // - se o retorno foi OK triangulo válido e criado
      //   {"retorno":"ok"}
      // - se o retorno foi NAO OK triangulo é inválido
      //   {"retorno":"nok","motivo":"triângulo inválido"}
      // - se o retorno foi NAO OK porque não foi passado JSON como parametro
      //   {"retorno":"nok","motivo":"requisição inválida"}
  });

});
