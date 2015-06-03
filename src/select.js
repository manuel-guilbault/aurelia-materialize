import {customAttribute, inject} from 'aurelia-framework';
import $ from 'jquery';

@customAttribute('materialize-select')
@inject(Element)
export class MaterializeSelect {
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