import {customAttribute} from 'aurelia-templating';
import {inject} from 'aurelia-dependency-injection';
import $ from 'jquery';

@customAttribute('material-select')
@inject(Element)
export class MaterialSelect {
  constructor(element) {
    this.element = element;
  }

  attached() {
    $(this.element).material_select();
  }

  detached() {
    $(this.element).material_select('destroy');
  }
}