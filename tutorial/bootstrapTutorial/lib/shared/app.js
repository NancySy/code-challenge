'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRouter = require('react-router');

var _reactRouterDom = require('react-router-dom');

var _config = require('./config');

var _nav = require('./component/nav');

var _nav2 = _interopRequireDefault(_nav);

var _home = require('./component/page/home');

var _home2 = _interopRequireDefault(_home);

var _hello = require('./component/page/hello');

var _hello2 = _interopRequireDefault(_hello);

var _helloAsync = require('./component/page/hello-async');

var _helloAsync2 = _interopRequireDefault(_helloAsync);

var _notFound = require('./component/page/not-found');

var _notFound2 = _interopRequireDefault(_notFound);

var _routes = require('./routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    'div',
    { style: { paddingTop: 54 } },
    _react2.default.createElement(_reactHelmet2.default, { titletemplate: '%s | ' + _config.APP_NAME, defaultTitle: _config.APP_NAME }),
    _react2.default.createElement(_nav2.default, null),
    _react2.default.createElement(
      _reactRouter.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: _routes.HOME_PAGE_ROUTE, render: function render() {
          return _react2.default.createElement(_home2.default, null);
        } }),
      _react2.default.createElement(_reactRouterDom.Route, { path: _routes.HELLO_PAGE_ROUTE, render: function render() {
          return _react2.default.createElement(_hello2.default, null);
        } }),
      _react2.default.createElement(_reactRouterDom.Route, { path: _routes.HELLO_ASYNC_PAGE_ROUTE, render: function render() {
          return _react2.default.createElement(_helloAsync2.default, null);
        } }),
      _react2.default.createElement(_reactRouterDom.Route, { component: _notFound2.default })
    )
  );
};

exports.default = App;