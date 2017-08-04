const qp = require('q-io/http');

qp
  .read('http://localhost:1337')
  .then(function(str) {
    console.log(JSON.parse(str));
  })
  .then(null, console.error);
