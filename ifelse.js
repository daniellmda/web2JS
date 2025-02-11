// // Ex

// let age = prompt('age?', 18);

// let message = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';

// alert( message ); // Greetings!

let age = 2;
let accessAllowed = age > 18 ? "Ai mai mult de 18" : false;

console.log(accessAllowed); // false

// task 1

if ("0") {
  alert("Hello");
}

// Yes, the alert will show. The string "0" is truthy, so the condition is true.

// task 2

// usng the if..else construct, write the code which asks: 'What is the "official" name of JavaScript?'

let jsname = prompt("What is the official name of JavaScript?", "");

if (jsname == "ECMAScript") {
  alert("Right!");
} else {
  alert("You don't know? ECMAScript!");
}

// task 3
// Using if..else, write the code which gets a number via prompt and then shows in alert:

let number = prompt("Enter a number", 0);

if (number == 0) {
  alert(0);
} else if (number > 0) {
  alert(1);
} else {
  alert(-1);
}

// task 4
// Rewrite this if using the conditional operator '?':

let result = a + 4 < 4 ? "Below" : "Over";

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

// task 5
// Rewrite if..else using multiple ternary operators '?'

let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";

// if (login == "Employee") {
//   message = "Hello";
// } else if (login == "Director") {
//   message = "Greetings";
// } else if (login == "") {
//   message = "No login";
// } else {
//   message = "";
// }
