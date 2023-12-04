// To experiment with jQuery and AJAX.
// Jehmiel Vinluan
// November 2023

// Click Event 
$("#output").click(function(){
    $.ajax({
        url: "https://yesno.wtf/api",
        type: "GET",
    })

// Successon extracting data from API
    .done(function(data){
        console.log(data);
        var printData = "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
        $("#output").append(data.answer);
        $("#output").append(data.forced);
        $("#output").append("<img src=" + data.image + ">");
    })
})
