let grade = 75;
const name = "John";

grade = 85;       // Allowed because 'grade' uses let
name = "Alex";    // Error because 'name' uses const

console.log(grade);
console.log(name);