import {EventAggregator} from 'aurelia-event-aggregator';
import {Container, inject} from 'aurelia-dependency-injection';
import {
  customElement, noView, skipContentProcessing , bindable, 
  ViewCompiler, BoundViewFactory, ResourceRegistry
} from 'aurelia-templating';

var needsTemplateFixup = !('content' in document.createElement('template'));

function getContent(element) {
  var template = document.createElement('template');
  template.innerHTML = element.innerHTML;

  if (needsTemplateFixup) {
    template.content = document.createDocumentFragment();
    while (template.firstChild) {
      template.content.appendChild(template.firstChild);
    }
  }

  return template;
}

function getInnerHtml(fragment) {
  var html = '';
  for (var i = 0; i < fragment.childNodes.length; ++i) {
    var node = fragment.childNodes[i];
    switch (node.nodeType) {
      case 1: //element
        html += node.outerHTML;
        break;

      case 3: // text
        html += node.data;
        break;

      case 8: // comment
        html += '<!-- ' + node.data + '-->';
        break;
    }
  }
  return html;
}

@customElement('material-toast')
@bindable({ name: 'event', defaultValue: null })
@bindable({ name: 'duration', defaultValue: 4000 })
@bindable({ name: 'class', defaultValue: '' })
@bindable({ name: 'onClosed', defaultValue: null })
@noView
@skipContentProcessing 
@inject(Element, ViewCompiler, ResourceRegistry, EventAggregator, Container)
export class MaterialToast {

  constructor(element, viewCompiler, resources, eventAggregator, container) {
    var content = getContent(element);
    element.innerHTML = '';

    var viewFactory = viewCompiler.compile(content, resources);
    this.viewFactory = new BoundViewFactory(container, viewFactory, {});
    this.eventAggregator = eventAggregator;
    this.eventDisposal = null;
    this.isAttached = false;
  }

  eventChanged() {
    if (this.isAttached) {
      this.unsubscribeEvent();
      this.subscribeEvent();
    }
  }

  attached() {
    this.isAttached = true;
    this.subscribeEvent();
  }

  detached() {
    this.unsubscribeEvent();
    this.isAttached = false;
  }

  subscribeEvent() {
    if (this.event) {
      this.eventDisposal = this.eventAggregator.subscribe(this.event, message => {
        this.show(message);
      });
    }
  }

  unsubscribeEvent() {
    if (this.eventDisposal) {
      this.eventDisposal();
      this.eventDisposal = null;
    }
  }

  show(model) {
    var view = this.viewFactory.create(model);
    var html = getInnerHtml(view.fragment);

    Materialize.toast(html, this.duration, this.class, () => {
        view.detached();
        view.unbind();
        if (this.onClosed) {
          this.onClosed();
        }
      }
    );

    view.attached();
  }
}