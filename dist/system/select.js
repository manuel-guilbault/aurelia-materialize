System.register(['aurelia-framework', 'jquery'], function (_export) {
  'use strict';

  var customAttribute, inject, $, MaterializeSelect;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      customAttribute = _aureliaFramework.customAttribute;
      inject = _aureliaFramework.inject;
    }, function (_jquery) {
      $ = _jquery['default'];
    }],
    execute: function () {
      MaterializeSelect = (function () {
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

        MaterializeSelect = inject(Element)(MaterializeSelect) || MaterializeSelect;
        MaterializeSelect = customAttribute('materialize-select')(MaterializeSelect) || MaterializeSelect;
        return MaterializeSelect;
      })();

      _export('MaterializeSelect', MaterializeSelect);
    }
  };
});