let http = require('http');
let zlib = require('zlib');

let options = {
  hostname: 'localhost',
  port: 80,
  path: '/',
  method: 'GET',
  headers: {
    'Accept-Encoding': 'gzip, defalte'
  }
};

http.request(options, function (response) {
  let body = [];

  response.on('data', function (chunk) {
    body.push(chunk);
  });

  response.on('end', function () {
    body = Buffer.concat(body);

    if (response.headers['content-encoding'] === 'gzip') {
      zlib.gunzip(body, function (err, data) {
        console.log('zlib', data.toString());
      });
    } else {
      console.log(data.toString());
    }
  });
}).end();
