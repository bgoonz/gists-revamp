libs: - d3 - domtree

------------------------------------------------------------------------

Selection and Range
===================

In this chapter we’ll cover selection in the document, as well as selection in form fields, such as `<input>`.

JavaScript can access an existing selection, select/deselect DOM nodes as a whole or partially, remove the selected content from the document, wrap it into a tag, and so on.

You can find some recipes for common tasks at the end of the chapter, in “Summary” section. Maybe that covers your current needs, but you’ll get much more if you read the whole text.

The underlying `Range` and `Selection` objects are easy to grasp, and then you’ll need no recipes to make them do what you want.

Range
-----

The basic concept of selection is [Range](https://dom.spec.whatwg.org/#ranges), that is essentially a pair of “boundary points”: range start and range end.

A `Range` object is created without parameters:

    let range = new Range();

Then we can set the selection boundaries using `range.setStart(node, offset)` and `range.setEnd(node, offset)`.

As you might guess, further we’ll use the `Range` objects for selection, but first let’s create few such objects.

### Selecting the text partially

The interesting thing is that the first argument `node` in both methods can be either a text node or an element node, and the meaning of the second argument depends on that.

**If `node` is a text node, then `offset` must be the position in its text.**

For example, given the element `<p>Hello</p>`, we can create the range containing the letters “ll” as follows:

\`\`\`html run

Hello

\`\`\`

Here we take the first child of `<p>` (that’s the text node) and specify the text positions inside it:

![](range-hello-1.svg)

### Selecting element nodes

**Alternatively, if `node` is an element node, then `offset` must be the child number.**

That’s handy for making ranges that contain nodes as a whole, not stop somewhere inside their text.

For example, we have a more complex document fragment:

`html autorun <p id="p">Example: <i>italic</i> and         <b>bold</b></p>`

Here’s its DOM structure with both element and text nodes:

Let’s make a range for `"Example: <i>italic</i>"`.

As we can see, this phrase consists of exactly two children of `<p>`, with indexes `0` and `1`:

![](range-example-p-0-1.svg)

-   The starting point has `<p>` as the parent `node`, and `0` as the offset.

    So we can set it as `range.setStart(p, 0)`.

-   The ending point also has `<p>` as the parent `node`, but `2` as the offset (it specifies the range up to, but not including `offset`).

    So we can set it as `range.setEnd(p, 2)`.

Here’s the demo. If you run it, you can see that the text gets selected:

\`\`\`html run

Example: *italic* and **bold**

\`\`\`

Here’s a more flexible test stand where you can set range start/end numbers and explore other variants:

\`\`\`html run autorun

Example: *italic* and **bold**

From – To

Click to select

\`\`\`

E.g. selecting in the same `<p>` from offset `1` to `4` gives us the range `<i>italic</i> and <b>bold</b>`:

![](range-example-p-1-3.svg)

`` smart header="Starting and ending nodes can be different" We don't have         to use the same node in `setStart` and `setEnd`. A range may span across         many unrelated nodes. It's only important that the end is after the         start in the document. ``

### Selecting a bigger fragment

Let’s make a bigger selection in our example, like this:

![](range-example-p-2-b-3.svg)

We already know how to do that. We just need to set the start and the end as a relative offset in text nodes.

We need to create a range, that: - starts from position 2 in `<p>` first child (taking all but two first letters of “Ex**ample:**”) - ends at the position 3 in `<b>` first child (taking first three letters of “**bol**d”, but no more):

\`\`\`html run

Example: *italic* and **bold**

\`\`\`

As you can see, it’s fairly easy to make a range of whatever we want.

If we’d like to take nodes as a whole, we can pass elements in `setStart/setEnd`. Otherwise, we can work on the text level.

Range properties
----------------

The range object that we created in the example above has following properties:

![](range-example-p-2-b-3-range.svg)

-   `startContainer`, `startOffset` – node and offset of the start,
    -   in the example above: first text node inside `<p>` and `2`.
-   `endContainer`, `endOffset` – node and offset of the end,
    -   in the example above: first text node inside `<b>` and `3`.
-   `collapsed` – boolean, `true` if the range starts and ends on the same point (so there’s no content inside the range),
    -   in the example above: `false`
-   `commonAncestorContainer` – the nearest common ancestor of all nodes within the range,
    -   in the example above: `<p>`

Range selection methods
-----------------------

There are many convenience methods to manipulate ranges.

We’ve already seen `setStart` and `setEnd`, here are other similar methods.

Set range start:

-   `setStart(node, offset)` set start at: position `offset` in `node`
-   `setStartBefore(node)` set start at: right before `node`
-   `setStartAfter(node)` set start at: right after `node`

Set range end (similar methods):

-   `setEnd(node, offset)` set end at: position `offset` in `node`
-   `setEndBefore(node)` set end at: right before `node`
-   `setEndAfter(node)` set end at: right after `node`

Technically, `setStart/setEnd` can do anything, but more methods provide more convenience.

In all these methods, `node` can be both a text or element node: for text nodes `offset` skips that many of characters, while for element nodes that many child nodes.

Even more methods to create ranges: - `selectNode(node)` set range to select the whole `node` - `selectNodeContents(node)` set range to select the whole `node` contents - `collapse(toStart)` if `toStart=true` set end=start, otherwise set start=end, thus collapsing the range - `cloneRange()` creates a new range with the same start/end

Range editing methods
---------------------

Once the range is created, we can manipulate its content using these methods:

-   `deleteContents()` – remove range content from the document
-   `extractContents()` – remove range content from the document and return as [DocumentFragment](info:modifying-document#document-fragment)
-   `cloneContents()` – clone range content and return as [DocumentFragment](info:modifying-document#document-fragment)
-   `insertNode(node)` – insert `node` into the document at the beginning of the range
-   `surroundContents(node)` – wrap `node` around range content. For this to work, the range must contain both opening and closing tags for all elements inside it: no partial ranges like `<i>abc`.

With these methods we can do basically anything with selected nodes.

Here’s the test stand to see them in action:

\`\`\`html run refresh autorun height=260 Click buttons to run methods on the selection, “resetExample” to reset it.

Example: *italic* and **bold**

\`\`\`

There also exist methods to compare ranges, but these are rarely used. When you need them, please refer to the [spec](https://dom.spec.whatwg.org/#interface-range) or [MDN manual](mdn:/api/Range).

Selection
---------

`Range` is a generic object for managing selection ranges. Although, creating a `Range` doesn’t mean that we see a selection on screen.

We may create `Range` objects, pass them around – they do not visually select anything on their own.

The document selection is represented by `Selection` object, that can be obtained as `window.getSelection()` or `document.getSelection()`. A selection may include zero or more ranges. At least, the [Selection API specification](https://www.w3.org/TR/selection-api/) says so. In practice though, only Firefox allows to select multiple ranges in the document by using `key:Ctrl+click` (`key:Cmd+click` for Mac).

Here’s a screenshot of a selection with 3 ranges, made in Firefox:

![](selection-firefox.svg)

Other browsers support at maximum 1 range. As we’ll see, some of `Selection` methods imply that there may be many ranges, but again, in all browsers except Firefox, there’s at maximum 1.

Here’s a small demo that shows the current selection (select something and click) as text:

alert(document.getSelection())

Selection properties
--------------------

As said, a selection may in theory contain multiple ranges. We can get these range objects using the method:

-   `getRangeAt(i)` – get i-th range, starting from `0`. In all browsers except Firefox, only `0` is used.

Also, there exist properties that often provide better convenience.

Similar to a range, a selection object has a start, called “anchor”, and the end, called “focus”.

The main selection properties are:

-   `anchorNode` – the node where the selection starts,
-   `anchorOffset` – the offset in `anchorNode` where the selection starts,
-   `focusNode` – the node where the selection ends,
-   `focusOffset` – the offset in `focusNode` where the selection ends,
-   `isCollapsed` – `true` if selection selects nothing (empty range), or doesn’t exist.
-   `rangeCount` – count of ranges in the selection, maximum `1` in all browsers except Firefox.

\`\`\`smart header=“Selection end/start vs Range”

There’s an important differences of a selection anchor/focus compared with a `Range` start/end.

As we know, `Range` objects always have their start before the end.

For selections, that’s not always the case.

Selecting something with a mouse can be done in both directions: either “left-to-right” or “right-to-left”.

In other words, when the mouse button is pressed, and then it moves forward in the document, then its end (focus) will be after its start (anchor).

E.g. if the user starts selecting with mouse and goes from “Example” to “italic”:

![](selection-direction-forward.svg)

…But the same selection could be done backwards: starting from “italic” to “Example” (backward direction), then its end (focus) will be before the start (anchor):

![](selection-direction-backward.svg) \`\`\`

Selection events
----------------

There are events on to keep track of selection:

-   `elem.onselectstart` – when a selection *starts* specifically on element `elem` (or inside it). For instance, when the user presses the mouse button on it and starts to move the pointer.
    -   Preventing the default action cancels the selection start. So starting a selection from this element becomes impossible, but the element is still selectable. The visitor just needs to start the selection from elsewhere.
-   `document.onselectionchange` – whenever a selection changes or starts.
    -   Please note: this handler can be set only on `document`, it tracks all selections in it.

### Selection tracking demo

Here’s a small demo. It tracks the current selection on the `document` and shows its boundaries:

\`\`\`html run height=80

Select me: *italic* and **bold**

From – To

\`\`\`

### Selection copying demo

There are two approaches to copying the selected content:

1.  We can use `document.getSelection().toString()` to get it as text.
2.  Otherwise, to copy the full DOM, e.g. if we need to keep formatting, we can get the underlying ranges with `getRangesAt(...)`. A `Range` object, in turn, has `cloneContents()` method that clones its content and returns as `DocumentFragment` object, that we can insert elsewhere.

Here’s the demo of copying the selected content both as text and as DOM nodes:

\`\`\`html run height=100

Select me: *italic* and **bold**

Cloned: <span id="cloned"></span>  
As text: <span id="astext"></span>

\`\`\`

Selection methods
-----------------

We can work with the selection by addding/removing ranges:

-   `getRangeAt(i)` – get i-th range, starting from `0`. In all browsers except Firefox, only `0` is used.
-   `addRange(range)` – add `range` to selection. All browsers except Firefox ignore the call, if the selection already has an associated range.
-   `removeRange(range)` – remove `range` from the selection.
-   `removeAllRanges()` – remove all ranges.
-   `empty()` – alias to `removeAllRanges`.

There are also convenience methods to manipulate the selection range directly, without intermediate `Range` calls:

-   `collapse(node, offset)` – replace selected range with a new one that starts and ends at the given `node`, at position `offset`.
-   `setPosition(node, offset)` – alias to `collapse`.
-   `collapseToStart()` - collapse (replace with an empty range) to selection start,
-   `collapseToEnd()` - collapse to selection end,
-   `extend(node, offset)` - move focus of the selection to the given `node`, position `offset`,
-   `setBaseAndExtent(anchorNode, anchorOffset, focusNode,           focusOffset)` - replace selection range with the given start `anchorNode/anchorOffset` and end `focusNode/focusOffset`. All content in-between them is selected.
-   `selectAllChildren(node)` – select all children of the `node`.
-   `deleteFromDocument()` – remove selected content from the document.
-   `containsNode(node, allowPartialContainment = false)` – checks whether the selection contains `node` (partially if the second argument is `true`)

For most tasks these methods are just fine, there’s no need to access the underlying `Range` object.

For example, selecting the whole contents of the paragraph `<p>`:

\`\`\`html run

Select me: *italic* and **bold**

\`\`\`

The same thing using ranges:

\`\`\`html run

Select me: *italic* and **bold**

\`\`\`

\`\``smart header="To select something, remove the existing selection first"         If a document selection already exists, empty it first with`removeAllRanges()\`. And then add ranges. Otherwise, all browsers except Firefox ignore new ranges.

The exception is some selection methods, that replace the existing selection, such as `setBaseAndExtent`. \`\`\`

Selection in form controls
--------------------------

Form elements, such as `input` and `textarea` provide [special API for selection](https://html.spec.whatwg.org/#textFieldSelection), without `Selection` or `Range` objects. As an input value is a pure text, not HTML, there’s no need for such objects, everything’s much simpler.

Properties: - `input.selectionStart` – position of selection start (writeable), - `input.selectionEnd` – position of selection end (writeable), - `input.selectionDirection` – selection direction, one of: “forward”, “backward” or “none” (if e.g. selected with a double mouse click),

Events: - `input.onselect` – triggers when something is selected.

Methods:

-   `input.select()` – selects everything in the text control (can be `textarea` instead of `input`),
-   `input.setSelectionRange(start, end, [direction])` – change the selection to span from position `start` till `end`, in the given direction (optional).
-   `input.setRangeText(replacement, [start], [end],             [selectionMode])` – replace a range of text with the new text.

    Optional arguments `start` and `end`, if provided, set the range start and end, otherwise user selection is used.

    The last argument, `selectionMode`, determines how the selection will be set after the text has been replaced. The possible values are:

    -   `"select"` – the newly inserted text will be selected.
    -   `"start"` – the selection range collapses just before the inserted text (the cursor will be immediately before it).
    -   `"end"` – the selection range collapses just after the inserted text (the cursor will be right after it).
    -   `"preserve"` – attempts to preserve the selection. This is the default.

Now let’s see these methods in action.

### Example: tracking selection

For example, this code uses `onselect` event to track selection:

\`\`\`html run autorun

Selecting in this text updates values below.

  
From – To

\`\`\`

Please note: - `onselect` triggers when something is selected, but not when the selection is removed. - `document.onselectionchange` event should not trigger for selections inside a form control, according to the [spec](https://w3c.github.io/selection-api/#dfn-selectionchange), as it’s not related to `document` selection and ranges. Some browsers generate it, but we shouldn’t rely on it.

### Example: moving cursor

We can change `selectionStart` and `selectionEnd`, that sets the selection.

An important edge case is when `selectionStart` and `selectionEnd` equal each other. Then it’s exactly the cursor position. Or, to rephrase, when nothing is selected, the selection is collapsed at the cursor position.

So, by setting `selectionStart` and `selectionEnd` to the same value, we move the cursor.

For example:

\`\`\`html run autorun

Focus on me, the cursor will be at position 10.

\`\`\`

### Example: modifying selection

To modify the content of the selection, we can use `input.setRangeText()` method. Of course, we can read `selectionStart/End` and, with the knowledge of the selection, change the corresponding substring of `value`, but `setRangeText` is more powerful and often more convenient.

That’s a somewhat complex method. In its simplest one-argument form it replaces the user selected range and removes the selection.

For example, here the user selection will be wrapped by `*...*`:

\`\`\`html run autorun Wrap selection in stars *…*

\`\`\`

With more arguments, we can set range `start` and `end`.

In this example we find `"THIS"` in the input text, replace it and keep the replacement selected:

\`\`\`html run autorun Replace THIS

\`\`\`

### Example: insert at cursor

If nothing is selected, or we use equal `start` and `end` in `setRangeText`, then the new text is just inserted, nothing is removed.

We can also insert something “at the cursor” using `setRangeText`.

Here’s a button that inserts `"HELLO"` at the cursor position and puts the cursor immediately after it. If the selection is not empty, then it gets replaced (we can detect it by comparing `selectionStart!=selectionEnd` and do something else instead):

\`\`\`html run autorun Insert “HELLO” at cursor

\`\`\`

Making unselectable
-------------------

To make something unselectable, there are three ways:

1.  Use CSS property `user-select: none`.

    `html run <style> #elem { user-select: none; } </style>             <div>Selectable <div id="elem">Unselectable</div>             Selectable</div>`

    This doesn’t allow the selection to start at `elem`. But the user may start the selection elsewhere and include `elem` into it.

    Then `elem` will become a part of `document.getSelection()`, so the selection actually happens, but its content is usually ignored in copy-paste.

2.  Prevent default action in `onselectstart` or `mousedown` events.

    \`\`\`html run

    Selectable
    Unselectable

    Selectable

    \`\`\`

    This prevents starting the selection on `elem`, but the visitor may start it at another element, then extend to `elem`.

    That’s convenient when there’s another event handler on the same action that triggers the select (e.g. `mousedown`). So we disable the selection to avoid conflict, still allowing `elem` contents to be copied.

3.  We can also clear the selection post-factum after it happens with `document.getSelection().empty()`. That’s rarely used, as this causes unwanted blinking as the selection appears-disappears.

References
----------

-   [DOM spec: Range](https://dom.spec.whatwg.org/#ranges)
-   [Selection API](https://www.w3.org/TR/selection-api/#dom-globaleventhandlers-onselectstart)
-   [HTML spec: APIs for the text control selections](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#textFieldSelection)

Summary
-------

We covered two different APIs for selections:

1.  For document: `Selection` and `Range` objects.
2.  For `input`, `textarea`: additional methods and properties.

The second API is very simple, as it works with text.

The most used recipes are probably:

1.  Getting the selection: \`\`\`js let selection = document.getSelection();

    let cloned = /\* element to clone the selected nodes to \*/;

    // then apply Range methods to selection.getRangeAt(0) // or, like here, to all ranges to support multi-select for (let i = 0; i &lt; selection.rangeCount; i++) { cloned.append(selection.getRangeAt(i).cloneContents()); } \`\`\`

2.  Setting the selection: \`\`\`js let selection = document.getSelection();

    // directly: selection.setBaseAndExtent(…from…to…);

    // or we can create a range and: selection.removeAllRanges(); selection.addRange(range); \`\`\`

And finally, about the cursor. The cursor position in editable elements, like `<textarea>` is always at the start or the end of the selection. We can use it to get cursor position or to move the cursor by setting `elem.selectionStart` and `elem.selectionEnd`.
