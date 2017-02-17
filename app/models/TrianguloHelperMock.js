var Triangulo = require('./Triangulo');

module.exports = function helper(objeto_json) {
  var triangulo = {};
  if (typeof objeto_json.ponto_b == 'undefined') {
    if (objeto_json.angulo_b == 0) {
      return {};
    }
    return new Triangulo(
      'anonimo',
      [5,5],
      [1,3],
      [2,1]
    );
  } else {
    return new Triangulo(
        objeto_json.nome,
        objeto_json.ponto_a,
        objeto_json.ponto_b,
        objeto_json.ponto_c);
 };
};
