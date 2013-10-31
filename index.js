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

// Specify charts
var charts = [

    {
        type: 'pie',
        options: {
            title: 'Regular Pie Chart'
        }
    },

    {
        type: 'bar',
        options: {
            title: 'Bar Chart',
        },
    },

    {
        type: 'pie',
        options: {
            title: '3D Pie Chart',
            is3D: true,
            legend: 'left',
        }
    },

    {
        type: 'column',
        options: {
            title: 'Wide column chart',
            width: 833,
        }
    },

    {
        type: 'pie',
        options: {
            title: "Donut chart",
            pieHole: 0.4
        },
    },

];

// Go!  Load the google code, and draw the charts!
google.load('visualization', '1.0', {'packages':['corechart']});
google.setOnLoadCallback(function() {

  // Build charts of various types
  charts.forEach(function(chart){

    new Chart({

      'type': chart.type,
      'container': document.getElementById('charts'),
      'data': chart_data,
      'options': chart.options,

    }).draw();

  });

});
