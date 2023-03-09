function fibonacci(num) {
  var n1 = 0, n2 = 1, valor = 1;
  for(var i = 2; i <= num; i++) {
    valor = n1 + n2;
    n1 = n2;
    n2 = valor;
  }
  return valor;
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
console.log(fibonacci(9));


