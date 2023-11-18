// To experiment with JS events.
// Jehmiel Vinluan
// November 2023

function sortName(){
    // Make a input prompt
    var name = $("#input").val();
    console.log("Username: ", name);
    // Split String to Array 
    var newArray = name.split("");
    console.log("New Array: ", newArray);
    // Sort Array 
    var sortArray = newArray.sort();
    console.log("Sort Array: ", sortArray);
    // Turn Array into String again
    var sortedName = sortArray.join("");
    console.log("Sorted Name: ", sortedName);
    return sortedName;
}


// Make event listener for your button
$("#submit").click(function(){
    const userName = $("#input").val();
    userNameSorted = sortName(name);
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});