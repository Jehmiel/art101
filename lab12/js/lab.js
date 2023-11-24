// To create a function that depends on conditionals.
// Jehmiel Vinluan 
// November 2023

// Make event listener for button
function sortingHat(str) {
    var length = str.length;
    var mod = length %4;
    if (mod == 0) {
        return "House Gryffindor";
    }
    else if (mod == 1) {
        return "House Ravenclaw";
    }
    else if (mod == 2) {
        return "House Hufflepuff";
    }
    else if (mod == 3) {
        return "House Slytherin";
    }
}

// Make event listener for button 
$("#button").click(function(){
  var name = $("#input").val()
  var house = sortingHat(name);
  $("#output").html("<h1>" + house + "</h1>");
})
