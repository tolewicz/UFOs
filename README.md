# UFOs
Dynamic filters of the web with JavaScript

## Project Overview
Create a web site with JavaScript application that displays and filters the data about UFO encounters.
The web app.js is divided into two parts: (1) building the baseline table, (2) applying the filters to the data table based on user's input

JavaScript App uses d3 technology to "listen" the events that happen on the web site due to user's activity. In this case it is responding to clicking the button, selecting and setting up the data filter.
D3. is also used to build the data table by scanning through HTML web frame for tbody and placing the proper data.

The esthetic site of the web such as background, font color and style is handled by style.css app

## Resources

-	Technologies used: HTML5, JavaScript, D3 
- Programs: index.html,app.js, style.css


## Challenge overview

Modified UFO web site: 
1) Added more filter windows: date, city, state, country, shape
2) Replaced "Filter button" with a dynamic response. When the user keys the value into the filter, the web side immediately filters the data. If empty record is entered, the baseline table is displayed.

The dynamic response was enabled by utilizing d3 function: **"d3.select().on("change", response)"** which "listens" to the change in the status of the <input> tag, and as a response it activates function: updateFilters

