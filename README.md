# aurelia-materialize

A plugin for [Aurelia](http://aurelia.io) that integrate JS features from [Materialize CSS](http://materializecss.com/).

> To keep up to date on [Aurelia](http://www.aurelia.io/), please visit and subscribe to [the official blog](http://blog.durandal.io/). If you have questions, we invite you to join us on [our Gitter Channel](https://gitter.im/aurelia/discuss).

##Documentation

###Select

Put the ```materialize-select``` attribute on a ```select``` element to
style the select as a materialize select:

``` html
<select value.bind="selectedValue" materialize-select>
  <option repeat.for="value of values" value.bind="value">${value}</option>
</select>
```

###Side Nav

Put the ```materialize-side-nav``` attribute on an anchor acting as a button collapse
to activate the side nav widget:

``` html
  <ul id="slide-out" class="side-nav">
    <li><a href="#!">First Sidebar Link</a></li>
    <li><a href="#!">Second Sidebar Link</a></li>
  </ul>
  <a href="#" data-activates="slide-out" class="button-collapse" materialize-side-nav>
    <i class="mdi-navigation-menu"></i>
  </a>
```

You can specify options for the side nav (check the [documentation](http://materializecss.com/side-nav.html)):

``` html
  <a href="#" data-activates="slide-out" class="button-collapse" materialize-side-nav="menu-width: 400; edge: 'right';">
    <i class="mdi-navigation-menu"></i>
  </a>
```

Since we are in a SPA context, the ```closeOnClick``` option is ```true``` by default, but can be changed as the other options:

``` html
  <a href="#" data-activates="slide-out" class="button-collapse" materialize-side-nav="menu-width: 400; edge: 'right'; close-on-click: false;">
    <i class="mdi-navigation-menu"></i>
  </a>
```

## Integration with aurelia-validation

You can easily integrate aurelia-materialize with [aurelia-validation](https://github.com/aurelia/validation). In your application's ```configure``` method, first load aurelia-materialize, then load aurelia-validation and provide a configuration callback that will tell to the validation plugin to use aurelia-materialize's view strategy to provide visual feedback.

``` javascript
import {MaterializeValidationViewStrategy} from 'aurelia-materialize';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-materialize')
    .plugin('aurelia-validation', config => { config.useViewStrategy(new MaterializeValidationViewStrategy()); });

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
