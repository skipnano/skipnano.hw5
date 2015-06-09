/*
PSUEDO CODE

Load all functions once all DOM elements have loaded
prevent the form from submiting with .prventDefault()

Listen for click on #submit-btn

function getCity
	get the string value that the user input in #city-type, 
	and store in var city
	Update background image of page by changing the css background image
	of the body in if/else if/else confotionals
		If user inputs "New York" or "New York City" or "NYC" 
		change page background to new york city image (same concept 
		for all other cities)
	Reset the #submit-btn after it is clicked
	*/

	$(document).ready(function() {
		console.log("scripts loaded");

		$("form").submit(function (event) {
			event.preventDefault ();
			getCity();
			console.log ("form submit prevented");
		});

		//$("#submit-btn").click(getCity);

		function getCity() {
			var currentCity = $("#city-type").val().toLowerCase();
			console.log(currentCity);
			console.log("submit button clicked");
			$("body").attr("class", "");

			if ((currentCity === "New York".toLowerCase() ) || (currentCity === "NYC".toLowerCase() ) || (currentCity === "New York City".toLowerCase() )) {
				$("body").addClass("nyc");
			} else if ((currentCity === "San Francisco".toLowerCase() ) || (currentCity === "SF".toLowerCase() ) || (currentCity === "Bay Area".toLowerCase() )) {
				$("body").addClass("sf");
			} else if ((currentCity === "Los Angeles".toLowerCase() ) || (currentCity === "LA".toLowerCase() ) || (currentCity === "LAX".toLowerCase() )) {
				$("body").addClass("la");
			} else if ((currentCity === "Austin".toLowerCase() ) || (currentCity === "ATX".toLowerCase() )) {
				$("body").addClass("austin");
			} else if ((currentCity === "Sydney".toLowerCase() ) || (currentCity === "SYD".toLowerCase() )) {
				$("body").addClass("sydney");
			} else {
				alert("Not a valid city");
			};

			$("#city-type").val("");
		};

	});





