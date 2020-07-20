var child_process = require('child_process');
var util = require('util');

function copy(source, target, callback) {
  child_process.exec(
    util.format('cp -r %s/* %s', source, target),
    callback
  )
}

copy('a', 'b', function (err) {
  // some code
})

// command line argv
var process = require('process');
function main (argv) {
  // some code
}

main(process.argv.slice(2));


// quit process
try {
  // some code
} catch (err) {
  // some code

  process.exit(1);
}

// stdin stdout stderr
function log() {
  process.stdout.write(
    util.format.apply(util, arguments) + '\n'
  );
}

// down right
var http = require('http');

http.createServer({}).listen(8081, function () {
  var env = process.env,
  uid = parseInt(env['SUDO_UID'] || process.getuid(), 10),
  gid = parseInt(env['SUDO_GID'] || process.getgid(), 10);

  process.setgid(gid);
  process.setuid(uid);
});

// create child_process
var child = child_process.spawn('node', ['xxx.js']);

child.stdout.on('data', function (data) {
  console.log('stdout:' + data);
});

child.stderr.on('data', function (data) {
  console.log('stderr' + data);
});

child.on('close', function (code) {
  console.log('child process exited with code ' + code);
});

// commication in processes
/* parent.js */
var child_1 = child_process.spawn('node', ['child_1.js']);

child.kill('SIGTERM');



// IPC
/* parent.js */
var child_2 = child_process.spawn('node', ['child_2.js'], {
  stdio: [0, 1, 2, 'ipc']
});

child_2.on('message', function (msg) {
  console.log(msg);
});

child_2.send({hello: 'hello'});
