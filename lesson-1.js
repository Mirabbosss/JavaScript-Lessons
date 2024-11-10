// Задача 1. Разработайте функцию, которая принимает целое число в качестве аргумента и возвращает строку, содержащую это число и слово "компьютер" в нужном склонении по падежам в зависимости от числа. Например, при вводе числа 25 функция должна возвращать "25 компьютеров", для числа 41 — "41 компьютер", а для числа 1048 — "1048 компьютеров".

function getComputersString(number) {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return `${number} компьютеров`;
  }

  if (lastDigit === 1) {
    return `${number} компьютер`;
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return `${number} компьютера`;
  }

  return `${number} компьютеров`;
}

console.log(getComputersString(25));
console.log(getComputersString(41));
console.log(getComputersString(1048));
console.log(getComputersString(3));
console.log(getComputersString(102));