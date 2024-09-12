// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

function isFibonacci(num) {
    let fib1 = 0;
    let fib2 = 1;
    
    while (fib2 < num) {
      [fib1, fib2] = [fib2, fib1 + fib2];
    }
    
    return fib2 === num;
  }
  
  // Testando a função com alguns exemplos
  const testNumbers = [0, 1, 2, 3, 4, 5, 6, 13, 21, 103];
  
  testNumbers.forEach(num => {
    if (isFibonacci(num)) {
      console.log(`${num} faz parte da sequência de Fibonacci.`);
    } else {
      console.log(`${num} não faz parte da sequência de Fibonacci.`);
    }
  });

// 0 não faz parte da sequência de Fibonacci.
// 1 faz parte da sequência de Fibonacci.
// 2 faz parte da sequência de Fibonacci.
// 3 faz parte da sequência de Fibonacci.
// 4 não faz parte da sequência de Fibonacci.
// 5 faz parte da sequência de Fibonacci.
// 6 não faz parte da sequência de Fibonacci.
// 13 faz parte da sequência de Fibonacci.
// 21 faz parte da sequência de Fibonacci.
// 103 não faz parte da sequência de Fibonacci.
  
