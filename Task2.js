let cookies = "10"
let people = 2
let math = (cookies / people);
console.log("The number of cookies per person is: " + math);
console.log("Type for variable cookies before implicit conversion is " + typeof cookies)

let value = null
console.log("Before explicit conversion result: " + value)
console.log("Type is " + typeof value)

let valueConvert = null;
let toNumber = Number(valueConvert)
console.log("After conversion result is: " + toNumber)
console.log("Type is " + typeof Number(valueConvert))