let net = require('net');

let options = {
  port: 8081,
  hostname: 'localhost'
};

let client = net.connect(options, function () {
  client.write([
    'GET / HTTP/1.1',
    'User-Agent: curl/7.26.0',
    'Host: www.baidu.com',
    'Accept: */*',
    '',
    ''
  ].join('\n'));
});

client.on('data', function (data) {
  console.log(data.toString());
  client.end();
});