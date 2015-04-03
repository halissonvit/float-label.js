float-label.js
=============

A jQuery plugin for floating form labels.

Based on a UI concept by [Matt D. Smith](https://twitter.com/mds).

Based on original implementation by [Mike Mitchel's](http://labs.mikemitchell.co.uk/FloatLabelJS/) [FloatLabelJS](https://github.com/m10l/FloatLabel.js) .

[float-label.js demo](http://halisson.me/float-label.js).

Usage
-----

Add jquery.float-label.css to your websites stylesheets and jquery.float-label.js to your scripts.

* Add jquery.float-label.js to your scripts. Example -

```html
<script src="scripts/jquery.js"></script>
<script src="scripts/jquery.float-label.js"></script>
<script src="scripts/main.js"></script>
```


* Add jquery.float-label.css to your stylesheets. Example -

```html
<link rel="stylesheet" href="styles/normalize.css">
<link rel="stylesheet" href="styles/jquery.float-label.css">
<link rel="stylesheet" href="styles/main.css">
```

* Wrap the fields you wish to effect with your chosen class. Example -

```html
<div class="float-label-wrapper">
    <label for="name">Name</label>
    <input id="name" type="text">
</div>
```

* Initialise float-label.js, passing the plugin your input/label wrapper class. Example -

```js
$( '.float-label-wrapper' ).floatLabel();
```

Customisation
-------------

As float-label.js works by using CSS classes, the animations can be tweeked within `jquery.float-label.scss` or `jquery.float-label.css`.

If the default classes conflict with the rest of your CSS for whatever reason, you can change them by passing in paramaters when you initialise the plugin. Don't forget to update `jquery.float-label.scss` or `jquery.float-label.css` with your new class names if you need to make a change.

```js
$( '.float-label-wrapper' ).floatLabel({
    populatedClass : 'custom-populated-class',
	focusedClass : 'custom-focused-class'
});
```
