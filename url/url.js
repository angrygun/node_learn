const url = require('url');

// console.log(url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash'));

const http = require('http');

/* http.createServer(function (request, response) {
  let tmp = request.url;
  console.log(tmp);
  console.log(url.parse(tmp, true, true));
}).listen(80); */

console.log(url.format({
  protocol: 'https',
  host: 'www.example.com',
  pathname: '/p/a/t/h',
  search: 'query=string'
}));


console.log(url.resolve('http://www.example.com/foo/bar', '../baz'));