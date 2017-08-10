'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nav = function Nav() {
  return _react2.default.createElement(
    'nav',
    null,
    _react2.default.createElement(
      'ul',
      null,
      [{ route: _routes.HOME_PAGE_ROUTE, label: 'Home' }, { route: _routes.HELLO_PAGE_ROUTE, label: 'Say Hello' }, { route: _routes.HELLO_ASYNC_PAGE_ROUTE, label: 'Say Hello Asynchronously' }, { route: _routes.NOT_FOUND_DEMO_PAGE_ROUTE, label: '404 Demo' }].map(function (link) {
        return _react2.default.createElement(
          'li',
          { key: link.route },
          _react2.default.createElement(
            _reactRouterDom.NavLink,
            { to: link.route, activeStyle: { color: 'limegreen' }, exact: true },
            link.label
          )
        );
      })
    )
  );
};

exports.default = Nav;