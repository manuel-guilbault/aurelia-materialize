System.register(['jquery', 'materialize', './select', './side-nav', './toast', './dropdown', './validation-view-strategy'], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.globalizeResources('./select', './side-nav', './toast', './dropdown');
  }

  return {
    setters: [function (_jquery) {}, function (_materialize) {}, function (_select) {
      _export('MaterialSelect', _select.MaterialSelect);
    }, function (_sideNav) {
      _export('MaterialSideNav', _sideNav.MaterialSideNav);
    }, function (_toast) {
      _export('MaterialToast', _toast.MaterialToast);
    }, function (_dropdown) {
      _export('MaterialDropDown', _dropdown.MaterialDropDown);
    }, function (_validationViewStrategy) {
      _export('MaterialValidationViewStrategy', _validationViewStrategy.MaterialValidationViewStrategy);
    }],
    execute: function () {}
  };
});