'use strict';

const promise = Promise.reject(new Error('IT HURTS'));

promise.catch(function(err) {
  console.error('THERE IS AN ERROR!!');
  console.error(err.message);
});
