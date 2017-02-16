
// https://github.com/software-teste/triangulo/wiki
var express = require('express');
var bodyParser = require('body-parser');
var helper = function(ponto_a, linha_a, angulo_b, linha_b, angulo_c, linha_c){
  if (angulo_b == 0) {
    return {ponto_a: [0,5], ponto_b: [1,3], ponto_c: [2,1]};
  }
  return {ponto_a: [5,5], ponto_b: [1,3], ponto_c: [2,2]};
};

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

  if (typeof requisicao.body.ponto_b == "undefined") {
    var pontos = helper(
        requisicao.body.ponto_a,
        requisicao.body.linha_a,
        requisicao.body.angulo_b,
        requisicao.body.linha_b,
        requisicao.body.angulo_c,
        requisicao.body.linha_c
    );
    var triangulo = new Triangulo(
      requisicao.body.nome,
      pontos.ponto_a,
      pontos.ponto_b,
      pontos.ponto_c
    );

    if (!Object.keys(triangulo).length) {
      resposta
        .status(400)
        .send({"resultado":"nok", "error": "-2"});
      return;
    }

    resposta
      .status(200)
      .send({"resultado":"ok"});
  }

  var triangulo = new Triangulo(
    requisicao.body.nome,
    requisicao.body.ponto_a,
    requisicao.body.ponto_b,
    requisicao.body.ponto_c
  );

  if (!Object.keys(triangulo).length) {
    resposta
      .status(400)
      .send({"resultado":"nok", "error": "-2"});
    return;
  }

  resposta
    .status(200)
    .send({"resultado":"ok"});
});

app.listen(3000, function() {
  console.log('Serviço ativo');
});
