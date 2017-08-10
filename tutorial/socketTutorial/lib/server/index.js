'use strict';

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _routing = require('./routing');

var _routing2 = _interopRequireDefault(_routing);

var _config = require('../shared/config');

var _util = require('../shared/util');

var _socket3 = require('./socket');

var _socket4 = _interopRequireDefault(_socket3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
// flow-disable-next-line
var http = (0, _http.Server)(app);
var io = (0, _socket2.default)(http);
(0, _socket4.default)(io);

app.use((0, _compression2.default)());
app.use(_config.STATIC_PATH, _express2.default.static('dist'));
app.use(_config.STATIC_PATH, _express2.default.static('public'));

(0, _routing2.default)(app);

http.listen(_config.WEB_PORT, function () {
  // eslint-disable-next-line no-console
  console.log('Server running on port ' + _config.WEB_PORT + ' ' + (_util.isProd ? '(production)' : '(development).\nKeep "yarn dev:wds" running in an other terminal') + '.');
});