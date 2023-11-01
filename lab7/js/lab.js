// Writing functions that take user input and manipulate a string
// Jehmiel Vinluan
// November 2023

// Create function that takes user input and sorts it
function sortName(){
    // Make a input prompt
    var userName = window.prompt("Please Enter Name: ")
    console.log("Username: ", userName);
    // Split String to Array 
    var newArray = userName.split("");
    console.log("New Array: ", newArray);
    // Sort Array 
    var sortArray = newArray.sort();
    console.log("Sort Array: ", sortArray);
    // Turn Array into String again
    var sortedName = sortArray.join("");
    console.log("Sorted Name: ", sortedName);
    return sortedName;
}

// Output
document.writeln("This is your name sorted: ", sortName(), "</br>");