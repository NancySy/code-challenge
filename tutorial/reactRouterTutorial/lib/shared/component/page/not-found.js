'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var title = 'Page Not Found';

var NotFoundPage = function NotFoundPage() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactHelmet2.default, {
      title: title,
      meta: [{ name: 'description', content: 'A page to say hello' }, { property: 'op:title', content: title }]
    }),
    _react2.default.createElement(
      'h1',
      null,
      title
    )
  );
};

exports.default = NotFoundPage;