'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

var _config = require('../shared/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var socket = (0, _socket2.default)(window.location.host);

/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
var setUpSocket = function setUpSocket(store) {
  socket.on(_config.IO_CONNECT, function () {
    console.log('[socket io] Connected.');
    socket.emit(_config.IO_CLIENT_JOIN_ROOM, 'hello-1234');
    socket.emit(_config.IO_CLIENT_HELLO, 'Hello!');
  });

  socket.on(_config.IO_SERVER_HELLO, function (serverMessage) {
    console.log('[socket.io] Server: ' + serverMessage);
  });

  socket.on(_config.IO_DISCONNECT, function () {
    console.log('[socket.io] Disconnected.');
  });
};
/* eslint-enable no-console */

exports.default = setUpSocket;