
// https://github.com/software-teste/triangulo/wiki
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var Triangulo = require('./models/Triangulo');

app.get('/', function(requisao, resposta) {
  resposta.send({'api':'cad','versao':'0.0.1'});
});

app.post('/api/:projeto_id/triangulo/novo', function(requisicao, resposta) {
  if (!Object.keys(requisicao.body).length) {
    resposta
      .status(400)
      .send({"resultado":"nok", "error": "-1"});
    return;
  }
  var triangulo = new Triangulo(
    requisicao.body.nome,
    requisicao.body.ponto_a,
    requisicao.body.ponto_b,
    requisicao.body.ponto_c
  );
  resposta
    .status(200)
    .send({"resultado":"ok"});
});

app.listen(3000, function() {
  console.log('Serviço ativo');
});
