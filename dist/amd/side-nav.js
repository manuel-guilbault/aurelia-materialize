define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'jquery'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _jquery) {
  'use strict';

  exports.__esModule = true;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _$ = _interopRequireDefault(_jquery);

  var MaterialSideNav = (function () {
    function MaterialSideNav(element) {
      _classCallCheck(this, _MaterialSideNav);

      this.element = element;
    }

    var _MaterialSideNav = MaterialSideNav;

    _MaterialSideNav.prototype.attached = function attached() {
      (0, _$['default'])(this.element).sideNav({
        menuWidth: this.menuWidth,
        edge: this.edge,
        closeOnClick: this.closeOnClick
      });
    };

    MaterialSideNav = (0, _aureliaTemplating.bindable)({ name: 'closeOnClick', defaultValue: true })(MaterialSideNav) || MaterialSideNav;
    MaterialSideNav = (0, _aureliaTemplating.bindable)('edge')(MaterialSideNav) || MaterialSideNav;
    MaterialSideNav = (0, _aureliaTemplating.bindable)('menuWidth')(MaterialSideNav) || MaterialSideNav;
    MaterialSideNav = (0, _aureliaDependencyInjection.inject)(Element)(MaterialSideNav) || MaterialSideNav;
    MaterialSideNav = (0, _aureliaTemplating.customAttribute)('material-side-nav')(MaterialSideNav) || MaterialSideNav;
    return MaterialSideNav;
  })();

  exports.MaterialSideNav = MaterialSideNav;
});