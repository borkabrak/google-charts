/* * * * * * * * * * *
 * Chart():
 *  
 *  Make and display data charts using the (Google Chart API)[1].
 *
 *  [1]: https://google-developers.appspot.com/chart/interactive/docs/reference
 *
 *
 *  To instantiate:
 *
 *    chart = new Chart({
 *
 *      data (REQUIRED): 
 *        A simple hash with just the properties 'rows' and 'columns'.
 *        This is automatically transformed into a Google DataTable under the
 *        hood.
 *
 *        rows:
 *          Array of row arrays. (2D Array of data points)
 *
 *        columns:
 *          Array of:
 *            {
 *              type: "string", "number", etc..
 *              name: Column name
 *            }
 *
 *      type (default 'bar'): 
 *        chart type - 'pie', 'bar', 'line', etc.  `google.visualization`
 *        should have a corresponding `<type>Chart` method.
 *
 *      container (default element with id 'chart'): 
 *        The parent element for the chart <div>.
 *
 *      options (optional): 
 *        Simple hash of options suitable for Google's draw() method.
 *
 *      classname (default 'chart'):
 *        The element that actually contains the chart will have this class.
 *        (This will be a direct child element of 'container'.)
 *
 *    })
 *
 *
 *  To draw:
 *
 *    chart.draw();
 *
 *
 *  REQUIRES:
 *
 *    google.load('visualization', '1.0', {'packages':['corechart']});
 *
 * * * * * * * * * **/

var Chart = function(config){
  var my = this;

  var default_options = {
    'title' : 'Chart Title',
    'width' : 400,
    'height': 250
  };

  my.type = config.type || 'bar';
  my.container = config.container || document.getElementById('chart');
  my.data = dataTable(config.data);
  my.options = merge(default_options, config.options);
  my.classname = config.classname || 'chart';

  my.draw = function(){
   
    chart_element = document.createElement("div");
    chart_element.setAttribute("class", my.classname);
    new google.visualization[ capitalize(my.type) + "Chart" ](
        my.container.appendChild( chart_element )
    ).draw(my.data, my.options);
  };


  // -------------------- Private Functions -------------------- //
  
  function dataTable(data){
    // Convert input data to a Google DataTable.

    var dataTable = new google.visualization.DataTable();

    data.columns.forEach(function(c){
      dataTable.addColumn( c.type, c.name );
    });

    dataTable.addRows(data.rows);

    return dataTable;

  };

  function capitalize(s){
    // Uppercase first letter of input
    return s[0].toUpperCase() + s.slice(1).toLowerCase();
  };

  function merge(obj1, obj2){
    // Return an object with the union of properties on obj1 and obj2, with
    // obj2's properties taking priority in cases of conflict.

    var result = {};
    for (var j in obj1){
      result[j] = obj1[j];
    }

    for (var i in obj2) {
      result[i] = obj2[i];
    }

    return result;

  };

};
