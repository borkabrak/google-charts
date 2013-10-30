// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawCharts);

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

var default_data = {

  columns: [
    {
      type: 'string',
      name: 'Topping',
    },
    {
      type: 'number',
      name: 'Slices'
    }
  ],

  rows: [
    ['Mushrooms', 3],
    ['Onions', 1],
    ['Olives', 1], 
    ['Zucchini', 1],
    ['Pepperoni', 2]
  ]

};

var default_options = {
  'title' : 'How Much Pizza I Ate Last Night',
  'width' : 400,
  'height': 250
};
// Callback that creates and populates a data table, 
// instantiates the pie chart, passes in the data and
// draws it.
function drawCharts() {

  new Chart({

    container: document.getElementById('charts'),
    data: default_data,
    options: default_options

  }).draw();

  return;

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
