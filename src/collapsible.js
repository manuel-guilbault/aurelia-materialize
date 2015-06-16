import {customAttribute, bindable,inject} from 'aurelia-framework';
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
            accordion : this.accordion // A setting that changes the collapsible behavior to expandable instead of the default accordion style
        });
    }
}