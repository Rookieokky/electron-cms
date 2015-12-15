var sql = require('mssql');
var $ = require('jquery');
var ipc = require("ipc");

var config = {
    user: 'nodeuser',
    password: 'nodeuser',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance 
    database: 'nodedb'
 
}

/*
var connection = new sql.Connection(config, function(err) {
   var request = new sql.Request(connection);
    request.stream = true; // You can set streaming differently for each request 
    request.query('select * from person'); // or request.execute(procedure); 
    request.on('recordset', function(columns) {
     // document.write('Server recordset');
    });
 
    request.on('row', function(row) {
		$('#content').append('<div>');
		$('#content').append('Name:' + row.FirstName + ' '  + row.LastName);
        $('#content').append('</div>');
    });
 
    request.on('error', function(err) {
        document.write('Server error');
		document.write(err);
    });
 
    request.on('done', function(returnValue) {
       // document.write('Server done');
    });
});
*/