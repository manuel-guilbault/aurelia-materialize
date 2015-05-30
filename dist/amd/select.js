define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var MaterializeSelect = (function () {
    function MaterializeSelect(element) {
      _classCallCheck(this, _MaterializeSelect);

      this.element = element;
    }

    var _MaterializeSelect = MaterializeSelect;

    _MaterializeSelect.prototype.attached = function attached() {
      $(this.element).material_select();
    };

    _MaterializeSelect.prototype.detached = function detached() {
      $(this.element).material_select('destroy');
    };

    MaterializeSelect = (0, _aureliaFramework.inject)(Element)(MaterializeSelect) || MaterializeSelect;
    MaterializeSelect = (0, _aureliaFramework.customAttribute)('materialize-select')(MaterializeSelect) || MaterializeSelect;
    return MaterializeSelect;
  })();

  exports.MaterializeSelect = MaterializeSelect;
});