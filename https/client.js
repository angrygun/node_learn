var https = require('https');

var options = {
  hostname: 'www.baidu.com',
  port: 443,
  path: '/',
  method: 'GET',
  rejectUnauthorized: false
};

var request = https.request(options, function (response) {
  console.log(response.statusCode);
  console.log(response.headers);
});

request.end();