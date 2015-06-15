define(['exports'], function (exports) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var MaterialValidationViewStrategy = (function () {
    function MaterialValidationViewStrategy() {
      _classCallCheck(this, MaterialValidationViewStrategy);

      this.bindingPathAttributes = ['validate', 'value.bind', 'value.two-way'];
    }

    MaterialValidationViewStrategy.prototype.getValidationProperty = function getValidationProperty(validation, element) {
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

    MaterialValidationViewStrategy.prototype.prepareElement = function prepareElement(validationProperty, element) {
      this.appendUIVisuals(null, element);
    };

    MaterialValidationViewStrategy.prototype.updateElement = function updateElement(validationProperty, element) {
      this.appendUIVisuals(validationProperty, element);
    };

    MaterialValidationViewStrategy.prototype.appendUIVisuals = function appendUIVisuals(validationProperty, currentElement) {
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

    return MaterialValidationViewStrategy;
  })();

  exports.MaterialValidationViewStrategy = MaterialValidationViewStrategy;
});