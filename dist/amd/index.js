define(['exports', 'jquery', 'materialize', 'materialize/bin/materialize.css!', './select', './side-nav', './validation-view-strategy'], function (exports, _jquery, _materialize, _materializeBinMaterializeCss, _select, _sideNav, _validationViewStrategy) {
  'use strict';

  exports.__esModule = true;
  exports.configure = configure;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _$ = _interopRequireDefault(_jquery);

  exports.MaterializeSelect = _select.MaterializeSelect;
  exports.MaterializeSideNav = _sideNav.MaterializeSideNav;
  exports.MaterializeValidationViewStrategy = _validationViewStrategy.MaterializeValidationViewStrategy;

  function configure(aurelia) {
    aurelia.globalizeResources('./select', './side-nav');
  }
});