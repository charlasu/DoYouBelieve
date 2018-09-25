// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop Through "data" file 
data.forEach(function(ufoSighting) {
	// console.log(ufoSighting);
});

// // Use d3 to append one table row for each ufoSighting object
data.forEach(function(ufoSighting) {
	// console.log(ufoSighting);
	var row = tbody.append("tr");
});

// Use `Object.entries` to console.log each sighting value
data.forEach(function(ufoSighting) {
	// console.log(ufoSighting);
	var row = tbody.append("tr");

Object.entries(ufoSighting).forEach(function([key, value]) {
	// console.log(key, value);
	});
});

// Have d3 append 1 cell per sighting values (date, city, country, shape, duration, comments)
data.forEach(function(ufoSighting) {
	// console.log(ufoSighting);
	var row = tbody.append("tr");

Object.entries(ufoSighting).forEach(function([key, value]) {
	// console.log(key, value);

// Append a cell to the row for each value in the ufo object
var cell = tbody.append("td");
});
});

// Have d3 to update each cell's text with sighting values (date, city, country, shape, duration, comments)
data.forEach(function(ufoSighting) {
	// console.log(ufoSighting);
	var row = tbody.append("tr");
	Object.entries(ufoSighting).forEach(function([key, value]) {
		// console.log(key, value);
//     // Append a cell to the row for each value in the ufoSighting object
var cell = tbody.append("td");
cell.text(value);
});
});

/ from Bloodtype example

// Select the submit button
var submit = d3.select("#filter-btn")
// upon Submit, it should log the input value
submit.on('submit', (event) => {
	console.log(input_data.value);
	//Select the input element and get the raw HTML node
	// once we have that data, then the filtering can be inside of the function
	var inputElement = d3.select("#datetime");
	// Prevent the page from refreshing
	d3.event.preventDefault();
	//var input = data.select(".input");
	function handleChange(event) {
		// Get the value property of the input element
		var inputValue = inputElement.property("value");
		// grab the value of the input field
		var inputText = d3.event.target.value;
			console.log(inputValue);
			console.log(tableData);
		var filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === inputValue);
		console.log(filteredData);
	}


//based on a codepen example
// (function(filterFunction) {
// 	"use strict";

// 	var formFieldFilter = (function(Arr) {
// 		var submit = d3.select("#filter-btn")
// 		var input;

// 		function onInputEvent(event) {
// 			input = event.target;
// 			var tables = document.getElementsByClassName(input.getAttribute("#datetime"));
// 			d3.event.preventDefault();
// 			Arr.forEach.call(tables, function(table) {
// 				Arr.forEach.call(table.tBodies, function(tbody) {
// 					Arr.forEach.call(tbody.rows, filter);
// 				});
// 			});
// 		}

// 		function filter(row) {
// 			var text = row.textContent(), val = input.value();
// 			row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
// 		}

// 		return {
// 			init: function() {
// 				var inputs = document.getElementsByClassName("#filter-btn");
// 				Arr.forEach.call(inputs, function(input) {
// 					input.oninput = onInputEvent;
// 				});
// 			}
// 		};
// 	})(Array.prototype);

// 	document.addEventListener("click", function() {
// 		if (document.readyState === "submit") {
// 			formFieldFilter.init();
// 		}
// 	});

// })(document);


