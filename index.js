// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawCharts);

String.prototype.capitalize = function(){
  return this[0].toUpperCase() + this.slice(1);
};

var merge = function(obj1, obj2){
  // Return an object with all properties of obj1 and obj2, with obj2 taking
  // priority.

  var result = {}
  for (var j in obj1){
    result[j] = obj1[j];
  }

  for (var i in obj2) {
    result[i] = obj2[i];
  }

  return result;

}

// Callback that creates and populates a data table, 
// instantiates the pie chart, passes in the data and
// draws it.
function drawCharts() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
      ['Mushrooms', 3],
      ['Onions', 1],
      ['Olives', 1], 
      ['Zucchini', 1],
      ['Pepperoni', 2]
      ]);

  // Set chart options
  var options = {
    'title' : 'How Much Pizza I Ate Last Night',
    'width' : 400,
    'height': 250
  };

  // Add to this object any additional chart-type-specific data or options
  var charts = {

    'pie': {
      options: { 
        title: 'Pizza Pie Chart',
        is3D: true,
        legend: 'left',
      }
    },

  };

  // Build charts
  ['pie', 'bar', 'column', 'line'].forEach(function(type){

    // handle nonexistent keys in `charts`
    charts[type] = merge({}, charts[type]);

    // label
    document.getElementById("charts")
      .appendChild(document.createElement("h2"))
      .innerHTML = type.capitalize() + " Chart";
    // draw
    new google.visualization[type.capitalize() + "Chart"](
      document.getElementById("charts")
      .appendChild(document.createElement("div"))
    ).draw(merge(data, charts[type].data), merge(options, charts[type].options));

  });
}
