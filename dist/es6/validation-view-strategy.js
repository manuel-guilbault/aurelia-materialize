export class MaterialValidationViewStrategy {

  constructor() {
    this.bindingPathAttributes = ['validate', 'value.bind', 'value.two-way'];
  }

  getValidationProperty(validation, element) {
    var atts = element.attributes;
    for (let i = 0; i < this.bindingPathAttributes.length; i++) {
      let attributeName = this.bindingPathAttributes[i];
      if (atts[attributeName]) {
        var bindingPath = atts[attributeName].value.trim();
        if (bindingPath.indexOf('|') != -1)
          bindingPath = bindingPath.split('|')[0].trim();
        var validationProperty = validation.result.properties[bindingPath];

        if (attributeName == 'validate' && (validationProperty === null || validationProperty === undefined)) {
          //Dev explicitly stated to show validation on a field, but there's no rules for this field
          //Hence, we add an empty validationProperty for that field, without any rules
          //This way, when 'checkAll()' is called, the input element 'turns green'
          validation.ensure(bindingPath);
          validationProperty = validation.result.properties[bindingPath];
        }
        return validationProperty;
      }
    }
    return null;
  }

  prepareElement(validationProperty, element) {
    this.appendUIVisuals(null, element);
  }

  updateElement(validationProperty, element) {
    this.appendUIVisuals(validationProperty, element);
  }

  appendUIVisuals(validationProperty, currentElement) {
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
  }
}