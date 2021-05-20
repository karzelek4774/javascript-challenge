// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo sightings from data.js
console.log(tableData);

// Use D3 to populate the HTML table with ufo sightings
 tableData.forEach(function(ufosightings) {
   console.log(ufosightings);
   var row = tbody.append("tr");
   Object.entries(ufosightings).forEach(function([key, value]) {
     console.log(key, value);
     var cell = row.append("td");
     cell.text(value);
   });
 });




// Create a filter for datetime

 // Select the button
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", runEnter);

// Complete the event handler function for the button
function runEnter() {

  tbody.html("")

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filterData = tableData;

  if (inputValue) {
  filterData = filterData.filter(row => row.datetime == inputValue)
  }

  if (filterData) {
  filterData.forEach(function(ufosightings) {
    console.log(ufosightings);
    var row = tbody.append("tr");
    Object.entries(ufosightings).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });
  }
}