define(['exports', './select', './side-nav'], function (exports, _select, _sideNav) {
  'use strict';

  exports.__esModule = true;
  exports.configure = configure;
  exports.MaterializeSelect = _select.MaterializeSelect;
  exports.MaterializeSideNav = _sideNav.MaterializeSideNav;

  function configure(aurelia) {
    aurelia.globalizeResources('./select', './side-nav');
  }
});