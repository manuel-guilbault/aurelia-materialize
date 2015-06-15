System.register(['aurelia-templating', 'aurelia-dependency-injection', 'jquery'], function (_export) {
  'use strict';

  var customAttribute, bindable, inject, $, MaterialDropDown;

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
      MaterialDropDown = (function () {
        function MaterialDropDown(element) {
          _classCallCheck(this, _MaterialDropDown);

          this.element = element;
        }

        var _MaterialDropDown = MaterialDropDown;

        _MaterialDropDown.prototype.attached = function attached() {
          $(this.element).dropdown({
            inDuration: this.inDuration,
            outDuration: this.outDuration,
            constrain_width: this.constrainWidth,
            hover: this.hover,
            gutter: this.gutter,
            belowOrigin: this.belowOrigin
          });
        };

        MaterialDropDown = inject(Element)(MaterialDropDown) || MaterialDropDown;
        MaterialDropDown = bindable('belowOrigin')(MaterialDropDown) || MaterialDropDown;
        MaterialDropDown = bindable('gutter')(MaterialDropDown) || MaterialDropDown;
        MaterialDropDown = bindable('hover')(MaterialDropDown) || MaterialDropDown;
        MaterialDropDown = bindable('constrainWidth')(MaterialDropDown) || MaterialDropDown;
        MaterialDropDown = bindable('outDuration')(MaterialDropDown) || MaterialDropDown;
        MaterialDropDown = bindable('inDuration')(MaterialDropDown) || MaterialDropDown;
        MaterialDropDown = customAttribute('material-dropdown')(MaterialDropDown) || MaterialDropDown;
        return MaterialDropDown;
      })();

      _export('MaterialDropDown', MaterialDropDown);
    }
  };
});