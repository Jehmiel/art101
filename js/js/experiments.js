console.log("Hi")
$("#my-button").click(function(){
    console.log("button clicked!");
    var name = $("input").val();
    console.log("Prompt returned: " + name);
    newText = "Hello " + name + "!";
    $("#title").html(newText);

});