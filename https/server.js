var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('/Users/majuntao/ssl/gb.local.key'),
  cert: fs.readFileSync('/Users/majuntao/ssl/gb.local.crt')
};

var server = https.createServer(options, function (request, response) {
  response.writeHead(200);
  response.end('Hello World https');
}).listen(443);

/* server.addContext('gb.local', {
  key: fs.readFileSync('/Users/majuntao/ssl/gb.local.key'),
  cert: fs.readFileSync('/Users/majuntao/ssl/gb.local.crt')
});

server.addContext('gbapi.local', {
  key: fs.readFileSync('/Users/majuntao/ssl/gbapi.local.key'),
  cert: fs.readFileSync('/Users/majuntao/ssl/gbapi.local.crt')
}); */