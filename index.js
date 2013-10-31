// Specify some data to use for all charts
var chart_data = {

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

// Set options per chart type
var charts = {

  'pie': {
    title: 'Pizza Pie Chart',
    is3D: true,
    legend: 'left',
  },

  'bar': {
    title: 'Bar Chart',
  },

  'column': {
    title: 'This chart is wide',
    width: 800,
  }

};


// Go!  Load the google code, and draw the charts!
google.load('visualization', '1.0', {'packages':['corechart']});
google.setOnLoadCallback(function() {

  // Build charts of various types
  ['pie', 'bar', 'column', 'line'].forEach(function(type){

    new Chart({

      'type': type,
      'container': document.getElementById('charts'),
      'data': chart_data,
      'options': charts[type],

    }).draw();

  });

});
