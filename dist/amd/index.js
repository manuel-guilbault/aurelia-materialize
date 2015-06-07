define(['exports', 'jquery', 'materialize', './select', './side-nav', './validation-view-strategy'], function (exports, _jquery, _materialize, _select, _sideNav, _validationViewStrategy) {
  'use strict';

  exports.__esModule = true;
  exports.configure = configure;
  exports.MaterializeSelect = _select.MaterializeSelect;
  exports.MaterializeSideNav = _sideNav.MaterializeSideNav;
  exports.MaterializeValidationViewStrategy = _validationViewStrategy.MaterializeValidationViewStrategy;

  function configure(aurelia) {
    aurelia.globalizeResources('./select', './side-nav');
  }
});