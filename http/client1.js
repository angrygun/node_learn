var http = require('http');

var options = {
  hostname: 'localhost',
  port: 80,
  path: '',
  method: 'POST',
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  }
};

var request = http.request(options, function (response) {
  var body = [];

  console.log(response.statusCode);
  console.log(response.headers);

  response.on('data', function (chunk) {
    body.push(chunk);
  });

  response.on('end', function () {
    body = Buffer.concat(body);
    console.log(body.toString());
  });
});

request.write('Hello World client');
request.end();

// http.get('http://localhost/', function (response) {});