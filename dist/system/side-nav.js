System.register(['aurelia-templating', 'aurelia-dependency-injection', 'jquery'], function (_export) {
  'use strict';

  var customAttribute, bindable, inject, $, MaterializeSideNav;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaTemplating) {
      customAttribute = _aureliaTemplating.customAttribute;
      bindable = _aureliaTemplating.bindable;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_jquery) {
      $ = _jquery['default'];
    }],
    execute: function () {
      MaterializeSideNav = (function () {
        function MaterializeSideNav(element) {
          _classCallCheck(this, _MaterializeSideNav);

          this.element = element;
        }

        var _MaterializeSideNav = MaterializeSideNav;

        _MaterializeSideNav.prototype.attached = function attached() {
          $(this.element).sideNav({
            menuWidth: this.menuWidth,
            edge: this.edge,
            closeOnClick: this.closeOnClick
          });
        };

        MaterializeSideNav = bindable({ name: 'closeOnClick', defaultValue: true })(MaterializeSideNav) || MaterializeSideNav;
        MaterializeSideNav = bindable('edge')(MaterializeSideNav) || MaterializeSideNav;
        MaterializeSideNav = bindable('menuWidth')(MaterializeSideNav) || MaterializeSideNav;
        MaterializeSideNav = inject(Element)(MaterializeSideNav) || MaterializeSideNav;
        MaterializeSideNav = customAttribute('materialize-side-nav')(MaterializeSideNav) || MaterializeSideNav;
        return MaterializeSideNav;
      })();

      _export('MaterializeSideNav', MaterializeSideNav);
    }
  };
});