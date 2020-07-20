/* daemon.js */
var child_process = require('child_process');
function spawn(mainModule) {
  var worker = child_process.spawn('node', [mainModule]);

  worker.on('exit', function (code) {
    if (code !== 0) {
      console.log('process exit without 0');
      spawn(mainModule);
    }
  })
}

spawn('child_1.js');