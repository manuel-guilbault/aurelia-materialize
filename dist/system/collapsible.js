System.register(['aurelia-templating', 'aurelia-dependency-injection', 'jquery'], function (_export) {
  'use strict';

  var customAttribute, bindable, inject, $, MaterialCollapsible;

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
      MaterialCollapsible = (function () {
        function MaterialCollapsible(element) {
          _classCallCheck(this, _MaterialCollapsible);

          this.element = element;
        }

        var _MaterialCollapsible = MaterialCollapsible;

        _MaterialCollapsible.prototype.attached = function attached() {
          $(this.element).collapsible({
            accordion: this.accordion
          });
        };

        MaterialCollapsible = inject(Element)(MaterialCollapsible) || MaterialCollapsible;
        MaterialCollapsible = bindable({ name: 'accordion', defaultValue: false })(MaterialCollapsible) || MaterialCollapsible;
        MaterialCollapsible = customAttribute('material-collapsible')(MaterialCollapsible) || MaterialCollapsible;
        return MaterialCollapsible;
      })();

      _export('MaterialCollapsible', MaterialCollapsible);
    }
  };
});