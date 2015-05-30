import {customAttribute, inject} from 'aurelia-framework';

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