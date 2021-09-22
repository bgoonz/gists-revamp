Form properties and methods
===========================

Forms and control elements, such as `<input>` have a lot of special properties and events.

Working with forms will be much more convenient when we learn them.

Navigation: form and elements
-----------------------------

Document forms are members of the special collection `document.forms`.

That’s a so-called *“named collection”*: it’s both named and ordered. We can use both the name or the number in the document to get the form.

`js no-beautify document.forms.my; // the form with name="my" document.forms[0]; // the first form in the document`

When we have a form, then any element is available in the named collection `form.elements`.

For instance:

\`\`\`html run height=40

\`\`\`

There may be multiple elements with the same name. This is typical with radio buttons and checkboxes.

In that case, `form.elements[name]` is a *collection*. For instance:

\`\`\`html run height=40

&lt;input type=“radio” *!*name=“age”*/!* value=“10”&gt; &lt;input type=“radio” *!*name=“age”*/!* value=“20”&gt;

\`\`\`

These navigation properties do not depend on the tag structure. All control elements, no matter how deep they are in the form, are available in `form.elements`.

\`\`\``smart header="Fieldsets as \"subforms\"" A form may have one or many`

`elements inside it. They also have`elements\` property that lists form controls inside them.

For instance:

\`\`\`html run height=80

info

\`\`\``warn header="Shorter notation:`form.name`" There's a shorter notation: we can access the element as`form\[index/name\]\`.

In other words, instead of `form.elements.login` we can write `form.login`.

That also works, but there’s a minor issue: if we access an element, and then change its `name`, then it is still available under the old name (as well as under the new one).

That’s easy to see in an example:

\`\`\`html run height=40

    That's usually not a problem, however, because we rarely change names of form elements.

Backreference: element.form
---------------------------

For any element, the form is available as `element.form`. So a form references all elements, and elements reference the form.

Here’s the picture:

![](form-navigation.svg)

For instance:

\`\`\`html run height=40

\`\`\`

Form elements
-------------

Let’s talk about form controls.

### input and textarea

We can access their value as `input.value` (string) or `input.checked` (boolean) for checkboxes.

Like this:

    input.value = "New value";
    textarea.value = "New text";

    input.checked = true; // for a checkbox or radio button

\`\``warn header="Use`textarea.value`, not`textarea.innerHTML`" Please note that even though`

…

`holds its value as nested HTML, we should never use`textarea.innerHTML\` to access it.

It stores only the HTML that was initially on the page, not the current value. \`\`\`

### select and option

A `<select>` element has 3 important properties:

1.  `select.options` – the collection of `<option>` subelements,
2.  `select.value` – the *value* of the currently selected `<option>`,
3.  `select.selectedIndex` – the *number* of the currently selected `<option>`.

They provide three different ways of setting a value for a `<select>`:

1.  Find the corresponding `<option>` element (e.g. among `select.options`) and set its `option.selected` to `true`.
2.  If we know a new value: set `select.value` to the new value.
3.  If we know the new option number: set `select.selectedIndex` to that number.

Here is an example of all three methods:

\`\`\`html run Apple Pear Banana

\`\`\`

Unlike most other controls, `<select>` allows to select multiple options at once if it has `multiple` attribute. This attribute is rarely used, though.

For multiple selected values, use the first way of setting values: add/remove the `selected` property from `<option>` subelements.

Here’s an example of how to get selected values from a multi-select:

\`\`\`html run &lt;select id=“select” *!*multiple*/!*&gt; Blues Rock Classic

\`\`\`

The full specification of the `<select>` element is available in the specification <a href="https://html.spec.whatwg.org/multipage/forms.html#the-select-element" class="uri">https://html.spec.whatwg.org/multipage/forms.html#the-select-element</a>.

### new Option

In the [specification](https://html.spec.whatwg.org/multipage/forms.html#the-option-element) there’s a nice short syntax to create an `<option>` element:

    option = new Option(text, value, defaultSelected, selected);

This syntax is optional. We can use `document.createElement('option')` and set attributes manually. Still, it may be shorter, so here are the parameters:

-   `text` – the text inside the option,
-   `value` – the option value,
-   `defaultSelected` – if `true`, then `selected` HTML-attribute is created,
-   `selected` – if `true`, then the option is selected.

The difference between `defaultSelected` and `selected` is that `defaultSelected` sets the HTML-attribute (that we can get using `option.getAttribute('selected')`, while `selected` sets whether the option is selected or not.

In practice, one should usually set *both* values to `true` or `false`. (Or, simply omit them; both default to `false`.)

For instance, here’s a new “unselected” option:

    let option = new Option("Text", "value");
    // creates <option value="value">Text</option>

The same option, but selected:

    let option = new Option("Text", "value", true, true);

Option elements have properties:

`option.selected`  
Is the option selected.

`option.index`  
The number of the option among the others in its `<select>`.

`option.text`  
Text content of the option (seen by the visitor).

References
----------

-   Specification: <a href="https://html.spec.whatwg.org/multipage/forms.html" class="uri">https://html.spec.whatwg.org/multipage/forms.html</a>.

Summary
-------

Form navigation:

`document.forms`  
A form is available as `document.forms[name/index]`.

`form.elements`  
Form elements are available as `form.elements[name/index]`, or can use just `form[name/index]`. The `elements` property also works for `<fieldset>`.

`element.form`  
Elements reference their form in the `form` property.

Value is available as `input.value`, `textarea.value`, `select.value`, etc. (For checkboxes and radio buttons, use `input.checked` to determine whether a value is selected.)

For `<select>`, one can also get the value by the index `select.selectedIndex` or through the options collection `select.options`.

These are the basics to start working with forms. We’ll meet many examples further in the tutorial.

In the next chapter we’ll cover `focus` and `blur` events that may occur on any element, but are mostly handled on forms.
