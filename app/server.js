
// https://github.com/software-teste/triangulo/wiki

// configuração do servidor
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// importação dos módulos
var Triangulo = require('./models/Triangulo');
var helper = require('./models/TrianguloHelperMock');

app.get('/', function(requisao, resposta) {
  resposta.send({'api':'cad','versao':'0.0.1'});
});

app.post('/api/:projeto_id/triangulo/novo', function(requisicao, resposta) {

  // Se não tem JSON no body
  if (!Object.keys(requisicao.body).length) {
    resposta_erro(resposta, -1);
    return;
  }

  // cria o objeto triangulo com o helper
  var triangulo = helper(requisicao.body);
  console.log('retorno de helper ', triangulo);

  // erro com o json da requisição
  if (!Object.keys(triangulo).length) {
    resposta_erro(resposta, -2);
    return;
  }

  // triângulo criado com sucesso
  resposta
    .status(200)
    .send({"resultado":"ok"});
});

app.listen(3000, function() {
  console.log('Serviço ativo');
});


function resposta_erro(resposta, erro) {
  resposta
    .status(400)
    .send({"resultado":"nok", "error": erro});
}
