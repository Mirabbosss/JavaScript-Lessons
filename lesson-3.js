// Задача 3. Написать функцию/метод, которая возвращает массив простых чисел в диапазоне (2 числа - минимальное и максимальное) заданных чисел.
// Например, на вход переданы 2 числа: от 11 до 20  (диапазон считается включая граничные значения).

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function findPrimesInRange(min, max) {
  let primes = [];
  for (let i = min; i <= max; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

console.log(findPrimesInRange(11, 20));
console.log(findPrimesInRange(1, 10));
console.log(findPrimesInRange(30, 50));