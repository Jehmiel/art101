// To experiment with anonymous functions and callbacks.
// Jehmiel Vinluan 
// November 2023

// Make an array 
a = [1, 3, 5, 7, 9]
console.log("My array is: ", a);
// Make a Named Function that does a calcuation 
function plus10(x) {
    var sum = x + 10
    return sum;
}
// Test Function 
console.log("Using the function plus10 on 3 results in: ", plus10(3));
console.log("Using the function plus10 on 6 results in: ", plus10(6));

// Using the function on the Array
var result = a.map(plus10);
console.log("Testing the function plus10 on the my array: ", result);

// Making a Anon Function and Testing it on array
console.log("Minus 1 on my Array using an Anon Function results in: ", a.map(function(x) {
    var answer = x - 1
    return answer;
}))



