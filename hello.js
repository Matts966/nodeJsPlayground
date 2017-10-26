var util = require('util');
var http = require('http');
var server = http.createServer(
    function (request, response) {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Hello World!!');
        response.end();
    }
).listen(3000);
util.log('Server running at http://localhost:3000/');
