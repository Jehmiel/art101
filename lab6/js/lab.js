// index.js - Experiment with JavaScript arrays and objects.
// Author: Jehmiel Vinluan
// Date: 27 October 2023

// Array for myTransport
var myTransport = ["legs", " bus", " bike", " airplane", " car"]

// Object for myMainRide 
var myMainRide = {
  make: "Honda",
  model: "HR-V",
  color: "gray",
  year: "2024",
  age: function() {
      return 2023 - this.year;
  }
}
// Output
document.writeln("Some of the types of transportation I use are: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");







// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
