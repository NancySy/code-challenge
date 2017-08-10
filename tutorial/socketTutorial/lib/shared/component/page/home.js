'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _config = require('../../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = function HomePage() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactHelmet2.default, {
      meta: [{ name: 'description', content: 'Hello App is an app to say hello' }, { property: 'og:title', content: _config.APP_NAME }]
    }),
    _react2.default.createElement(
      'h1',
      null,
      _config.APP_NAME
    )
  );
};

exports.default = HomePage;