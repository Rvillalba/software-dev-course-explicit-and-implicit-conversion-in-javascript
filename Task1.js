// This code works because the implicit type conversion with the - turns "5" into a number
let result = "5" - 2;
console.log("The result is: " + result);

// This code was returning valid because the value was a string, which made the value truthy. Removing the quotations changed it from a string to boolean.
let isValid = Boolean(false);
if (isValid) {
    console.log("This is valid!");
}

//This code was returning 255 because the value of age was a string. Implicit type conversion will not happen with the +, so Number () was required to cause an explicit type conversion.
let age = "25";
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge);