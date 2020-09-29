// THIS CODE BUILDS A TABLE WITH DATA AND APPLIES FILTER BASED ON USER'S CHOICE
// 1) CREATES BASELINE TABLE USING DATA FROM data.js AND D3 TO SEARCH FOR tbody TAG IN HTML
// 2) USES D3 TO ENABLE FUNCTION OF 'LISTENING' OF THE EVENTS - USER'S IMPUT INTO FILTER BOX
// 3) UPON ENTRY, UPDATE FILTER F-N IS ACTIVATED
// 3.1) FILTER OBJET "filters" IS UPDATED WITH INDEX:VALUE BASED ON LISTENING FEEDBACK
// 3.2) FILTER (INTEX/VALUE) IS PASSED TO FILTER THE BASELINE DATA 
// 3.3) NEW DATA IS USED TO CREATE NEW TABLE
// 4) IF THERE IS NO ENTRY, THEN ORYGINAL TABLE IS RETURNED



// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row and append a row to the table body
  data.forEach((dataRow) => {   
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// DECLARE object filters CONTAINING INDEX AND VALUE OF FILTER
var filters = {}; //e.g daytime: 01/01/99, city:bielawa, etc.

//BUILDING BASELINE TABLE
buildTable(tableData)

//UPDATING FILTERS 
function updateFilters() {
    changeElement = d3.select(this)
    elementValue = changeElement.property("value")
    elementKey = changeElement.attr("id")
    console.log("filtering happening") // INFO IN CONSOLE TO VERIFY IT WORKS
    filters[elementKey] = elementValue //UPDATING filters OBJECT

    //ITERATING AND SUPPLYING FILTER KEY AND VALUES TO filterTable F-N
    Object.keys(filters).forEach(function (item) {
        console.log(item); // key DISPLAYED IN CONSOLE TO CHECK IF ALL IS OK
        console.log(filters[item]); // value DISPLAYED IN CONSOLE TO CHECK IF ALL IS OK
        
    return keyFilter = item, valueFilter = filters[item]});
    
    filterTable(keyFilter,valueFilter)
    };

//IMPLEMENT FILTERS AND BUILD A NEW TABLE
function filterTable() {
    console.log(filters)
    percolateData = tableData
    
    if(valueFilter){percolateData = percolateData.filter(row => row[keyFilter] === valueFilter)}
    
    else{
        percolateData = tableData //IF NO ENTRY, RETURN TO ORYGINAL TABLE AND RESET THE FILTERS
        filters={"":""}
    }

    console.log(percolateData) //DISPLAYED IN CONSOLE TO CHECK IF ALL IS OK 
    buildTable(percolateData) //BUILDING TABLE WITH FILTERED DATA
    };

//LISTENING THE EVENT(BOX ENTRY), W LOCATION OF THE BOX AND ACTIVATING updateFilters F-N   
d3.select("#datetime").on("change",updateFilters)
d3.select("#city").on("change",updateFilters)
d3.select("#state").on("change",updateFilters)
d3.select("#country").on("change",updateFilters)
d3.select("#shape").on("change",updateFilters)