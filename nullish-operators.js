let num1 = 10,
  num2 = 20,
  result;

result ??= num1 ?? num2;

// if (result === null || result === undefined) {
//   if (num1 !== null && num1 !== undefined) {
//     result = num1;
//   } else {
//     result = num2;
//   }
// }
