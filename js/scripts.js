// location, landmarks, time of year, notes
// Business Logic
// function PlaceDisplay(){
// this.places = [],
// this.city = 0
// }
//
// PlaceDisplay.prototype.showInfo = function(info){
//   place.
// }

var places = [];

function Place(location, landmarks, timeOfYear, notes)  {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

Place.prototype.info = function() {
  return this.location+ ', ' + this.landmarks+ ', ' + this.timeOfYear + ', ' + this.notes;
}

// function printObject(Object) {
//   Object.keys().forEach(function(){
//
//   })
//
//
// }

var chicago = new Place('Chicago', ['Wrigley Field, Wills Tower, Lake Michigan'], ['spring', 'summer'], "Dont eat too many hotdogs");

var miami = new Place('Miami', ['South Beach, Doral, Miami Beach'], ['fall', 'winter'], "Bring sun screen");

var newYork = new Place('New York', ['Brooklyn', 'Queens', 'Manhattan'], ['spring', 'summer'], "Careful with strangers");



// front end logic
$(document).ready(function() {
  var locationInput;
  var newId;
  var newPlace = new Place("location", "test", "test", "test");
  $("form#placesForm").submit(function(event){
    event.preventDefault();
    console.log("Hello!");
    locationInput = $("#locationInput").val();
    var landmarkInput = $("#landmarkInput").val();
    var timeInput = $("#timeInput").val();
    var notesInput = $("#notesInput").val();

    newPlace.location =locationInput,
    newPlace.landmarks = landmarkInput,
    newPlace.timeOfYear = timeInput,
    newPlace.notes = notesInput;

    newId = locationInput;
    $("#places").append(`<button id=${newId}> ${newPlace.location}</button>`);

    console.log("New place inside: ", newPlace, typeof(newPlace));
  });
  console.log("New place outside: ", newPlace, typeof(newPlace));

  $("button#chicago").click(function() {
    $("#chicagoInfo").text(chicago.info());
  });
  $("button#miami").click(function() {
    $("#miamiInfo").text(miami.info());
  });
  $("button#newYork").click( function() {alert("new york yo")});
  $(`button#${newId}`).click(function(){
    $('#info').append('<li>' + "test" + '</li>');

  });

  // (function(){
  //   $('#info').append('<li>' + newPlace.info() + '</li>');
  // });


});
