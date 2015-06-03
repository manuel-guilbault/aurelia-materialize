System.register(['jquery', 'materialize/bin/materialize', 'materialize/bin/materialize.css!', './select', './side-nav', './validation-view-strategy'], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.globalizeResources('./select', './side-nav');
  }

  return {
    setters: [function (_jquery) {}, function (_materializeBinMaterialize) {}, function (_materializeBinMaterializeCss) {}, function (_select) {
      _export('MaterializeSelect', _select.MaterializeSelect);
    }, function (_sideNav) {
      _export('MaterializeSideNav', _sideNav.MaterializeSideNav);
    }, function (_validationViewStrategy) {
      _export('MaterializeValidationViewStrategy', _validationViewStrategy.MaterializeValidationViewStrategy);
    }],
    execute: function () {}
  };
});