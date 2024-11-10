// Задача 2. Написать функцию/метод, которая на вход получает массив положительных целых чисел произвольной длины.
// Например [42, 12, 18]. На выходе возвращает массив чисел, которые являются общими делителями для всех указанных числе. В примере это будет [2, 3, 6].

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function findCommonDivisors(numbers) {
  let commonGcd = numbers.reduce((acc, num) => gcd(acc, num), numbers[0]);

  let divisors = [];
  for (let i = 1; i <= commonGcd; i++) {
    if (commonGcd % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
}

console.log(findCommonDivisors([42, 12, 18]));
console.log(findCommonDivisors([36, 60, 72]));
console.log(findCommonDivisors([5, 15, 25]));
