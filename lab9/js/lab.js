// To experiment with jQuery
// Jehmiel Vinluan 
// November 2023

// Make button for challenge 
$(".challenge").append("<button class='button-challenge'>Change</button>");
// Make Change for challenge 
$(".button-challenge").click(function(){
    $(".challenge").toggleClass("special");
}); 

// Make button for problems 
$(".problems").append("<button class='button-problems'>Change</button>");
// Make Change for problems 
$(".button-problems").click(function(){
    $(".problems").toggleClass("special");
});

// Make button for results 
$(".results").append("<button class='button-results'>Change</button>");
// Make Change for results
$(".button-results").click(function(){
    $(".results").toggleClass("special");
})