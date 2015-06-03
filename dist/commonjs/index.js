'use strict';

exports.__esModule = true;
exports.configure = configure;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('materialize');

require('materialize/bin/materialize.css!');

var _select = require('./select');

exports.MaterializeSelect = _select.MaterializeSelect;

var _sideNav = require('./side-nav');

exports.MaterializeSideNav = _sideNav.MaterializeSideNav;

var _validationViewStrategy = require('./validation-view-strategy');

exports.MaterializeValidationViewStrategy = _validationViewStrategy.MaterializeValidationViewStrategy;

function configure(aurelia) {
  aurelia.globalizeResources('./select', './side-nav');
}