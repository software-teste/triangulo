
// https://github.com/software-teste/triangulo/wiki
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json({ type: 'application/*+json' }));

var Triangulo = require('./models/Triangulo');

app.get('/', function(requisao, resposta) {
  resposta.send({'api':'cad','versao':'0.0.1'});
});

app.post('/api/:projeto_id/triangulo/novo', function(requisicao, resposta) {
  console.log(requisicao.body);
  if (requisicao.body.length == 0) {
    resposta
      .status(400)
      .send({"resultado":"nok", "error": "-1"});
  } else {
    var triangulo = new Triangulo(
      requisicao.body.nome,
      requisicao.body.ponto_a,
      requisicao.body.ponto_b,
      requisicao.body.ponto_c
    );
    resposta
      .status(200)
      .send({"resultado":"ok");
  }
});

app.listen(3000, function() {
  console.log('Serviço ativo');
});
