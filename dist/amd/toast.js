define(['exports', 'aurelia-event-aggregator', 'aurelia-dependency-injection', 'aurelia-templating'], function (exports, _aureliaEventAggregator, _aureliaDependencyInjection, _aureliaTemplating) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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
        case 1:
          html += node.outerHTML;
          break;

        case 3:
          html += node.data;
          break;

        case 8:
          html += '<!-- ' + node.data + '-->';
          break;
      }
    }
    return html;
  }

  var MaterialToast = (function () {
    function MaterialToast(element, viewCompiler, resources, eventAggregator, container) {
      _classCallCheck(this, _MaterialToast);

      var content = getContent(element);
      element.innerHTML = '';

      var viewFactory = viewCompiler.compile(content, resources);
      this.viewFactory = new _aureliaTemplating.BoundViewFactory(container, viewFactory, {});
      this.eventAggregator = eventAggregator;
      this.eventDisposal = null;
      this.isAttached = false;
    }

    var _MaterialToast = MaterialToast;

    _MaterialToast.prototype.eventChanged = function eventChanged() {
      if (this.isAttached) {
        this.unsubscribeEvent();
        this.subscribeEvent();
      }
    };

    _MaterialToast.prototype.attached = function attached() {
      this.isAttached = true;
      this.subscribeEvent();
    };

    _MaterialToast.prototype.detached = function detached() {
      this.unsubscribeEvent();
      this.isAttached = false;
    };

    _MaterialToast.prototype.subscribeEvent = function subscribeEvent() {
      var _this = this;

      if (this.event) {
        this.eventDisposal = this.eventAggregator.subscribe(this.event, function (message) {
          _this.show(message);
        });
      }
    };

    _MaterialToast.prototype.unsubscribeEvent = function unsubscribeEvent() {
      if (this.eventDisposal) {
        this.eventDisposal();
        this.eventDisposal = null;
      }
    };

    _MaterialToast.prototype.show = function show(model) {
      var _this2 = this;

      var view = this.viewFactory.create(model);
      var html = getInnerHtml(view.fragment);

      Materialize.toast(html, this.duration, this['class'], function () {
        view.detached();
        view.unbind();
        if (_this2.onClosed) {
          _this2.onClosed();
        }
      });

      view.attached();
    };

    MaterialToast = (0, _aureliaDependencyInjection.inject)(Element, _aureliaTemplating.ViewCompiler, _aureliaTemplating.ResourceRegistry, _aureliaEventAggregator.EventAggregator, _aureliaDependencyInjection.Container)(MaterialToast) || MaterialToast;
    MaterialToast = (0, _aureliaTemplating.skipContentProcessing)(MaterialToast) || MaterialToast;
    MaterialToast = (0, _aureliaTemplating.noView)(MaterialToast) || MaterialToast;
    MaterialToast = (0, _aureliaTemplating.bindable)({ name: 'onClosed', defaultValue: null })(MaterialToast) || MaterialToast;
    MaterialToast = (0, _aureliaTemplating.bindable)({ name: 'class', defaultValue: '' })(MaterialToast) || MaterialToast;
    MaterialToast = (0, _aureliaTemplating.bindable)({ name: 'duration', defaultValue: 4000 })(MaterialToast) || MaterialToast;
    MaterialToast = (0, _aureliaTemplating.bindable)({ name: 'event', defaultValue: null })(MaterialToast) || MaterialToast;
    MaterialToast = (0, _aureliaTemplating.customElement)('material-toast')(MaterialToast) || MaterialToast;
    return MaterialToast;
  })();

  exports.MaterialToast = MaterialToast;
});