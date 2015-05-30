System.register(['./select', './side-nav'], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.globalizeResources('./select', './side-nav');
  }

  return {
    setters: [function (_select) {
      _export('MaterializeSelect', _select.MaterializeSelect);
    }, function (_sideNav) {
      _export('MaterializeSideNav', _sideNav.MaterializeSideNav);
    }],
    execute: function () {}
  };
});