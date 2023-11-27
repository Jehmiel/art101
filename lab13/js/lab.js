// To experiment with loops.
// Jehmiel Vinluan 
// November 2023

// Create a FizzBuzz Function
function fizzBuzz() {
    var longString = "";

    for (i=1; i <= 200; i++) {
        var str = "";
        
        if (i%15 == 0) {
            str += "FizzBuzz!";
        }
        else if (i%21 === 0) {
            str += "FizzBoom!"
        }
        else if (i%35 === 0) {
            str += "BuzzBoom!";
        }
        else if (i%105 === 0) {
            str += "FizzBuzzBoom!";
        }
        else if (i%3 === 0) {
            str += "Fizz!";
        }
        else if (i%5 === 0) {
            str += "Buzz!";
        }
        else if (i%7 === 0) {
            str += "Boom!";
        }
        else {
            str = i;
        }
        longString += str + "<br>"; 
    }
    $("#output").html(longString);
}

// Call function 
fizzBuzz();