'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('../shared/config');

/* eslint-disable no-console */
var setUpSocket = function setUpSocket(io) {
  io.on(_config.IO_CONNECT, function (socket) {
    console.log('[socket.io] A client connected.');

    socket.on(_config.IO_CLIENT_JOIN_ROOM, function (room) {
      socket.join(room);
      console.log('[socket.io] A client joined room ' + room + '.');

      io.emit(_config.IO_SERVER_HELLO, 'Hello everyone!');
      io.to(room).emit(_config.IO_SERVER_HELLO, 'Hello clients of room ' + room + '!');
      socket.emit(_config.IO_SERVER_HELLO, 'Hello you!');
    });

    socket.on(_config.IO_CLIENT_HELLO, function (clientMessage) {
      console.log('[socket.io] Client: ' + clientMessage);
    });

    socket.on(_config.IO_DISCONNECT, function () {
      console.log('[socket.io] A client disconnected.');
    });
  });
};
/* eslint-enable no-console */

exports.default = setUpSocket;