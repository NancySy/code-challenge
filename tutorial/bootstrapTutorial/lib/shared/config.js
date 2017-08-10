'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var WEB_PORT = exports.WEB_PORT = process.env.PORT || 8000;
var STATIC_PATH = exports.STATIC_PATH = '/static';
var APP_NAME = exports.APP_NAME = 'Hello';

var WDS_PORT = exports.WDS_PORT = 7000;
var APP_CONTAINER_CLASS = exports.APP_CONTAINER_CLASS = 'js-app';
var APP_CONTAINER_SELECTOR = exports.APP_CONTAINER_SELECTOR = '.' + APP_CONTAINER_CLASS;

var IO_CONNECT = exports.IO_CONNECT = 'connect';
var IO_DISCONNECT = exports.IO_DISCONNECT = 'disconnect';
var IO_CLIENT_HELLO = exports.IO_CLIENT_HELLO = 'IO_CLIENT_HELLO';
var IO_CLIENT_JOIN_ROOM = exports.IO_CLIENT_JOIN_ROOM = 'IO_CLIENT_JOIN_ROOM';
var IO_SERVER_HELLO = exports.IO_SERVER_HELLO = 'IO_SERVER_HELLO';

var JSS_SSR_CLASS = exports.JSS_SSR_CLASS = 'jss-ssr';
var JSS_SSR_SELECTOR = exports.JSS_SSR_SELECTOR = '.' + JSS_SSR_CLASS;