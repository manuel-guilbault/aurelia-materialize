define(['exports', 'jquery', 'materialize', './select', './side-nav', './toast', './dropdown', './collapsible', './validation-view-strategy'], function (exports, _jquery, _materialize, _select, _sideNav, _toast, _dropdown, _collapsible, _validationViewStrategy) {
  'use strict';

  exports.__esModule = true;
  exports.configure = configure;
  exports.MaterialSelect = _select.MaterialSelect;
  exports.MaterialSideNav = _sideNav.MaterialSideNav;
  exports.MaterialToast = _toast.MaterialToast;
  exports.MaterialDropDown = _dropdown.MaterialDropDown;
  exports.MaterialCollapsible = _collapsible.MaterialCollapsible;
  exports.MaterialValidationViewStrategy = _validationViewStrategy.MaterialValidationViewStrategy;

  function configure(aurelia) {
    aurelia.globalizeResources('./select', './side-nav', './toast', './dropdown', './collapsible');
  }
});