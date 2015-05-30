define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var MaterializeSideNav = (function () {
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

    MaterializeSideNav = (0, _aureliaFramework.bindable)({ name: 'closeOnClick', defaultValue: true })(MaterializeSideNav) || MaterializeSideNav;
    MaterializeSideNav = (0, _aureliaFramework.bindable)('edge')(MaterializeSideNav) || MaterializeSideNav;
    MaterializeSideNav = (0, _aureliaFramework.bindable)('menuWidth')(MaterializeSideNav) || MaterializeSideNav;
    MaterializeSideNav = (0, _aureliaFramework.inject)(Element)(MaterializeSideNav) || MaterializeSideNav;
    MaterializeSideNav = (0, _aureliaFramework.customAttribute)('materialize-side-nav')(MaterializeSideNav) || MaterializeSideNav;
    return MaterializeSideNav;
  })();

  exports.MaterializeSideNav = MaterializeSideNav;
});