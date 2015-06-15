import {customAttribute, bindable} from 'aurelia-templating';
import {inject} from 'aurelia-dependency-injection';
import $ from 'jquery';

@customAttribute('material-dropdown')
@bindable('inDuration')
@bindable('outDuration')
@bindable('constrainWidth')
@bindable('hover')
@bindable('gutter')
@bindable('belowOrigin')
@inject(Element)
export class MaterialDropDown {
  constructor(element) {
    this.element = element;
  }

  attached() {
    $(this.element).dropdown({
      inDuration: this.inDuration,
      outDuration: this.outDuration,
      constrain_width: this.constrainWidth,
      hover: this.hover,
      gutter: this.gutter,
      belowOrigin: this.belowOrigin
    });
  }
}