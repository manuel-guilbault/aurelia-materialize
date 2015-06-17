import {customAttribute, bindable} from 'aurelia-templating';
import {inject} from 'aurelia-dependency-injection';
import $ from 'jquery';

@customAttribute('material-collapsible')
@bindable({ name: 'accordion', defaultValue: false })
@inject(Element)
export class MaterialCollapsible {
  constructor(element) {
    this.element = element;
  }

  attached() {
    $(this.element).collapsible({
      accordion : this.accordion 
    });
  }
}