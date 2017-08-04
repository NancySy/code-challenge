'use strict';

function all(promise1, promise2) {
  return new Promise(function(fulfill, reject) {
    const counter = 0;
    const out = [];

    promise1.then(function(value) {
      out[0] = value;
      counter++;

      if (counter >= 2) {
        fulfill(out);
      }
    });

    promise2.then(function(value) {
      out[1] = value;
      counter++;

      if (counter >= 2) {
        fulfill(out);
      }
    });
  });
}

all(getPromise1(), getPromise2()).then(console.log);
