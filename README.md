The official repository has been moved [here](https://github.com/aurelia-widgets/aurelia-materialize).

# aurelia-materialize

A plugin for [Aurelia](http://aurelia.io) that integrate JS features from [Materialize CSS](http://materializecss.com/).

> To keep up to date on [Aurelia](http://www.aurelia.io/), please visit and subscribe to [the official blog](http://blog.durandal.io/). If you have questions, we invite you to join us on [our Gitter Channel](https://gitter.im/aurelia/discuss).

##Documentation

###Collapsible

Put the ```material-collapsible``` attribute on a ```ul``` element acting as the
container of a collapsible list structure to enable the ```collapsible``` widget:

``` html
<ul class="collapsible" material-collapsible="accordion: true">
  <li>
    <div class="collapsible-header"><i class="mdi-image-filter-drama"></i>First</div>
    <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
  </li>
  <li>
    <div class="collapsible-header"><i class="mdi-maps-place"></i>Second</div>
    <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
  </li>
</ul>
```

As shown in the example above, you can specify the ```accordion``` option
(check the [documentation](http://materializecss.com/collapsible.html)).
If omitted, its default value is ```false```.

###Select

Put the ```material-select``` attribute on a ```select``` element to
style the select as a materialize select:

``` html
<select value.bind="selectedValue" material-select>
  <option repeat.for="value of values" value.bind="value">${value}</option>
</select>
```

###Side Nav

Put the ```material-side-nav``` attribute on an anchor acting as a button collapse
to activate the side nav widget:

``` html
  <ul id="slide-out" class="side-nav">
    <li><a href="#!">First Sidebar Link</a></li>
    <li><a href="#!">Second Sidebar Link</a></li>
  </ul>
  <a href="#" data-activates="slide-out" class="button-collapse" material-side-nav>
    <i class="mdi-navigation-menu"></i>
  </a>
```

You can specify options for the side nav (check the [documentation](http://materializecss.com/side-nav.html)):

``` html
  <a href="#" data-activates="slide-out" class="button-collapse" material-side-nav="menu-width: 400; edge: 'right';">
    <i class="mdi-navigation-menu"></i>
  </a>
```

Since we are in a SPA context, the ```closeOnClick``` option is ```true``` by default, but can be changed as the other options:

``` html
  <a href="#" data-activates="slide-out" class="button-collapse" material-side-nav="menu-width: 400; edge: 'right'; close-on-click: false;">
    <i class="mdi-navigation-menu"></i>
  </a>
```

Here's an example of the HTML structure to define a submenu inside a menu. The menu is always visible at the top on big screens, and falls back as a sliding out left menu on smaller screens.. To make the submenu work, it uses the ```material-collapsible```
attribute in slide out mode and the ```material-dropdown``` attribute in top menu mode.

``` html
<ul id="slide-out" class="side-nav">
    <li><a href="#!">First Sidebar Link</a></li>
    <li><a href="#!">Second Sidebar Link</a></li>
    <li class="no-padding">
      <ul class="collapsible collapsible-accordion" material-collapsible>
        <li>
          <a class="collapsible-header">Dropdown<i class="mdi-navigation-arrow-drop-down" ></i></a>
          <div class="collapsible-body">
            <ul>
              <li><a href="#!">First</a></li>
              <li><a href="#!">Second</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </li>
  </ul>
  <ul class="right hide-on-med-and-down">
    <li><a href="#!">First Sidebar Link</a></li>
    <li><a href="#!">Second Sidebar Link</a></li>
    <li>
	    <a class="dropdown-button" href="#!" data-activates="dropdown1" material-dropdown>Dropdown<i class="mdi-navigation-arrow-drop-down right"></i></a>
	    <ul id='dropdown1' class='dropdown-content'>
        <li><a href="#!">First</a></li>
        <li><a href="#!">Second</a></li>
      </ul>
	  </li>
  </ul>
  <a href="#" data-activates="slide-out" class="button-collapse" material-side-nav><i class="mdi-navigation-menu"></i></a>
```

###Toast

Add a ```<material-toast>``` element to declare a toast that can be displayed by your application.
Then bind the ```<material-toast>``` element to an event (see the [documentation](http://aurelia.io/docs.html#the-event-aggregator)),
and the toast will be displayed when the appropriate event is published. The content of the ```<material-toast>``` will
be compiled and bound on the fly to the event payload.

In the following example, the view model's ```failLogin``` method will publish an
event with a payload containing the error message and, in the view, a ```material-toast```
will subscribe to this event and show itself when the event is published:

``` javascript
import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

export class ViewModel {
  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
  }

  failLogin(reason) {
    eventAggregator.publish('login:failed', { message: reason });
  }
}
```

``` html
<material-toast event="login:failed" duration="4000" class="rounded">
  <p><i class="mdi-alert-error"></i> ${message}</p>
</material-toast>
```

As you can see in the above example, you can specify the duration and the CSS class
for the toast.

Additionally, you can pass to the ```on-closed``` property (using the
```.call``` [command](http://aurelia.io/docs.html#event-modes)) a method that will
be executed when the toast has disappeared.

###Dropdown

Add a ```material-dropdown``` attribute on an anchor acting as a dropdown button
to activate the dropdown widget:

``` javascript
export class ViewModel {
  action = ['Edit', 'Delete', 'Export'];
  
  perform(action) {
    // do something based on provided action type
  }
}
```

``` html
<a class="dropdown-button btn" href="#" data-activates="platforms" material-dropdown>Actions</a>
<ul id="platforms" class="dropdown-content">
  <li repeat.for="action of actions">
    <a href="#" click.delegate="$parent.perform(action)">${action}</a>
  </li>
</ul>
```

In the example above, a dropdown button will display a list of actions. A click on
one of those actions will call the ```perform``` method on the view model, with the
selected action passed as an argument.

You can pass all the options supported by the original widget (check the [documentation](http://materializecss.com/dropdown.html))
as properties for the attribute: ```in-duration```, ```out-duration```, ```constrain-width```,
```hover```, ```gutter``` and ```below-origin```.

## Integration with aurelia-validation

You can easily integrate aurelia-materialize with [aurelia-validation](https://github.com/aurelia/validation). In your application's ```configure``` method, first load aurelia-materialize, then load aurelia-validation and provide a configuration callback that will tell to the validation plugin to use aurelia-materialize's view strategy to provide visual feedback.

``` javascript
import {MaterialValidationViewStrategy} from 'aurelia-materialize';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-materialize')
    .plugin('aurelia-validation', config => { config.useViewStrategy(new MaterialValidationViewStrategy()); });

  aurelia.start().then(a => a.setRoot());
}
```

## Dependencies

* [aurelia-dependency-injection](https://github.com/aurelia/dependency-injection)
* [aurelia-binding](https://github.com/aurelia/binding)
* [aurelia-templating](https://github.com/aurelia/templating)

## Used By

This library isn't used by Aurelia. It is an optional plugin.

## Platform Support

This library can be used in the **browser**.

## Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

	```shell
	npm install
	```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

	```shell
	npm install -g gulp
	```
4. To build the code, you can now run:

	```shell
	gulp build
	```
5. You will find the compiled code in the `dist` folder, available in three module formats: AMD, CommonJS and ES6.

6. See `gulpfile.js` for other tasks related to generating the docs and linting.

## Running The Tests

To run the unit tests, first ensure that you have followed the steps above in order to install all dependencies and successfully build the library. Once you have done that, proceed with these additional steps:

1. Ensure that the [Karma](http://karma-runner.github.io/) CLI is installed. If you need to install it, use the following command:

	```shell
	npm install -g karma-cli
	```
2. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following commnand:

	```shell
	npm install -g jspm
	```
3. Download the [SystemJS](https://github.com/systemjs/systemjs) module loader:

	```shell
	jspm dl-loader
	```

4. You can now run the tests with this command:

	```shell
	karma start
	```
