'use strict';

function alwaysThrows() {
  return new Error('OH NOES');
}

function iterate(number) {
  console.log(number);
  return ++number;
}

Promise.resolve(iterate(1))
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(null, console.log);
