'use strict';

exports.__esModule = true;
exports.configure = configure;

require('jquery');

require('materialize');

var _select = require('./select');

exports.MaterialSelect = _select.MaterialSelect;

var _sideNav = require('./side-nav');

exports.MaterialSideNav = _sideNav.MaterialSideNav;

var _toast = require('./toast');

exports.MaterialToast = _toast.MaterialToast;

var _dropdown = require('./dropdown');

exports.MaterialDropDown = _dropdown.MaterialDropDown;

var _collapsible = require('./collapsible');

exports.MaterialCollapsible = _collapsible.MaterialCollapsible;

var _validationViewStrategy = require('./validation-view-strategy');

exports.MaterialValidationViewStrategy = _validationViewStrategy.MaterialValidationViewStrategy;

function configure(aurelia) {
  aurelia.globalizeResources('./select', './side-nav', './toast', './dropdown', './collapsible');
}