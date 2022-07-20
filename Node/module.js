/*3 ways to export module
1.
module.exports.add = add;
module.exports.substract = substract;
module.exports.multiply = multiply;
module.exports.divide = divide;
2.
exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;
3.
*/
exports.add = function add(a,b){
    return a + b;
}
exports.substract = function substract(a,b){
    return a - b;
}
exports.multiply = function multiply(a,b){
    return a * b;
}
exports.divide = function divide(a,b){
    return a / b;
}
