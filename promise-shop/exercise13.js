const qp = require('q-io/http');

qp
  .read('http://localhost:7000')
  .then(function(idNumber) {
    return qp.read('http://localhost:7001/' + idNumber);
  })
  .then(function(str) {
    console.log(JSON.parse(str));
  })
  .then(null, console.error);
