/* child.js */
var process = require('process');
process.on('SIGTERM', function () {
  cleanUp();

  process.exit(0);
});

// process.exit(1);