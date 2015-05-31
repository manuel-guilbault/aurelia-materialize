System.register([], function (_export) {
  'use strict';

  var MaterializeValidationViewStrategy;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      MaterializeValidationViewStrategy = (function () {
        function MaterializeValidationViewStrategy() {
          _classCallCheck(this, MaterializeValidationViewStrategy);

          this.bindingPathAttributes = ['validate', 'value.bind', 'value.two-way'];
        }

        MaterializeValidationViewStrategy.prototype.getValidationProperty = function getValidationProperty(validation, element) {
          var atts = element.attributes;
          for (var i = 0; i < this.bindingPathAttributes.length; i++) {
            var attributeName = this.bindingPathAttributes[i];
            if (atts[attributeName]) {
              var bindingPath = atts[attributeName].value.trim();
              if (bindingPath.indexOf('|') != -1) bindingPath = bindingPath.split('|')[0].trim();
              var validationProperty = validation.result.properties[bindingPath];

              if (attributeName == 'validate' && (validationProperty === null || validationProperty === undefined)) {
                validation.ensure(bindingPath);
                validationProperty = validation.result.properties[bindingPath];
              }
              return validationProperty;
            }
          }
          return null;
        };

        MaterializeValidationViewStrategy.prototype.prepareElement = function prepareElement(validationProperty, element) {
          this.appendUIVisuals(null, element);
        };

        MaterializeValidationViewStrategy.prototype.updateElement = function updateElement(validationProperty, element) {
          this.appendUIVisuals(validationProperty, element);
        };

        MaterializeValidationViewStrategy.prototype.appendUIVisuals = function appendUIVisuals(validationProperty, currentElement) {
          if (validationProperty && validationProperty.isDirty) {
            if (validationProperty.isValid) {
              currentElement.classList.remove('invalid');
              currentElement.classList.add('valid');
            } else {
              currentElement.classList.remove('valid');
              currentElement.classList.add('invalid');
            }
          } else {
            currentElement.classList.remove('invalid');
            currentElement.classList.add('valid');
          }
          if (validationProperty) {
            currentElement.setAttribute('data-error', validationProperty.message);
          } else {
            currentElement.removeAttribute('data-error');
          }
        };

        return MaterializeValidationViewStrategy;
      })();

      _export('MaterializeValidationViewStrategy', MaterializeValidationViewStrategy);
    }
  };
});