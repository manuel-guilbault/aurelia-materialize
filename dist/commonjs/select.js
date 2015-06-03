'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaFramework = require('aurelia-framework');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var MaterializeSelect = (function () {
  function MaterializeSelect(element) {
    _classCallCheck(this, _MaterializeSelect);

    this.element = element;
  }

  var _MaterializeSelect = MaterializeSelect;

  _MaterializeSelect.prototype.attached = function attached() {
    (0, _jquery2['default'])(this.element).material_select();
  };

  _MaterializeSelect.prototype.detached = function detached() {
    (0, _jquery2['default'])(this.element).material_select('destroy');
  };

  MaterializeSelect = (0, _aureliaFramework.inject)(Element)(MaterializeSelect) || MaterializeSelect;
  MaterializeSelect = (0, _aureliaFramework.customAttribute)('materialize-select')(MaterializeSelect) || MaterializeSelect;
  return MaterializeSelect;
})();

exports.MaterializeSelect = MaterializeSelect;