// Equality check == and comparisons > < >= <= work differently.

// Comparison conver null to a number, treating it as 0.

// console.log("2" > 1); //true
// console.log("02" > 1); //true

// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true


console.log(undefined >= 0); //false

// === checks both the value and type



