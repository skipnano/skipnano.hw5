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
			$("#cityText").html("");

			if ((currentCity === "New York".toLowerCase() ) || (currentCity === "NYC".toLowerCase() ) || (currentCity === "New York City".toLowerCase() )) {
				$("body").addClass("nyc");
				$("#cityText").html("Is'nt " + currentCity + " nice!");
			} else if ((currentCity === "San Francisco".toLowerCase() ) || (currentCity === "SF".toLowerCase() ) || (currentCity === "Bay Area".toLowerCase() )) {
				$("body").addClass("sf");
				$("#cityText").html("Is'nt " + currentCity + " nice!");
			} else if ((currentCity === "Los Angeles".toLowerCase() ) || (currentCity === "LA".toLowerCase() ) || (currentCity === "LAX".toLowerCase() )) {
				$("body").addClass("la");
				$("#cityText").html("Is'nt " + currentCity + " nice!");
			} else if ((currentCity === "Austin".toLowerCase() ) || (currentCity === "ATX".toLowerCase() )) {
				$("body").addClass("austin");
				$("#cityText").html("Is'nt " + currentCity + " nice!");
			} else if ((currentCity === "Sydney".toLowerCase() ) || (currentCity === "SYD".toLowerCase() )) {
				$("body").addClass("sydney");
				$("#cityText").html("Is'nt " + currentCity + " nice!");
			} else {
				alert("Not a valid city");
			};

			$("#city-type").val("");
		};

//BEGIN TEMP CONVERTER SCRIPT INTEGRATION

		$("#submit").click(convertTemp);

		function convertTemp(){
			console.log($("#celsius").val());
			// gets the string value in the input box
			var stringOne = $("#celsius").val();
			// converts the string value into a number value
			var numOne = parseFloat(stringOne);
				console.log("celsius num", numOne);
			numOne = numOne * 1.8 + 32;
				console.log("fahrenheit", numOne);
				numOne = numOne.toFixed(1);
			// prints the converted Fahrenheit value in the html in id="fahrenheit" span
			$("#fahrenheit").val(numOne)

			if (numOne <= 59) {
				// on click, if the fahrenheit temp is is less than or equal to 59 the background will change to a rainy day 
				//$("#container").css('background', 'url("images/rainyday.jpeg")');
				$("#celsius, #fahrenheit").css('border', '5px solid #1E90FF');
			} else if (numOne >= 60) {
				// on click, if the fahrenheit temp is greater than or equal to 60 the background will change to a sunny day
				//$("#container").css('background', 'url("images/sunnycity.jpeg")');
				$("#celsius, #fahrenheit").css('border', '5px solid #D40');
			} else {
				// on click, if the value is not a number an alert will print
				alert("Are you sure you entered a temperature?");
			}

		};

		$("#reset").click(clearFields);

		function clearFields(){
			$("#celsius").val(0);
			$("#fahrenheit").val(32);
			
			$("#celsius, #fahrenheit").css('border', '4px solid #ffe500');
			console.log("fields reset");
		};


	});





