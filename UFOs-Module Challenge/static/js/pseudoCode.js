// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// Keep track of all filters
var filters = {}; //e. daytime: ##/###/##, city:##, this will be supplied 

// This function will replace your handleClick function
function updateFilters() {
  changeElement = d3.select(this)
  elementValue = changeElement.property("value")
  elementKey = changeElement.attr("id")
  console.log("filtering happening")
  filters[elementKey] = elementValue
  console.log(filters)}

  
d3.select("#datetime").on("change",updateFilters)
d3.select("#city").on("change",updateFilters)
d3.select("#state").on("change",updateFilters)
d3.select("#country").on("change",updateFilters)
d3.select("#shape").on("change",updateFilters)





//here we auto populate filters

// Save the element, value, and id of the filter that was changed

  

  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object


  // Call function to apply all filters and rebuild the table
  filterTable();


function filterTable() {

  Object.entries(filters).forEach((filter_name) => {  
    
    if (filter_name) {
      filteredData = filteredData.filter(row => row.filter_name === filter_name); 
      
    };
  })
  buildTable(filteredData);
}

    //objext.entries grabs key and values
    


  // Set the filteredData to the tableData

  // Loop through all of the filters and keep any data that
  // matches the filter values


  // Finally, rebuild the table using the filtered Data


// Attach an event to listen for changes to each filter
// Hint: You'll need to select the event and what it is listening for within each set of parenthesis
d3.selectAll().on();

// Build the table when the page loads
buildTable(tableData);
