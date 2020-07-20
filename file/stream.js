var fs = require('fs');
// 只读文件流，改造前
var rs = fs.createReadStream(pathname);

rs.on('data', function (chunk) {
  doSomething(chunk);
});

rs.on('end', function () {
  cleanUp();
});

// 上边的代码中data事件会源源不断地被触发，不管doSomething函数是否处理得过来。代码可以继续做如下改造，以解决这个问题。
rs.on('data', function (chunk) {
  rs.pause();
  doSomething(chunk, function () {
    rs.resume();
  });
});

rs.on('end', function () {
  cleanUp();
});

// 只写文件流, 改造前
var ws = fs.createWriteStream(dst);

rs.on('data', function (chunk) {
  ws.write(chunk);
});

rs.on('end', function () {
  ws.end();
});


// doSomething换成了往只写数据流里写入数据后
// 以上代码看起来就像是一个文件拷贝程序了
// 但是以上代码存在上边提到的问题
// 如果写入速度跟不上读取速度的话，只写数据流内部的缓存会爆仓。
// 我们可以根据.write方法的返回值来判断传入的数据是写入目标了，还是临时放在了缓存了，
// 并根据drain事件来判断什么时候只写数据流已经将缓存中的数据写入目标，可以传入下一个待写数据了。
rs.on('data', function (chunk) {
  if (ws.write(chunk) === false) {
    rs.pause();
  }
});

rs.on('end', function () {
  ws.end();
});

ws.on('drain', function () {
  rs.resume();
});


