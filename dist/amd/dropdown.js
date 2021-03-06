define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'jquery'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _jquery) {
  'use strict';

  exports.__esModule = true;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _$ = _interopRequireDefault(_jquery);

  var MaterialDropDown = (function () {
    function MaterialDropDown(element) {
      _classCallCheck(this, _MaterialDropDown);

      this.element = element;
    }

    var _MaterialDropDown = MaterialDropDown;

    _MaterialDropDown.prototype.attached = function attached() {
      (0, _$['default'])(this.element).dropdown({
        inDuration: this.inDuration,
        outDuration: this.outDuration,
        constrain_width: this.constrainWidth,
        hover: this.hover,
        gutter: this.gutter,
        belowOrigin: this.belowOrigin
      });
    };

    MaterialDropDown = (0, _aureliaDependencyInjection.inject)(Element)(MaterialDropDown) || MaterialDropDown;
    MaterialDropDown = (0, _aureliaTemplating.bindable)('belowOrigin')(MaterialDropDown) || MaterialDropDown;
    MaterialDropDown = (0, _aureliaTemplating.bindable)('gutter')(MaterialDropDown) || MaterialDropDown;
    MaterialDropDown = (0, _aureliaTemplating.bindable)('hover')(MaterialDropDown) || MaterialDropDown;
    MaterialDropDown = (0, _aureliaTemplating.bindable)('constrainWidth')(MaterialDropDown) || MaterialDropDown;
    MaterialDropDown = (0, _aureliaTemplating.bindable)('outDuration')(MaterialDropDown) || MaterialDropDown;
    MaterialDropDown = (0, _aureliaTemplating.bindable)('inDuration')(MaterialDropDown) || MaterialDropDown;
    MaterialDropDown = (0, _aureliaTemplating.customAttribute)('material-dropdown')(MaterialDropDown) || MaterialDropDown;
    return MaterialDropDown;
  })();

  exports.MaterialDropDown = MaterialDropDown;
});