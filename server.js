var express = require('express');
var app = express();

app.get('/', function(requisao, resposta) {
  resposta.send({'api':'cad','versao':'0.0.1'});
});

app.post('/api/:projeto_id/triangulo/novo', function(requisicao, resposta) {
  resposta.send('<html></html>');
});

app.listen(3000, function() {
  console.log('Serviço ativo');
});
