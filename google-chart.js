// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {'packages':['corechart']});

var Chart = function(config){
  var my = this;

  // Defaults: type, container, data, options
  my.type = config.type || 'bar';
  my.container = config.container || document.getElementById('chart');
  my.data = set_data(config.data);
  my.options = config.options;

  // instance methods
  my.draw = function(){
    new google.visualization[ capitalize(my.type) + "Chart" ](
        my.container.appendChild( document.createElement("div"))
    ).draw(my.data, my.options);
  };


  // Private methods..
  
  function set_data(data){

    var dataTable = new google.visualization.DataTable();

    data.columns.forEach(function(c){
      dataTable.addColumn( c.type, c.name );
    });

    dataTable.addRows(data.rows);

    return dataTable;

  };

  function capitalize(s){
    return s[0].toUpperCase() + s.slice(1);
  };

};
