// 递归算法
// 计算N的阶乘（N!）。可以看到，当N大于1时，问题简化为计算N乘以N-1的阶乘。当N等于1时，问题达到最小规模，不需要再简化，因此直接返回1
// 陷阱： 使用递归算法编写的代码虽然简洁，但由于每递归一次就产生一次函数调用，在需要优先考虑性能时，需要把递归算法转换为循环算法，以减少函数调用次数。
function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));


// 同步遍历
var fs = require('fs');
var path = require('path');
function travel(dir, callback) {
  fs.readdirSync(dir).forEach(function (file) {
    var pathname = path.join(dir, file);

    if (fs.statSync(pathname).isDirectory()) {
      travel(pathname, callback);
    } else {
      callback(pathname);
    }
  });
}

/* travel('/Users/majuntao/learn/node', function (pathname) {
  console.log(pathname);
}); */

// 异步遍历
function travelAsync(dir, callback, finish) {
  fs.readdir(dir, function (err, files) {
    (function next(i) {
      if (i < files.length) {
        var pathname = path.join(dir, files[i]);

        fs.stat(pathname, function (err, stats) {
          if (stats.isDirectory()) {
            travelAsync(pathname, callback, function () {
              next(i + 1);
            });
          } else {
          
            callback(pathname, function () {
              next(i + 1);
            });
          }
        })
      } else {
        finish && finish();
      }  
    }(0));
  });
}

travelAsync('/Users/pedro/learn/node', function (pathname, callback) {
  console.log('pathname=====>', pathname);
  callback();
});