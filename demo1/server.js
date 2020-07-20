var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello World 8888');
  response.end();
}).listen(8888);


function onRequest(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello world 9999');
  response.end();
}

// http.createServer