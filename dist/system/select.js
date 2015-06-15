System.register(['aurelia-templating', 'aurelia-dependency-injection', 'jquery'], function (_export) {
  'use strict';

  var customAttribute, inject, $, MaterialSelect;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaTemplating) {
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_jquery) {
      $ = _jquery['default'];
    }],
    execute: function () {
      MaterialSelect = (function () {
        function MaterialSelect(element) {
          _classCallCheck(this, _MaterialSelect);

          this.element = element;
        }

        var _MaterialSelect = MaterialSelect;

        _MaterialSelect.prototype.attached = function attached() {
          $(this.element).material_select();
        };

        _MaterialSelect.prototype.detached = function detached() {
          $(this.element).material_select('destroy');
        };

        MaterialSelect = inject(Element)(MaterialSelect) || MaterialSelect;
        MaterialSelect = customAttribute('material-select')(MaterialSelect) || MaterialSelect;
        return MaterialSelect;
      })();

      _export('MaterialSelect', MaterialSelect);
    }
  };
});