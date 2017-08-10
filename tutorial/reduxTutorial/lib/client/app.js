'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helloButton = require('./container/hello-button');

var _helloButton2 = _interopRequireDefault(_helloButton);

var _helloAsyncButton = require('./container/hello-async-button');

var _helloAsyncButton2 = _interopRequireDefault(_helloAsyncButton);

var _message = require('./container/message');

var _message2 = _interopRequireDefault(_message);

var _messageAsync = require('./container/message-async');

var _messageAsync2 = _interopRequireDefault(_messageAsync);

var _config = require('../shared/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      _config.APP_NAME
    ),
    _react2.default.createElement(_message2.default, null),
    _react2.default.createElement(_helloButton2.default, null),
    _react2.default.createElement(_messageAsync2.default, null),
    _react2.default.createElement(_helloAsyncButton2.default, null)
  );
};

exports.default = App;