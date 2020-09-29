// THIS CODE BUILDS A TABLE WITH DATA AND APPLIES FILTER BASED ON USER'S CHOICE
// D3. IS USED FOR THE FOLLOWING:
// 1) TO SCAN THE html CODE TO LOOK FOR: TAGS SUCH AS <tbody>, id (#datetime), SELECT AND EXTRACT VALUESS  
// 2) TO ENABLE FUNCTION OF 'LISTENING' OF THE USER'S IMPUT SUCH AS MOUSE CLICK

//import the data from data.js
const tableData = data;

//References the HTML table using graphics library D3 
//<tbody> is a HTML tag to partition the body part of the article/table body
// .select("tbody"), we will search tpody tag in HTML
var tbody = d3.select("tbody"); 

function buildTable(data){
    tbody.html(""); 
    
    //we creating an empty table in html. we will only modify the BODY, NOT HEAD 

    data.forEach((dataRow) => { //we loop through "data" array row by row, dataRow is just name of iterative variable
        let row = tbody.append("tr"); //will find <tbody> in html, and append  <tr> - table row 
        Object.values(dataRow).forEach((val) => {  //iterate on each field of dataRow
            let cell = row.append("td"); //put data cell into table of html
            cell.text(val); //extracting only value from key:value table of UFO objects, in cell there will put only values 
        });
    });
};

// how it works, we type the date in the web, the date is stored in html nest to #datetime, the handleKlick scans
//through the HTML and grabs the date,
//then it performs filter data operation with if statement

function handleKlick(){ //function will handle actions after klicking the button
    let date = d3.select("#datetime").property("value"); 
    
    //variable date = select 1st element in HTML document that has id == "#datetime",
    //and grab the information (the value) that is nested in the same block as #datetime
    //that value is assigned to variable "date"

    let filteredData = tableData; //default filter i.e. non-filtered table, if no condition eg. date is imput


    //creating filter that will retur filteredData variable

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date); 
        // .filter(cond) will filter based on condition 
        // the cond is set by the output of arrow fn. 
        // the arrow f-n takes row and checks if row from datetime === date provided
    };

    //the data will be returned as table, so we need to create a table, with filteredData

    buildTable(filteredData);

};

//we enable f-n that is listening the event: click button
d3.selectAll("#filter-btn").on("click", handleKlick); 

//we build a unfiltered table when the web page loads
buildTable(tableData); 