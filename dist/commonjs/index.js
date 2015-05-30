'use strict';

exports.__esModule = true;
exports.configure = configure;

var _select = require('./select');

exports.MaterializeSelect = _select.MaterializeSelect;

var _sideNav = require('./side-nav');

exports.MaterializeSideNav = _sideNav.MaterializeSideNav;

function configure(aurelia) {
  aurelia.globalizeResources('./select', './side-nav');
}