'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


// eslint-disable-next-line import/prefer-default-export
var helloEndpointRoute = exports.helloEndpointRoute = function helloEndpointRoute(num) {
  return '/ajax/hello/' + (num || ':num');
};