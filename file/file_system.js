import { fstat } from "fs";

/* 
NodeJS通过fs内置模块提供对文件的操作。fs模块提供的API基本上可以分为以下三类：

1、文件属性读写。
其中常用的有fs.stat、fs.chmod、fs.chown等等。

2、文件内容读写。
其中常用的有fs.readFile、fs.readdir、fs.writeFile、fs.mkdir等等。

3、底层文件操作。
其中常用的有fs.open、fs.read、fs.write、fs.close等等。
*/
var fs = require('fs');

// 异步IO
fs.readFile(pathname, function (err, data) {
  if (err) {
    // Deal with error
  } else {
    // Deal with data
  }
});

// 同步
try {
  var data = fs.readFileSync(pathname);
  // Deal with data
} catch (err) {
  // Deal with error
}