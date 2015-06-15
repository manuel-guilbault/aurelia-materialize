System.register(['aurelia-templating', 'aurelia-dependency-injection', 'jquery'], function (_export) {
  'use strict';

  var customAttribute, bindable, inject, $, MaterialSideNav;

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
      MaterialSideNav = (function () {
        function MaterialSideNav(element) {
          _classCallCheck(this, _MaterialSideNav);

          this.element = element;
        }

        var _MaterialSideNav = MaterialSideNav;

        _MaterialSideNav.prototype.attached = function attached() {
          $(this.element).sideNav({
            menuWidth: this.menuWidth,
            edge: this.edge,
            closeOnClick: this.closeOnClick
          });
        };

        MaterialSideNav = bindable({ name: 'closeOnClick', defaultValue: true })(MaterialSideNav) || MaterialSideNav;
        MaterialSideNav = bindable('edge')(MaterialSideNav) || MaterialSideNav;
        MaterialSideNav = bindable('menuWidth')(MaterialSideNav) || MaterialSideNav;
        MaterialSideNav = inject(Element)(MaterialSideNav) || MaterialSideNav;
        MaterialSideNav = customAttribute('material-side-nav')(MaterialSideNav) || MaterialSideNav;
        return MaterialSideNav;
      })();

      _export('MaterialSideNav', MaterialSideNav);
    }
  };
});