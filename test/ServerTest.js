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
describe('API', function() {
    // beforeEach((done) => { //Before each test we empty the database
    //     Book.remove({}, (err) => {
    //        done();
    //     });
    // });
/*
  * Test the /GET route
  */
  describe('/', function() {
      it('Verificar se a API esta funcionando', (done) => {
        chai.request(server)
            .get('/')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                done();
            });
      });
  });

});
