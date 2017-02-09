

var Triangulo = function(nome, ponto_a, ponto_b, ponto_c) {
  if ( !eh_triangulo_valido (ponto_a, ponto_b, ponto_c) ) {
    // throw new Error('Triângulo inválido');
    return null;
  }
  this.nome = nome;
  this.ponto_a = ponto_a;
  this.ponto_b = ponto_b;
  this.ponto_c = ponto_c;
};

function eh_triangulo_valido(ponto_a, ponto_b, ponto_c) {
  return 0 != (
    (ponto_a[0] * ponto_b[1] * 1) +
    (ponto_a[1] * 1          * ponto_c[0]) +
    (1          * ponto_b[0] * ponto_c[1]) -
    (1          * ponto_b[1] * ponto_c[0]) -
    (ponto_a[0] * 1          * ponto_c[1]) -
    (ponto_a[1] * ponto_b[0] * 1));
};

module.exports = Triangulo;
