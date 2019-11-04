function Place(location, landmarks, timeOfYear, notes)  {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

Place.prototype.info = function() {
  return this.location+ ', ' + this.landmarks+ ', ' + this.timeOfYear + ', ' + this.notes;
}

var chicago = new Place('Chicago', ['Wrigley Field, Wills Tower, Lake Michigan'], ['spring', 'summer'], "Dont eat too many hotdogs");

var miami = new Place('Miami', ['South Beach, Doral, Miami Beach'], ['fall', 'winter'], "Bring sun screen");

var newYork = new Place('New York', ['Brooklyn', 'Queens', 'Manhattan'], ['spring', 'summer'], "Careful with strangers");



// front end logic
$(document).ready(function() {
  var newPlace = new Place("location", "test", "test", "test");
  $("form#placesForm").submit(function(event){
    event.preventDefault();
    var locationInput = $("#locationInput").val();
    var landmarkInput = $("#landmarkInput").val();
    var timeInput = $("#timeInput").val();
    var notesInput = $("#notesInput").val();

    newPlace.location =locationInput,
    newPlace.landmarks = landmarkInput,
    newPlace.timeOfYear = timeInput,
    newPlace.notes = notesInput;

    $("#places").append(`<button id=${locationInput}> ${newPlace.location}</button>`);

    $(`button#${locationInput}`).click(function(){
      $('#info').append('<li>' + newPlace.info() + '</li>');
    });
  });

  $("button#chicago").click(function() {
    $("#chicagoInfo").text(chicago.info());
  });
  $("button#miami").click(function() {
    $("#miamiInfo").text(miami.info());
  });
  $("button#newYork").click(function() {
    $("#newYorkInfo").text(newYork.info());
    $('#info').append('<li>Testing!</li>');
  });
});
