// step 1: create empty data array
var  dataArray= [];

// step 2: create and push headers
var headers = ['State','Per capita GDP'];
dataArray.push(headers);

// step 3: to sort the data by per capita gdp

json.sort(function(a,b){
  return b.per_capita_gdp - a.per_capita_gdp;
});


// step 4: push data arrays into larger dataArray

json.forEach(function(d){
 dataArray.push([d.state,d.per_capita_gdp]);

})

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable(dataArray);

  var options = {
      chartArea: {
        top: 20,
        left: 150,
        right: 0,
        bottom: 50
      },
      colors: ['steelblue'],
      fontsize: 12
  };

  var chart = new google.visualization.BarChart(document.getElementById('chart'));

  chart.draw(data, options);
}
