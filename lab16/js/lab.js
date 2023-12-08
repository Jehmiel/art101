// To experiment with processing JSON from an API.
// Jehmiel Vinluan 
// November 2023

// Creating Ajax click event 

// add button event listener
$("#output").click(function(){
  console.log("It freaking works");
  
	// construct ajax object
	const comic = {
	    url: "https://api.allorigins.win/get?url=https://xkcd.com/info.0.json",
	    type: "GET",
	    dataType: "json",
        success: ajaxSuccess,
        error: ajaxError
	}
  
  $.ajax(comic);
})

function ajaxSuccess(data) {
  console.log("Here's what I got:", data);
  const comicObj = JSON.parse(data.contents);
  const title = comicObj.title;
  const desc = comicObj.alt;
  const image = comicObj.img;
  $("#output").append("<h1>" + title + "</h1>");
  $("#output").append("<img src=" + image + " />");
  $("#output").append("<p>" + desc + "</p>");
}

function ajaxError(request,error){
	  console.log("Something went wrong", request, error);
}

// Credit and help from ChatGPT