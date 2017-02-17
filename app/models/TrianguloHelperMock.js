// module.exports = function helper(json) {
module.exports = function helper(ponto_a, linha_a, angulo_b, linha_b, angulo_c, linha_c) {
    if (angulo_b == 0) {
      return {ponto_a: [0,5], ponto_b: [1,3], ponto_c: [2,1]};
    }
    return {ponto_a: [5,5], ponto_b: [1,3], ponto_c: [2,2]};
};
