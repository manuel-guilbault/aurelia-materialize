'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var MaterialCollapsible = (function () {
  function MaterialCollapsible(element) {
    _classCallCheck(this, _MaterialCollapsible);

    this.element = element;
  }

  var _MaterialCollapsible = MaterialCollapsible;

  _MaterialCollapsible.prototype.attached = function attached() {
    (0, _jquery2['default'])(this.element).collapsible({
      accordion: this.accordion
    });
  };

  MaterialCollapsible = (0, _aureliaDependencyInjection.inject)(Element)(MaterialCollapsible) || MaterialCollapsible;
  MaterialCollapsible = (0, _aureliaTemplating.bindable)({ name: 'accordion', defaultValue: false })(MaterialCollapsible) || MaterialCollapsible;
  MaterialCollapsible = (0, _aureliaTemplating.customAttribute)('material-collapsible')(MaterialCollapsible) || MaterialCollapsible;
  return MaterialCollapsible;
})();

exports.MaterialCollapsible = MaterialCollapsible;