"use strict"

const url = 'http://apis.is/concerts';
let concerts;
let eachShow;
let placeholder;
//let eventDate = document.querySelector("#event-date");
let eventsDiv = document.getElementById("eventsDiv");


// document.addEventListener("DOMContentLoaded", function(event){
// 	getConcerts();
// });

function getConcerts(){
fetch(url)
	.then((resp) => resp.json())
	.then(function (data){
		concerts = data.results;
		//console.log(concerts)
		//return concerts.map(function(aShow){
			//console.log(aShow);

			for(let i = 0; i < concerts.length; i++){
				//let x = concerts[i].dateOfShow;
				populateEvents(concerts[i]);
				//newDiv.appendChild(eventDate);
			}
			


		});
		//return concerts;
		// return concerts;
		//do stuff in here.
	//})
}
function populateEvents(eventObj){
	let newDiv = document.createElement("div");
	newDiv.className = "events-class";
				//let eventDate = document.querySelector("#event-date");
				let nameOfShow = document.createElement("div");
				nameOfShow.innerText = `Name of Show:  ${eventObj.eventDateName}`;

				let dateAndTime = eventObj.dateOfShow.split("T");
				let eventDate = document.createElement("div"); 
				eventDate.innerText = `Date:  ${dateAndTime[0]} at ${dateAndTime[1]}`;

				let artist = document.createElement("div");
				artist.innerText = `Performer(s): ${eventObj.userGroupName}`

				let venue = document.createElement("div");
				venue.innerText = `Venue: ${eventObj.eventHallName}`

				let artistImage = document.createElement("img");
				artistImage.setAttribute("src", eventObj.imageSource);

	document.querySelector("#a-show").appendChild(newDiv);
				newDiv.appendChild(artistImage);
				newDiv.appendChild(nameOfShow);
				newDiv.appendChild(eventDate);
				newDiv.appendChild(artist);
				newDiv.appendChild(venue);
				

}

//console.log(placeholder);
// 
getConcerts();



// document.querySelector("#quote-button").addEventListener("click", function(event){
// 	getNewQuote();
// 	quoteArea.innerText = gotData;
// });