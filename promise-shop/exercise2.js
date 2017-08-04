'use strict';

const promise = new Promise(function(fulfill, reject) {
  setTimeout(fulfill, 300, 'FULFILLED!');
});

promise.then(console.log);
