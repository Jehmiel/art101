// To experiment with DOM manipulation
// Jehmiel Vinluan 
// November 2023

// Make a function that creates text 
function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 100;
    // Makes randon length of text 
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
}

// event listener for button click
$("#make-convo").click(function(){
// get new fake dialogue with dom element 
    const newText = generateRandomText();
// Add a new div to our output div with append
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});