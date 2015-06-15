define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'jquery'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _jquery) {
  'use strict';

  exports.__esModule = true;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _$ = _interopRequireDefault(_jquery);

  var MaterialSelect = (function () {
    function MaterialSelect(element) {
      _classCallCheck(this, _MaterialSelect);

      this.element = element;
    }

    var _MaterialSelect = MaterialSelect;

    _MaterialSelect.prototype.attached = function attached() {
      (0, _$['default'])(this.element).material_select();
    };

    _MaterialSelect.prototype.detached = function detached() {
      (0, _$['default'])(this.element).material_select('destroy');
    };

    MaterialSelect = (0, _aureliaDependencyInjection.inject)(Element)(MaterialSelect) || MaterialSelect;
    MaterialSelect = (0, _aureliaTemplating.customAttribute)('material-select')(MaterialSelect) || MaterialSelect;
    return MaterialSelect;
  })();

  exports.MaterialSelect = MaterialSelect;
});