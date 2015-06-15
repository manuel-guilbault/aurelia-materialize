import {customAttribute, bindable} from 'aurelia-templating';
import {inject} from 'aurelia-dependency-injection';
import $ from 'jquery';

@customAttribute('material-side-nav')
@inject(Element)
@bindable('menuWidth')
@bindable('edge')
@bindable({ name: 'closeOnClick', defaultValue: true })
export class MaterialSideNav {
  constructor(element) {
    this.element = element;
  }

  attached() {
    $(this.element).sideNav({
      menuWidth: this.menuWidth,
      edge: this.edge,
      closeOnClick: this.closeOnClick
    });
  }
}