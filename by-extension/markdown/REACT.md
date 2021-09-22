REACT

Search

Duplicate

Notion

REACT

<span class="notion-enable-hover" style="font-weight: 600" data-token-index="0">Hello World</span>

The smallest React example looks like this:

<span data-token-index="0">ReactDOM</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Hello, world!</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> document</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">getElementById</span><span class="token punctuation" data-token-index="0">(</span><span class="token string" data-token-index="0">'root'</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

It displays a heading saying “Hello, world!” on the page.

<a href="https://reactjs.org/redirect-to-codepen/hello-world" class="notion-link-token notion-enable-hover"><span class="link-annotation-8ddfa3cc-c562-4c66-9026-73f4c9fda2d9--714759469" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

Click the link above to open an online editor. Feel free to make some changes, and see how they affect the output. Most pages in this guide will have editable examples like this one.

How to Read This Guide

In this guide, we will examine the building blocks of React apps: elements and components. Once you master them, you can create complex apps from small reusable pieces.

TipThis guide is designed for people who prefer learning concepts step by step. If you prefer to learn by doing, check out our practical tutorial. You might find this guide and the tutorial complementary to each other.

This is the first chapter in a step-by-step guide about main React concepts. You can find a list of all its chapters in the navigation sidebar. If you’re reading this from a mobile device, you can access the navigation by pressing the button in the bottom right corner of your screen.

Every chapter in this guide builds on the knowledge introduced in earlier chapters. <span class="notion-enable-hover" style="font-weight: 600" data-token-index="1">You can learn most of React by reading the “Main Concepts” guide chapters in the order they appear in the sidebar.</span> For example, <a href="https://reactjs.org/docs/introducing-jsx.html" class="notion-link-token notion-enable-hover"><span class="link-annotation-2d58edb8-9616-4d51-a0a6-bbc4e1c8197f--903123825" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">“Introducing JSX”</span></a> is the next chapter after this one.

Knowledge Level Assumptions

React is a JavaScript library, and so we’ll assume you have a basic understanding of the JavaScript language. <span class="notion-enable-hover" style="font-weight: 600" data-token-index="1">If you don’t feel very confident, we recommend </span><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript" class="notion-link-token notion-enable-hover"><span class="link-annotation-0bbf6d4a-4b6f-413a-94fe-7f526472a918--2076891764" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">going through a JavaScript tutorial</span></a><span class="notion-enable-hover" style="font-weight: 600" data-token-index="3"> to check your knowledge level</span> and enable you to follow along this guide without getting lost. It might take you between 30 minutes and an hour, but as a result you won’t have to feel like you’re learning both React and JavaScript at the same time.

NoteThis guide occasionally uses some newer JavaScript syntax in the examples. If you haven’t worked with JavaScript in the last few years, these three points should get you most of the way.

<span class="notion-enable-hover" style="font-weight: 600" data-token-index="0">Introducing JSX</span>

Consider this variable declaration:

<span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> element </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Hello, world!</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

This funny tag syntax is neither a string nor HTML.

It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.

JSX produces React “elements”. We will explore rendering them to the DOM in the <a href="https://reactjs.org/docs/rendering-elements.html" class="notion-link-token notion-enable-hover"><span class="link-annotation-da659fc8-b248-41db-9915-8594f8f89aa0-64595501" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">next section</span></a>. Below, you can find the basics of JSX necessary to get you started.

Why JSX?

React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.

Instead of artificially separating <span class="notion-enable-hover" style="font-style: italic" data-token-index="1">technologies</span> by putting markup and logic in separate files, React <a href="https://en.wikipedia.org/wiki/Separation_of_concerns" class="notion-link-token notion-enable-hover"><span class="link-annotation-404002ff-f127-4226-ae54-191744cd2a76-375489673" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">separates </span></a><a href="https://en.wikipedia.org/wiki/Separation_of_concerns" class="notion-link-token notion-enable-hover"><span class="link-annotation-404002ff-f127-4226-ae54-191744cd2a76-375489673" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">concerns</span></a> with loosely coupled units called “components” that contain both. We will come back to components in a <a href="https://reactjs.org/docs/components-and-props.html" class="notion-link-token notion-enable-hover"><span class="link-annotation-404002ff-f127-4226-ae54-191744cd2a76-37385506" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">further section</span></a>, but if you’re not yet comfortable putting markup in JS, <a href="https://www.youtube.com/watch?v=x7cQ3mrcKaY" class="notion-link-token notion-enable-hover"><span class="link-annotation-404002ff-f127-4226-ae54-191744cd2a76--1154557323" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">this talk</span></a> might convince you otherwise.

React <a href="https://reactjs.org/docs/react-without-jsx.html" class="notion-link-token notion-enable-hover"><span class="link-annotation-19fd3a22-60b9-414e-9c87-7a6c8ba8d9a1-1067797745" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">doesn’t require</span></a> using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.

With that out of the way, let’s get started!

Embedding Expressions in JSX

In the example below, we declare a variable called <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">name</span> and then use it inside JSX by wrapping it in curly braces:

<span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> name </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'Josh Perez'</span><span class="token punctuation" data-token-index="0">;</span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> element </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Hello, </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">name</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> ReactDOM</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> element</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> document</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">getElementById</span><span class="token punctuation" data-token-index="0">(</span><span class="token string" data-token-index="0">'root'</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

You can put any valid <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions" class="notion-link-token notion-enable-hover"><span class="link-annotation-f54b7fec-2ee2-4bb7-a289-e0d14accadf0-1103433516" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">JavaScript expression</span></a> inside the curly braces in JSX. For example, <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">2 + 2</span>, <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">user.firstName</span>, or <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="7" spellcheck="false">formatName(user)</span> are all valid JavaScript expressions.

In the example below, we embed the result of calling a JavaScript function, <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">formatName(user)</span>, into an <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">&lt;h1&gt;</span> element.

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">formatName</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">user</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> user</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">firstName </span><span class="token operator" data-token-index="0">+</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">' '</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">+</span><span data-token-index="0"> user</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">lastName</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> user </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> firstName</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'Harper'</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> lastName</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'Perez'</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> element </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> Hello, </span><span class="token punctuation" data-token-index="0">{</span><span class="token function" data-token-index="0">formatName</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">user</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0">! </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> ReactDOM</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> element</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> document</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">getElementById</span><span class="token punctuation" data-token-index="0">(</span><span class="token string" data-token-index="0">'root'</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

<a href="https://reactjs.org/redirect-to-codepen/introducing-jsx" class="notion-link-token notion-enable-hover"><span class="link-annotation-b8a348c9-885d-4a5c-988e-a1ea646c8051-445505306" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

We split JSX over multiple lines for readability. While it isn’t required, when doing this, we also recommend wrapping it in parentheses to avoid the pitfalls of <a href="https://stackoverflow.com/q/2846283" class="notion-link-token notion-enable-hover"><span class="link-annotation-40423192-8f85-4b3b-8d79-5d82b3c195f8-1010948902" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">automatic semicolon insertion</span></a>.

JSX is an Expression Too

After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.

This means that you can use JSX inside of <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">if</span> statements and <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">for</span> loops, assign it to variables, accept it as arguments, and return it from functions:

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">getGreeting</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">user</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">if</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">user</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Hello, </span><span class="token punctuation" data-token-index="0">{</span><span class="token function" data-token-index="0">formatName</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">user</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0">!</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Hello, Stranger.</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">;</span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

Specifying Attributes with JSX

You may use quotes to specify string literals as attributes:

<span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> element </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">tabIndex</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">0</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

You may also use curly braces to embed a JavaScript expression in an attribute:

<span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> element </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">img</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">src</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token script language-javascript" data-token-index="0">user</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">avatarUrl</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">img</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

Don’t put quotes around curly braces when embedding a JavaScript expression in an attribute. You should either use quotes (for string values) or curly braces (for expressions), but not both in the same attribute.

Warning:Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.For example, class becomes className in JSX, and tabindex becomes tabIndex.

Specifying Children with JSX

If a tag is empty, you may close it immediately with <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">/&gt;</span>, like XML:

<span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> element </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">img</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">src</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token script language-javascript" data-token-index="0">user</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">avatarUrl</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

JSX tags may contain children:

<span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> element </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Hello!</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h2</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Good to see you here.</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h2</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

JSX Prevents Injection Attacks

It is safe to embed user input in JSX:

<span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> title </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> response</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">potentiallyMaliciousInput</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token comment" data-token-index="0">// This is safe:</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> element </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">title</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

By default, React DOM <a href="https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-on-html" class="notion-link-token notion-enable-hover"><span class="link-annotation-ab8f84d8-d484-4880-83dd-77d37ed7713b-1657480610" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">escapes</span></a> any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent <a href="https://en.wikipedia.org/wiki/Cross-site_scripting" class="notion-link-token notion-enable-hover"><span class="link-annotation-ab8f84d8-d484-4880-83dd-77d37ed7713b-342141939" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">XSS (cross-site-scripting)</span></a> attacks.

JSX Represents Objects

Babel compiles JSX down to <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">React.createElement()</span> calls.

These two examples are identical:

<span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> element </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h1</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">className</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">greeting</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> Hello, world! </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

<span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> element </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> React</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">createElement</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'h1'</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">className</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'greeting'</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'Hello, world!'</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

<span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="0" spellcheck="false">React.createElement()</span> performs a few checks to help you write bug-free code but essentially it creates an object like this:

<span class="token comment" data-token-index="0">// Note: this structure is simplified</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> element </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> type</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'h1'</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> props</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> className</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'greeting'</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> children</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'Hello, world!'</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

These objects are called “React elements”. You can think of them as descriptions of what you want to see on the screen. React reads these objects and uses them to construct the DOM and keep it up to date.

We will explore rendering React elements to the DOM in the <a href="https://reactjs.org/docs/rendering-elements.html" class="notion-link-token notion-enable-hover"><span class="link-annotation-fd15b142-aef3-48bb-b41f-7f39b551e67e-64595501" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">next section</span></a>.

Tip:We recommend using the “Babel” language definition for your editor of choice so that both ES6 and JSX code is properly highlighted.

<span class="notion-enable-hover" style="font-weight: 600" data-token-index="0">Rendering Elements</span>

Elements are the smallest building blocks of React apps.

An element describes what you want to see on the screen:

<span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">const element = &lt;h1&gt;Hello, world&lt;/h1&gt;;</span>

Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.

Note:One might confuse elements with a more widely known concept of “components”. We will introduce components in the next section. Elements are what components are “made of”, and we encourage you to read this section before jumping ahead.

Rendering an Element into the DOM

Let’s say there is a <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">&lt;div&gt;</span> somewhere in your HTML file:

<span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">id</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">root</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span>

JavaScript

We call this a “root” DOM node because everything inside it will be managed by React DOM.

Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.

To render a React element into a root DOM node, pass both to <a href="https://reactjs.org/docs/react-dom.html#render" class="notion-link-token notion-enable-hover"><span class="link-annotation-f3ccaab4-cafd-4688-9dce-1401e7795cce--1484493088" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">ReactDOM.render()</span></a>:

<span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> element </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Hello, world</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> ReactDOM</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">element</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> document</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">getElementById</span><span class="token punctuation" data-token-index="0">(</span><span class="token string" data-token-index="0">'root'</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

<a href="https://reactjs.org/redirect-to-codepen/rendering-elements/render-an-element" class="notion-link-token notion-enable-hover"><span class="link-annotation-78e52909-3c3d-42d3-b098-ea535288045e--1308434880" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

It displays “Hello, world” on the page.

Updating the Rendered Element

React elements are <a href="https://en.wikipedia.org/wiki/Immutable_object" class="notion-link-token notion-enable-hover"><span class="link-annotation-cb135ab7-39f5-482f-b661-c747f0a5d33b-11464355" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">immutable</span></a>. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

With our knowledge so far, the only way to update the UI is to create a new element, and pass it to <a href="https://reactjs.org/docs/react-dom.html#render" class="notion-link-token notion-enable-hover"><span class="link-annotation-1160293f-b1d1-4cbb-8635-6ffd3be3d5db--1484493088" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">ReactDOM.render()</span></a>.

Consider this ticking clock example:

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">tick</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> element </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Hello, world!</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h2</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">It is </span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">new</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">Date</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">toLocaleTimeString</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0">.</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h2</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> ReactDOM</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">element</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> document</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">getElementById</span><span class="token punctuation" data-token-index="0">(</span><span class="token string" data-token-index="0">'root'</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">setInterval</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">tick</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">1000</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

<a href="https://reactjs.org/redirect-to-codepen/rendering-elements/update-rendered-element" class="notion-link-token notion-enable-hover"><span class="link-annotation-66607f39-0523-42fe-bf9d-56950b2ec775--1328102155" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

It calls <a href="https://reactjs.org/docs/react-dom.html#render" class="notion-link-token notion-enable-hover"><span class="link-annotation-bc0c6eea-f24e-4a39-b929-4d902264ebd6--1484493088" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">ReactDOM.render()</span></a> every second from a <a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval" class="notion-link-token notion-enable-hover"><span class="link-annotation-bc0c6eea-f24e-4a39-b929-4d902264ebd6-1432041649" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">setInterval()</span></a> callback.

Note:In practice, most React apps only call ReactDOM.render() once. In the next sections we will learn how such code gets encapsulated into stateful components.We recommend that you don’t skip topics because they build on each other.

React Only Updates What’s Necessary

React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.

You can verify by inspecting the <a href="https://reactjs.org/redirect-to-codepen/rendering-elements/update-rendered-element" class="notion-link-token notion-enable-hover"><span class="link-annotation-bd55f246-82a5-4b8e-b806-33ebdd3beecd--1328102155" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">last example</span></a> with the browser tools:

![](data:image/gif;base64,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EQCgAM0AJgEACP8ASQgcSJBEh4IhCipcuLDAQgIMI0qcSLGixYsYM2rcSAIACRAIOYosOIBEgJEZQaJcybKlRJUuUZY8GfNlzZs4N8KcyCAnSZMsE1Tc6bNoUQQJP4YUeNCoU44ankq1qKHCwAckEBAkmnRghqlgw4qN6ZHrwoREx6pdC5amwrJLFTZlS7fu1K8DNygl2JXE154rPdgdTHirzbSFWUpIzHgi4r19G0uenJKy5cuYM2vezLmz58+gQ4seTbq06dOoU6OcKzCy6tc+4fKFTdvo49q4a94uCDi3b4pIBZplqlGwQuOeHVJEToJ55qpXsxqeTRBvRed0sf8mu3egaxJoA2//3+y2oGzvDFlrhCi1gHv341taJ6F3uMC/8ePvBrkbo/KL2vkUYFgDTvaYSt/ll19/Cjbo4IMQRijhhBRWaOGFGGao4YZ2qcehUR4O1htBek31gUAOMHYiCSniRNSIeU3YYmMz5ofBQgziVGNiO+oknEQ3KpQjYVH51CNhR66kFVaFQSdZknZBaZMAApX3mUd0SZllWFiqZeVAXbak5UJjrlUmRUN21FiYia14k5uMsRnWY2H2BqNGSZ6pYJ0DjZgmSncqFKhTemZUaE5YBTooQYt+6OijkEYq6aSUVmrppZhmqmlnTG76WYLoeeqZayF89aeok80nUKOoWjZoZEW2/0qkVRHt9FWJsmbWV1qn5tpWXN352tmuwmZmX3chMKBssZcRy+yz0EYr7bTUVmvttdhmq+22G47QGQfSesutZOKOy1i5j6Kbm7oQglshu9TCa+5A8kJb77yY3ovvvvz26++/AAcs8MAEF/zgoQavhHDCIy3M8MMbOQyxoRMTWrFREl+scWkZb+zxxyCHLPLIJJds8slq6YuyRCqvzFDL+cG8robluhtztwrJXJrOEvLsskA+Wxo0TvoOna3NpBn989JMN+3001BHLfXUJiutFtLMWl011S9LqjVnX5+GNUthr1W20AKfPanaXCfGdttwxy333HTXjRsIF1ig99589//t99+ABy744IQHfkGvEOZd+OKMN+544RdIuvcEE/StweUAEA7A5Rr4zXnmhTdQuQUANGD66YKXbvroAFA+eeWST3DAAguMbgHtuHceuAa40w46ACLgfkDhvIugN++9LwD638jjPgHyx9MegUId43a7CLNTsLcClQO/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)

Even though we create an element describing the whole UI tree on every tick, only the text node whose contents have changed gets updated by React DOM.

In our experience, thinking about how the UI should look at any given moment, rather than how to change it over time, eliminates a whole class of bugs.

<span class="notion-enable-hover" style="font-weight: 600" data-token-index="0">Components and Props</span>

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components. You can find a <a href="https://reactjs.org/docs/react-component.html" class="notion-link-token notion-enable-hover"><span class="link-annotation-b8e151c6-852d-448c-babc-03ce0e185d5d-1121691166" style="
                            border-bottom: 0.05em solid;
                            border-color: rgba(55, 53, 47, 0.4);
                            opacity: 0.7;
                          ">detailed component API reference here</span></a>.

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

Function and Class Components

The simplest way to define a component is to write a JavaScript function:

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">Welcome</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Hello, </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">name</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.

You can also use an <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes" class="notion-link-token notion-enable-hover"><span class="link-annotation-93bd827e-a627-4920-844b-9179e0f31a6a--1401231387" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">ES6 class</span></a> to define a component:

<span class="token keyword" data-token-index="0">class</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">Welcome</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">extends</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">React</span><span class="token punctuation" data-token-index="0">.</span><span class="token class-name" data-token-index="0">Component</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Hello, </span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">name</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

The above two components are equivalent from React’s point of view.

Function and Class components both have some additional features that we will discuss in the <a href="https://reactjs.org/docs/state-and-lifecycle.html" class="notion-link-token notion-enable-hover"><span class="link-annotation-bbd0a130-de3c-4d06-a990-380aa71e17be--1011996363" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">next sections</span></a>.

Rendering a Component

Previously, we only encountered React elements that represent DOM tags:

<span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> element </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

However, elements can also represent user-defined components:

<span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> element </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">Welcome</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">name</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">Sara</span><span class="token punctuation" data-token-index="0">"</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”.

For example, this code renders “Hello, Sara” on the page:

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">Welcome</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Hello, </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">name</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> element </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">Welcome</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">name</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">Sara</span><span class="token punctuation" data-token-index="0">"</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0">ReactDOM</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> element</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> document</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">getElementById</span><span class="token punctuation" data-token-index="0">(</span><span class="token string" data-token-index="0">'root'</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

<a href="https://reactjs.org/redirect-to-codepen/components-and-props/rendering-a-component" class="notion-link-token notion-enable-hover"><span class="link-annotation-01cf2c41-e782-4760-b8a3-0fe2207713cb-1228532808" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

Let’s recap what happens in this example:

<span class="pseudoBefore" style="--pseudoBefore--content: '1.'"></span>

We call <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="1" spellcheck="false">ReactDOM.render()</span> with the <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="3" spellcheck="false">&lt;Welcome name="Sara" /&gt;</span> element.

<span class="pseudoBefore" style="--pseudoBefore--content: '2.'"></span>

React calls the <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="1" spellcheck="false">Welcome</span> component with <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="3" spellcheck="false">{name: 'Sara'}</span> as the props.

<span class="pseudoBefore" style="--pseudoBefore--content: '3.'"></span>

Our <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="1" spellcheck="false">Welcome</span> component returns a <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="3" spellcheck="false">&lt;h1&gt;Hello, Sara&lt;/h1&gt;</span> element as the result.

<span class="pseudoBefore" style="--pseudoBefore--content: '4.'"></span>

React DOM efficiently updates the DOM to match <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="1" spellcheck="false">&lt;h1&gt;Hello, Sara&lt;/h1&gt;</span>.

Note: Always start component names with a capital letter.React treats components starting with lowercase letters as DOM tags. For example, &lt;div /&gt; represents an HTML div tag, but &lt;Welcome /&gt; represents a component and requires Welcome to be in scope.To learn more about the reasoning behind this convention, please read JSX In Depth.

Composing Components

Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.

For example, we can create an <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">App</span> component that renders <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">Welcome</span> many times:

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">Welcome</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Hello, </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">name</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">App</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">Welcome</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">name</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">Sara</span><span class="token punctuation" data-token-index="0">"</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">Welcome</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">name</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">Cahal</span><span class="token punctuation" data-token-index="0">"</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">Welcome</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">name</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">Edite</span><span class="token punctuation" data-token-index="0">"</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> ReactDOM</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">App</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> document</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">getElementById</span><span class="token punctuation" data-token-index="0">(</span><span class="token string" data-token-index="0">'root'</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

<a href="https://reactjs.org/redirect-to-codepen/components-and-props/composing-components" class="notion-link-token notion-enable-hover"><span class="link-annotation-03df7bef-ad0a-4ea4-a2cc-564df11da046-1493211996" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

Typically, new React apps have a single <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">App</span> component at the very top. However, if you integrate React into an existing app, you might start bottom-up with a small component like <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">Button</span> and gradually work your way to the top of the view hierarchy.

Extracting Components

Don’t be afraid to split components into smaller components.

For example, consider this <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">Comment</span> component:

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">Comment</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">className</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">Comment</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">className</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">UserInfo</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> &lt;img className="Avatar"src=</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">author</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">avatarUrl</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0">alt=</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">author</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">name</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0">/&gt; </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">className</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">UserInfo-name</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">author</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">name</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">className</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">Comment-text</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">text</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">className</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">Comment-date</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span class="token function" data-token-index="0">formatDate</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">date</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

<a href="https://reactjs.org/redirect-to-codepen/components-and-props/extracting-components" class="notion-link-token notion-enable-hover"><span class="link-annotation-60fe0a38-f3df-4936-bc5f-a5fc9032d48f--1366095846" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

It accepts <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">author</span> (an object), <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">text</span> (a string), and <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">date</span> (a date) as props, and describes a comment on a social media website.

This component can be tricky to change because of all the nesting, and it is also hard to reuse individual parts of it. Let’s extract a few components from it.

First, we will extract <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">Avatar</span>:

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">Avatar</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">img</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">className</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">Avatar</span><span class="token punctuation" data-token-index="0">"</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">src</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token script language-javascript" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">user</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">avatarUrl</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">alt</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token script language-javascript" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">user</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">name</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

The <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">Avatar</span> doesn’t need to know that it is being rendered inside a <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">Comment</span>. This is why we have given its prop a more generic name: <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">user</span> rather than <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="7" spellcheck="false">author</span>.

We recommend naming props from the component’s own point of view rather than the context in which it is being used.

We can now simplify <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">Comment</span> a tiny bit:

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">Comment</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">className</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">Comment</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">className</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">UserInfo</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">Avatar</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">user</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token script language-javascript" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">author</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">className</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">UserInfo-name</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">author</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">name</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">className</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">Comment-text</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">text</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">className</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">Comment-date</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span class="token function" data-token-index="0">formatDate</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">date</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

Next, we will extract a <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">UserInfo</span> component that renders an <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">Avatar</span> next to the user’s name:

<span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">function UserInfo(props) { return ( &lt;div className="UserInfo"&gt; &lt;Avatar user={props.user} /&gt; &lt;div className="UserInfo-name"&gt; {props.user.name} &lt;/div&gt; &lt;/div&gt; ); }</span>

This lets us simplify <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">Comment</span> even further:

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">Comment</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">className</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">Comment</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">UserInfo</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">user</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token script language-javascript" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">author</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">className</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">Comment-text</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">text</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">className</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">Comment-date</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span class="token function" data-token-index="0">formatDate</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">date</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

<a href="https://reactjs.org/redirect-to-codepen/components-and-props/extracting-components-continued" class="notion-link-token notion-enable-hover"><span class="link-annotation-c86d04bf-4bc3-4411-9b18-e85e0f89bc9b--260015446" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps. A good rule of thumb is that if a part of your UI is used several times (<span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">Button</span>, <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">Panel</span>, <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">Avatar</span>), or is complex enough on its own (<span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="7" spellcheck="false">App</span>, <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="9" spellcheck="false">FeedStory</span>, <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="11" spellcheck="false">Comment</span>), it is a good candidate to be extracted to a separate component.

Props are Read-Only

Whether you declare a component <a href="https://reactjs.org/docs/components-and-props.html#function-and-class-components" class="notion-link-token notion-enable-hover"><span class="link-annotation-7c410167-2244-45ac-8efb-63ef062ca439--252080395" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">as a function or a class</span></a>, it must never modify its own props. Consider this <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">sum</span> function:

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">sum</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">a</span><span class="token punctuation" data-token-index="0">,</span><span class="token parameter" data-token-index="0"> b</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> a </span><span class="token operator" data-token-index="0">+</span><span data-token-index="0"> b</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

Such functions are called <a href="https://en.wikipedia.org/wiki/Pure_function" class="notion-link-token notion-enable-hover"><span class="link-annotation-b02ed53d-dd6d-4852-a720-66fef5dfe35e--261446504" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">“pure”</span></a> because they do not attempt to change their inputs, and always return the same result for the same inputs.

In contrast, this function is impure because it changes its own input:

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">withdraw</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">account</span><span class="token punctuation" data-token-index="0">,</span><span class="token parameter" data-token-index="0"> amount</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> account</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">total </span><span class="token operator" data-token-index="0">-=</span><span data-token-index="0"> amount</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

React is pretty flexible but it has a single strict rule:

<span class="notion-enable-hover" style="font-weight: 600" data-token-index="0">All React components must act like pure functions with respect to their props.</span>

Of course, application UIs are dynamic and change over time. In the <a href="https://reactjs.org/docs/state-and-lifecycle.html" class="notion-link-token notion-enable-hover"><span class="link-annotation-5a338f0a-b312-468e-8e50-c8acc8a4bd98--1011996363" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">next section</span></a>, we will introduce a new concept of “state”. State allows React components to change their output over time in response to user actions, network responses, and anything else, without violating this rule.

<span class="notion-enable-hover" style="font-weight: 600" data-token-index="0">State and Lifecycle</span>

This page introduces the concept of state and lifecycle in a React component. You can find a <a href="https://reactjs.org/docs/react-component.html" class="notion-link-token notion-enable-hover"><span class="link-annotation-fda0029a-e702-4953-bb0c-9e5dd256483b-1121691166" style="
                            border-bottom: 0.05em solid;
                            border-color: rgba(55, 53, 47, 0.4);
                            opacity: 0.7;
                          ">detailed component API reference here</span></a>.

Consider the ticking clock example from <a href="https://reactjs.org/docs/rendering-elements.html#updating-the-rendered-element" class="notion-link-token notion-enable-hover"><span class="link-annotation-0870c76f-bb18-40b0-8e1d-6777464493a8--435295215" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">one of the previous sections</span></a>. In <a href="https://reactjs.org/docs/rendering-elements.html#rendering-an-element-into-the-dom" class="notion-link-token notion-enable-hover"><span class="link-annotation-0870c76f-bb18-40b0-8e1d-6777464493a8-1042118451" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Rendering Elements</span></a>, we have only learned one way to update the UI. We call <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">ReactDOM.render()</span> to change the rendered output:

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">tick</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> element </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Hello, world!</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h2</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">It is </span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">new</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">Date</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">toLocaleTimeString</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0">.</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h2</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> ReactDOM</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> element</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> document</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">getElementById</span><span class="token punctuation" data-token-index="0">(</span><span class="token string" data-token-index="0">'root'</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">setInterval</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">tick</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">1000</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

<a href="https://codepen.io/gaearon/pen/gwoJZk?editors=0010" class="notion-link-token notion-enable-hover"><span class="link-annotation-5f64a4c3-59bb-49f4-99f5-fd77cbd25a64-1583277143" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

In this section, we will learn how to make the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">Clock</span> component truly reusable and encapsulated. It will set up its own timer and update itself every second.

We can start by encapsulating how the clock looks:

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">Clock</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Hello, world!</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h2</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">It is </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">date</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">toLocaleTimeString</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0">.</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h2</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">tick</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> ReactDOM</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">Clock</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">date</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">new</span><span class="token script language-javascript" data-token-index="0"> </span><span class="token class-name" data-token-index="0">Date</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> document</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">getElementById</span><span class="token punctuation" data-token-index="0">(</span><span class="token string" data-token-index="0">'root'</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">setInterval</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">tick</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">1000</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

<a href="https://codepen.io/gaearon/pen/dpdoYR?editors=0010" class="notion-link-token notion-enable-hover"><span class="link-annotation-588786a6-13d5-4dc4-933d-031b00712ccc-1336343715" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

<embed src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Asketch%3D%22http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%2Fns%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%20data-ember-extension%3D%221%22%3E%3Cdefs%3E%3ClinearGradient%20x1%3D%2228.1542969%25%22%20y1%3D%2263.7402344%25%22%20x2%3D%2274.6289062%25%22%20y2%3D%2217.7832031%25%22%20id%3D%22linearGradient-1%22%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%200)%22%20stop-opacity%3D%220%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20%3E%3Cg%20transform%3D%22translate(-236.000000%2C%20-286.000000)%22%3E%3Cg%20transform%3D%22translate(238.000000%2C%20286.000000)%22%3E%3Ccircle%20id%3D%22Oval-2%22%20stroke%3D%22url(%23linearGradient-1)%22%20stroke-width%3D%224%22%20cx%3D%2210%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%3Cpath%20d%3D%22M10%2C2%20C4.4771525%2C2%200%2C6.4771525%200%2C12%22%20id%3D%22Oval-2%22%20stroke%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20stroke-width%3D%224%22%2F%3E%3Crect%20id%3D%22Rectangle-1%22%20fill%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20x%3D%228%22%20y%3D%220%22%20width%3D%224%22%20height%3D%224%22%20rx%3D%228%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" class="loading-spinner" />

However, it misses a crucial requirement: the fact that the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">Clock</span> sets up a timer and updates the UI every second should be an implementation detail of the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">Clock</span>.

Ideally we want to write this once and have the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">Clock</span> update itself:

<span data-token-index="0">ReactDOM</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">Clock</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> document</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">getElementById</span><span class="token punctuation" data-token-index="0">(</span><span class="token string" data-token-index="0">'root'</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

To implement this, we need to add “state” to the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">Clock</span> component.

State is similar to props, but it is private and fully controlled by the component.

Converting a Function to a Class

You can convert a function component like <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">Clock</span> to a class in five steps:

<span class="pseudoBefore" style="--pseudoBefore--content: '1.'"></span>

Create an <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes" class="notion-link-token notion-enable-hover"><span class="link-annotation-8fe1ceac-6ebf-40b6-bed8-6aec31a1384e--1401231387" style="
                                border-bottom: 0.05em solid;
                                border-color: rgba(55, 53, 47, 0.4);
                                opacity: 0.7;
                              ">ES6 class</span></a>, with the same name, that extends <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="3" spellcheck="false">React.Component</span>.

<span class="pseudoBefore" style="--pseudoBefore--content: '2.'"></span>

Add a single empty method to it called <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="1" spellcheck="false">render()</span>.

<span class="pseudoBefore" style="--pseudoBefore--content: '3.'"></span>

Move the body of the function into the <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="1" spellcheck="false">render()</span> method.

<span class="pseudoBefore" style="--pseudoBefore--content: '4.'"></span>

Replace <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="1" spellcheck="false">props</span> with <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="3" spellcheck="false">this.props</span> in the <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="5" spellcheck="false">render()</span> body.

<span class="pseudoBefore" style="--pseudoBefore--content: '5.'"></span>

Delete the remaining empty function declaration.

<span class="token keyword" data-token-index="0">class</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">Clock</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">extends</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">React</span><span class="token punctuation" data-token-index="0">.</span><span class="token class-name" data-token-index="0">Component</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Hello, world!</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h2</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">It is </span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">date</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">toLocaleTimeString</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0">.</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h2</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

<a href="https://codepen.io/gaearon/pen/zKRGpo?editors=0010" class="notion-link-token notion-enable-hover"><span class="link-annotation-a0c498ad-2ac8-4bfc-aec2-3f2e7c4f1b74-1364185262" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

<embed src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Asketch%3D%22http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%2Fns%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%20data-ember-extension%3D%221%22%3E%3Cdefs%3E%3ClinearGradient%20x1%3D%2228.1542969%25%22%20y1%3D%2263.7402344%25%22%20x2%3D%2274.6289062%25%22%20y2%3D%2217.7832031%25%22%20id%3D%22linearGradient-1%22%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%200)%22%20stop-opacity%3D%220%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20%3E%3Cg%20transform%3D%22translate(-236.000000%2C%20-286.000000)%22%3E%3Cg%20transform%3D%22translate(238.000000%2C%20286.000000)%22%3E%3Ccircle%20id%3D%22Oval-2%22%20stroke%3D%22url(%23linearGradient-1)%22%20stroke-width%3D%224%22%20cx%3D%2210%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%3Cpath%20d%3D%22M10%2C2%20C4.4771525%2C2%200%2C6.4771525%200%2C12%22%20id%3D%22Oval-2%22%20stroke%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20stroke-width%3D%224%22%2F%3E%3Crect%20id%3D%22Rectangle-1%22%20fill%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20x%3D%228%22%20y%3D%220%22%20width%3D%224%22%20height%3D%224%22%20rx%3D%228%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" class="loading-spinner" />

<span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="0" spellcheck="false">Clock</span> is now defined as a class rather than a function.

The <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">render</span> method will be called each time an update happens, but as long as we render <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">&lt;Clock /&gt;</span> into the same DOM node, only a single instance of the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">Clock</span> class will be used. This lets us use additional features such as local state and lifecycle methods.

Adding Local State to a Class

We will move the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">date</span> from props to state in three steps:

<span class="pseudoBefore" style="--pseudoBefore--content: '1.'"></span>

Replace <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="1" spellcheck="false">this.props.date</span> with <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="3" spellcheck="false">this.state.date</span> in the <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="5" spellcheck="false">render()</span> method:

<span class="token keyword" data-token-index="0">class</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">Clock</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">extends</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">React</span><span class="token punctuation" data-token-index="0">.</span><span class="token class-name" data-token-index="0">Component</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Hello, world!</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h2</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">It is </span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">date</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">toLocaleTimeString</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0">.</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h2</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

<span class="pseudoBefore" style="--pseudoBefore--content: '1.'"></span>

Add a <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes#Constructor" class="notion-link-token notion-enable-hover"><span class="link-annotation-803b5fd8-2b3e-4fb8-84fb-f903ca44bf74-1838371900" style="
                                border-bottom: 0.05em solid;
                                border-color: rgba(55, 53, 47, 0.4);
                                opacity: 0.7;
                              ">class constructor</span></a> that assigns the initial <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="3" spellcheck="false">this.state</span>:

<span class="token keyword" data-token-index="0">class</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">Clock</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">extends</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">React</span><span class="token punctuation" data-token-index="0">.</span><span class="token class-name" data-token-index="0">Component</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">constructor</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">super</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">date</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">new</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">Date</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Hello, world!</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h2</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">It is </span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">date</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">toLocaleTimeString</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0">.</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h2</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

Note how we pass <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">props</span> to the base constructor:

<span data-token-index="0"> </span><span class="token function" data-token-index="0">constructor</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">super</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">date</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">new</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">Date</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

Class components should always call the base constructor with <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">props</span>.

<span class="pseudoBefore" style="--pseudoBefore--content: '1.'"></span>

Remove the <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="1" spellcheck="false">date</span> prop from the <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="3" spellcheck="false">&lt;Clock /&gt;</span> element:

<span data-token-index="0">ReactDOM</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">Clock</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> document</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">getElementById</span><span class="token punctuation" data-token-index="0">(</span><span class="token string" data-token-index="0">'root'</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

We will later add the timer code back to the component itself.

The result looks like this:

<span class="token keyword" data-token-index="0">class</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">Clock</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">extends</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">React</span><span class="token punctuation" data-token-index="0">.</span><span class="token class-name" data-token-index="0">Component</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">constructor</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">super</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">date</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">new</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">Date</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Hello, world!</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h2</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">It is </span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">date</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">toLocaleTimeString</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0">.</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h2</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> ReactDOM</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">Clock</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> document</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">getElementById</span><span class="token punctuation" data-token-index="0">(</span><span class="token string" data-token-index="0">'root'</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

<a href="https://codepen.io/gaearon/pen/KgQpJd?editors=0010" class="notion-link-token notion-enable-hover"><span class="link-annotation-e5164a8d-601f-43df-a264-f183ed20a994--745155362" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

<embed src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Asketch%3D%22http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%2Fns%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%20data-ember-extension%3D%221%22%3E%3Cdefs%3E%3ClinearGradient%20x1%3D%2228.1542969%25%22%20y1%3D%2263.7402344%25%22%20x2%3D%2274.6289062%25%22%20y2%3D%2217.7832031%25%22%20id%3D%22linearGradient-1%22%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%200)%22%20stop-opacity%3D%220%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20%3E%3Cg%20transform%3D%22translate(-236.000000%2C%20-286.000000)%22%3E%3Cg%20transform%3D%22translate(238.000000%2C%20286.000000)%22%3E%3Ccircle%20id%3D%22Oval-2%22%20stroke%3D%22url(%23linearGradient-1)%22%20stroke-width%3D%224%22%20cx%3D%2210%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%3Cpath%20d%3D%22M10%2C2%20C4.4771525%2C2%200%2C6.4771525%200%2C12%22%20id%3D%22Oval-2%22%20stroke%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20stroke-width%3D%224%22%2F%3E%3Crect%20id%3D%22Rectangle-1%22%20fill%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20x%3D%228%22%20y%3D%220%22%20width%3D%224%22%20height%3D%224%22%20rx%3D%228%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" class="loading-spinner" />

Next, we’ll make the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">Clock</span> set up its own timer and update itself every second.

Adding Lifecycle Methods to a Class

In applications with many components, it’s very important to free up resources taken by the components when they are destroyed.

We want to <a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval" class="notion-link-token notion-enable-hover"><span class="link-annotation-d35cce18-6925-4662-a31b-92cda7f98a72-1432041649" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">set up a timer</span></a> whenever the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">Clock</span> is rendered to the DOM for the first time. This is called “mounting” in React.

We also want to <a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/clearInterval" class="notion-link-token notion-enable-hover"><span class="link-annotation-10f1f851-00c6-406f-81c0-74df48ffb804--1552915172" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">clear that timer</span></a> whenever the DOM produced by the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">Clock</span> is removed. This is called “unmounting” in React.

We can declare special methods on the component class to run some code when a component mounts and unmounts:

<span class="token keyword" data-token-index="0">class</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">Clock</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">extends</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">React</span><span class="token punctuation" data-token-index="0">.</span><span class="token class-name" data-token-index="0">Component</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">constructor</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">super</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">date</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">new</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">Date</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">componentDidMount</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">componentWillUnmount</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Hello, world!</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h2</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">It is </span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">date</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">toLocaleTimeString</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0">.</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h2</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

These methods are called “lifecycle methods”.

The <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">componentDidMount()</span> method runs after the component output has been rendered to the DOM. This is a good place to set up a timer:

<span data-token-index="0"> </span><span class="token function" data-token-index="0">componentDidMount</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">timerID </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">setInterval</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">=&gt;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">tick</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">1000</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

Note how we save the timer ID right on <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">this</span> (<span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">this.timerID</span>).

While <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">this.props</span> is set up by React itself and <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">this.state</span> has a special meaning, you are free to add additional fields to the class manually if you need to store something that doesn’t participate in the data flow (like a timer ID).

We will tear down the timer in the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">componentWillUnmount()</span> lifecycle method:

<span data-token-index="0"> </span><span class="token function" data-token-index="0">componentWillUnmount</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">clearInterval</span><span class="token punctuation" data-token-index="0">(</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">timerID</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

Finally, we will implement a method called <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">tick()</span> that the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">Clock</span> component will run every second.

It will use <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">this.setState()</span> to schedule updates to the component local state:

<span class="token keyword" data-token-index="0">class</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">Clock</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">extends</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">React</span><span class="token punctuation" data-token-index="0">.</span><span class="token class-name" data-token-index="0">Component</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">constructor</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">super</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">date</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">new</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">Date</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">componentDidMount</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">timerID </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">setInterval</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">=&gt;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">tick</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">1000</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">componentWillUnmount</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">clearInterval</span><span class="token punctuation" data-token-index="0">(</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">timerID</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">tick</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">setState</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> date</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">new</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">Date</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Hello, world!</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h2</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">It is </span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">date</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">toLocaleTimeString</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0">.</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h2</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> ReactDOM</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">Clock</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> document</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">getElementById</span><span class="token punctuation" data-token-index="0">(</span><span class="token string" data-token-index="0">'root'</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

<a href="https://codepen.io/gaearon/pen/amqdNA?editors=0010" class="notion-link-token notion-enable-hover"><span class="link-annotation-21a5e375-d90e-4c9b-b445-9bf30f00afbd-606468641" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

Now the clock ticks every second.

Let’s quickly recap what’s going on and the order in which the methods are called:

<span class="pseudoBefore" style="--pseudoBefore--content: '1.'"></span>

When <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="1" spellcheck="false">&lt;Clock /&gt;</span> is passed to <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="3" spellcheck="false">ReactDOM.render()</span>, React calls the constructor of the <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="5" spellcheck="false">Clock</span> component. Since <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="7" spellcheck="false">Clock</span> needs to display the current time, it initializes <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="9" spellcheck="false">this.state</span> with an object including the current time. We will later update this state.

<span class="pseudoBefore" style="--pseudoBefore--content: '2.'"></span>

React then calls the <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="1" spellcheck="false">Clock</span> component’s <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="3" spellcheck="false">render()</span> method. This is how React learns what should be displayed on the screen. React then updates the DOM to match the <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="5" spellcheck="false">Clock</span>’s render output.

<span class="pseudoBefore" style="--pseudoBefore--content: '3.'"></span>

When the <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="1" spellcheck="false">Clock</span> output is inserted in the DOM, React calls the <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="3" spellcheck="false">componentDidMount()</span> lifecycle method. Inside it, the <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="5" spellcheck="false">Clock</span> component asks the browser to set up a timer to call the component’s <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="7" spellcheck="false">tick()</span> method once a second.

<span class="pseudoBefore" style="--pseudoBefore--content: '4.'"></span>

Every second the browser calls the <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="1" spellcheck="false">tick()</span> method. Inside it, the <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="3" spellcheck="false">Clock</span> component schedules a UI update by calling <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="5" spellcheck="false">setState()</span> with an object containing the current time. Thanks to the <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="7" spellcheck="false">setState()</span> call, React knows the state has changed, and calls the <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="9" spellcheck="false">render()</span> method again to learn what should be on the screen. This time, <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="11" spellcheck="false">this.state.date</span> in the <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="13" spellcheck="false">render()</span> method will be different, and so the render output will include the updated time. React updates the DOM accordingly.

<span class="pseudoBefore" style="--pseudoBefore--content: '5.'"></span>

If the <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="1" spellcheck="false">Clock</span> component is ever removed from the DOM, React calls the <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="3" spellcheck="false">componentWillUnmount()</span> lifecycle method so the timer is stopped.

Using State Correctly

There are three things you should know about <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">setState()</span>.

Do Not Modify State Directly

For example, this will not re-render a component:

<span class="token comment" data-token-index="0">// Wrong</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">comment </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'Hello'</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

Instead, use <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">setState()</span>:

<span class="token comment" data-token-index="0">// Correct</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">setState</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">comment</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'Hello'</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

The only place where you can assign <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">this.state</span> is the constructor.

State Updates May Be Asynchronous

React may batch multiple <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">setState()</span> calls into a single update for performance.

Because <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">this.props</span> and <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">this.state</span> may be updated asynchronously, you should not rely on their values for calculating the next state.

For example, this code may fail to update the counter:

<span class="token comment" data-token-index="0">// Wrong</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">setState</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> counter</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">counter </span><span class="token operator" data-token-index="0">+</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">increment</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

To fix it, use a second form of <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">setState()</span> that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:

<span class="token comment" data-token-index="0">// Correct</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">setState</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">state</span><span class="token punctuation" data-token-index="0">,</span><span class="token parameter" data-token-index="0"> props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">=&gt;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> counter</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> state</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">counter </span><span class="token operator" data-token-index="0">+</span><span data-token-index="0"> props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">increment </span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

We used an <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions" class="notion-link-token notion-enable-hover"><span class="link-annotation-b73ea719-cd68-4515-8979-a9b775243b40-379945552" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">arrow function</span></a> above, but it also works with regular functions:

<span class="token comment" data-token-index="0">// Correct</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">setState</span><span class="token punctuation" data-token-index="0">(</span><span class="token keyword" data-token-index="0">function</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">state</span><span class="token punctuation" data-token-index="0">,</span><span class="token parameter" data-token-index="0"> props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> counter</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> state</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">counter </span><span class="token operator" data-token-index="0">+</span><span data-token-index="0"> props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">increment </span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

State Updates are Merged

When you call <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">setState()</span>, React merges the object you provide into the current state.

For example, your state may contain several independent variables:

<span data-token-index="0"> </span><span class="token function" data-token-index="0">constructor</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">super</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> posts</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">\[</span><span class="token punctuation" data-token-index="0">\]</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> comments</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">\[</span><span class="token punctuation" data-token-index="0">\]</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

Then you can update them independently with separate <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">setState()</span> calls:

<span data-token-index="0"> </span><span class="token function" data-token-index="0">componentDidMount</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">fetchPosts</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">then</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">response</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">=&gt;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">setState</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> posts</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> response</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">posts </span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">fetchComments</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">then</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">response</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">=&gt;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">setState</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> comments</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> response</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">comments </span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

The merging is shallow, so <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">this.setState({comments})</span> leaves <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">this.state.posts</span> intact, but completely replaces <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">this.state.comments</span>.

The Data Flows Down

Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn’t care whether it is defined as a function or a class.

This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.

A component may choose to pass its state down as props to its child components:

<span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">FormattedDate</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">date</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">state</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">date</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span>

JavaScript

The <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">FormattedDate</span> component would receive the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">date</span> in its props and wouldn’t know whether it came from the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">Clock</span>’s state, from the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="7" spellcheck="false">Clock</span>’s props, or was typed by hand:

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">FormattedDate</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h2</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">It is </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">date</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">toLocaleTimeString</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0">.</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h2</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

<a href="https://codepen.io/gaearon/pen/zKRqNB?editors=0010" class="notion-link-token notion-enable-hover"><span class="link-annotation-72cbdd9c-287a-448a-b037-5210646e1563--1340233297" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

<embed src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Asketch%3D%22http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%2Fns%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%20data-ember-extension%3D%221%22%3E%3Cdefs%3E%3ClinearGradient%20x1%3D%2228.1542969%25%22%20y1%3D%2263.7402344%25%22%20x2%3D%2274.6289062%25%22%20y2%3D%2217.7832031%25%22%20id%3D%22linearGradient-1%22%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%200)%22%20stop-opacity%3D%220%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20%3E%3Cg%20transform%3D%22translate(-236.000000%2C%20-286.000000)%22%3E%3Cg%20transform%3D%22translate(238.000000%2C%20286.000000)%22%3E%3Ccircle%20id%3D%22Oval-2%22%20stroke%3D%22url(%23linearGradient-1)%22%20stroke-width%3D%224%22%20cx%3D%2210%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%3Cpath%20d%3D%22M10%2C2%20C4.4771525%2C2%200%2C6.4771525%200%2C12%22%20id%3D%22Oval-2%22%20stroke%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20stroke-width%3D%224%22%2F%3E%3Crect%20id%3D%22Rectangle-1%22%20fill%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20x%3D%228%22%20y%3D%220%22%20width%3D%224%22%20height%3D%224%22%20rx%3D%228%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" class="loading-spinner" />

This is commonly called a “top-down” or “unidirectional” data flow. Any state is always owned by some specific component, and any data or UI derived from that state can only affect components “below” them in the tree.

If you imagine a component tree as a waterfall of props, each component’s state is like an additional water source that joins it at an arbitrary point but also flows down.

To show that all components are truly isolated, we can create an <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">App</span> component that renders three <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">&lt;Clock&gt;</span>s:

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">App</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">Clock</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">Clock</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">Clock</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> ReactDOM</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">App</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> document</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">getElementById</span><span class="token punctuation" data-token-index="0">(</span><span class="token string" data-token-index="0">'root'</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

<a href="https://codepen.io/gaearon/pen/vXdGmd?editors=0010" class="notion-link-token notion-enable-hover"><span class="link-annotation-b4c88ed4-8d1a-4ae8-80ea-680a239c23a5--1673033" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

<embed src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Asketch%3D%22http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%2Fns%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%20data-ember-extension%3D%221%22%3E%3Cdefs%3E%3ClinearGradient%20x1%3D%2228.1542969%25%22%20y1%3D%2263.7402344%25%22%20x2%3D%2274.6289062%25%22%20y2%3D%2217.7832031%25%22%20id%3D%22linearGradient-1%22%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%200)%22%20stop-opacity%3D%220%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20%3E%3Cg%20transform%3D%22translate(-236.000000%2C%20-286.000000)%22%3E%3Cg%20transform%3D%22translate(238.000000%2C%20286.000000)%22%3E%3Ccircle%20id%3D%22Oval-2%22%20stroke%3D%22url(%23linearGradient-1)%22%20stroke-width%3D%224%22%20cx%3D%2210%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%3Cpath%20d%3D%22M10%2C2%20C4.4771525%2C2%200%2C6.4771525%200%2C12%22%20id%3D%22Oval-2%22%20stroke%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20stroke-width%3D%224%22%2F%3E%3Crect%20id%3D%22Rectangle-1%22%20fill%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20x%3D%228%22%20y%3D%220%22%20width%3D%224%22%20height%3D%224%22%20rx%3D%228%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" class="loading-spinner" />

Each <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">Clock</span> sets up its own timer and updates independently.

In React apps, whether a component is stateful or stateless is considered an implementation detail of the component that may change over time. You can use stateless components inside stateful components, and vice versa.

<span class="notion-enable-hover" style="font-weight: 600" data-token-index="0">Handling Events</span>

Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:

React events are named using camelCase, rather than lowercase.

With JSX you pass a function as the event handler, rather than a string.

For example, the HTML:

<span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">button</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">onclick</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">activateLasers()</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> Activate Lasers </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">button</span><span class="token punctuation" data-token-index="0">&gt;</span>

JavaScript

is slightly different in React:

<span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">button</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">onClick</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token script language-javascript" data-token-index="0">activateLasers</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> Activate Lasers </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">button</span><span class="token punctuation" data-token-index="0">&gt;</span>

JavaScript

Another difference is that you cannot return <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">false</span> to prevent default behavior in React. You must call <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">preventDefault</span> explicitly. For example, with plain HTML, to prevent the default form behavior of submitting, you can write:

<span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">form</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">onsubmit</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">console.log(</span><span class="token punctuation" data-token-index="0">'</span><span class="token attr-value" data-token-index="0">You clicked submit.</span><span class="token punctuation" data-token-index="0">'</span><span class="token attr-value" data-token-index="0">); return false</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">button</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">type</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">submit</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Submit</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">button</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">form</span><span class="token punctuation" data-token-index="0">&gt;</span>

JavaScript

In React, this could instead be:

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">Form</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">handleSubmit</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">e</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> e</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">preventDefault</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> console</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">log</span><span class="token punctuation" data-token-index="0">(</span><span class="token string" data-token-index="0">'You clicked submit.'</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">form</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">onSubmit</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token script language-javascript" data-token-index="0">handleSubmit</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">button</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">type</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">submit</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Submit</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">button</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">form</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

Here, <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">e</span> is a synthetic event. React defines these synthetic events according to the <a href="https://www.w3.org/TR/DOM-Level-3-Events/" class="notion-link-token notion-enable-hover"><span class="link-annotation-7201a630-ffab-4d64-9e4a-30d02d10398d--1613623634" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">W3C spec</span></a>, so you don’t need to worry about cross-browser compatibility. React events do not work exactly the same as native events. See the <a href="https://reactjs.org/docs/events.html" class="notion-link-token notion-enable-hover"><span class="link-annotation-7201a630-ffab-4d64-9e4a-30d02d10398d--1715332404" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">SyntheticEvent</span></a> reference guide to learn more.

When using React, you generally don’t need to call <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">addEventListener</span> to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered.

When you define a component using an <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes" class="notion-link-token notion-enable-hover"><span class="link-annotation-1185199d-e599-4d87-ba87-5b71ff88e97b--1401231387" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">ES6 class</span></a>, a common pattern is for an event handler to be a method on the class. For example, this <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">Toggle</span> component renders a button that lets the user toggle between “ON” and “OFF” states:

<span class="token keyword" data-token-index="0">class</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">Toggle</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">extends</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">React</span><span class="token punctuation" data-token-index="0">.</span><span class="token class-name" data-token-index="0">Component</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">constructor</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">super</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">isToggleOn</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token boolean" data-token-index="0">true</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token comment" data-token-index="0">// This binding is necessary to make \`this\` work in the callback this.handleClick = this.handleClick.bind(this); }</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">handleClick</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">setState</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">prevState</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">=&gt;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> isToggleOn</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">!</span><span data-token-index="0">prevState</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">isToggleOn </span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">button</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">onClick</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">handleClick</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">isToggleOn </span><span class="token operator" data-token-index="0">?</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'ON'</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'OFF'</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">button</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> ReactDOM</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">Toggle</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> document</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">getElementById</span><span class="token punctuation" data-token-index="0">(</span><span class="token string" data-token-index="0">'root'</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

<a href="https://codepen.io/gaearon/pen/xEmzGg?editors=0010" class="notion-link-token notion-enable-hover"><span class="link-annotation-313a7aec-c04e-415a-b663-9af68e69b246-427232409" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

You have to be careful about the meaning of <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">this</span> in JSX callbacks. In JavaScript, class methods are not <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind" class="notion-link-token notion-enable-hover"><span class="link-annotation-2d7e97d6-3a4d-4ed2-a8c4-efe8cb05090d-1683469374" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">bound</span></a> by default. If you forget to bind <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">this.handleClick</span> and pass it to <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="7" spellcheck="false">onClick</span>, <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="9" spellcheck="false">this</span> will be <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="11" spellcheck="false">undefined</span> when the function is actually called.

This is not React-specific behavior; it is a part of <a href="https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/" class="notion-link-token notion-enable-hover"><span class="link-annotation-1ee48f62-8b7b-4469-9053-6c10a24f4ec9--1084820563" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">how functions work in JavaScript</span></a>. Generally, if you refer to a method without <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">()</span> after it, such as <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">onClick={this.handleClick}</span>, you should bind that method.

If calling <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">bind</span> annoys you, there are two ways you can get around this. If you are using the experimental <a href="https://babeljs.io/docs/plugins/transform-class-properties/" class="notion-link-token notion-enable-hover"><span class="link-annotation-f5f1c6f2-59d3-4bef-a69c-3596cde018af-866313602" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">public class fields syntax</span></a>, you can use class fields to correctly bind callbacks:

<span class="token keyword" data-token-index="0">class</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">LoggingButton</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">extends</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">React</span><span class="token punctuation" data-token-index="0">.</span><span class="token class-name" data-token-index="0">Component</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token comment" data-token-index="0">// This syntax ensures \`this\` is bound within handleClick. // Warning: this is \*experimental\* syntax. handleClick = () =&gt; { console.log('this is:', this); }render() {</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">button</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">onClick</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">handleClick</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> Click me </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">button</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

This syntax is enabled by default in <a href="https://github.com/facebookincubator/create-react-app" class="notion-link-token notion-enable-hover"><span class="link-annotation-92397fb8-811a-4fce-a387-4451cf4bd49f-498433888" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Create React App</span></a>.

If you aren’t using class fields syntax, you can use an <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions" class="notion-link-token notion-enable-hover"><span class="link-annotation-5da59454-971e-45de-971e-5b787e6fe244-379945552" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">arrow function</span></a> in the callback:

<span class="token keyword" data-token-index="0">class</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">LoggingButton</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">extends</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">React</span><span class="token punctuation" data-token-index="0">.</span><span class="token class-name" data-token-index="0">Component</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">handleClick</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> console</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">log</span><span class="token punctuation" data-token-index="0">(</span><span class="token string" data-token-index="0">'this is:'</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token comment" data-token-index="0">// This syntax ensures \`this\` is bound within handleClick return ( &lt;button onClick={() =&gt; this.handleClick()}&gt; Click me</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">button</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

The problem with this syntax is that a different callback is created each time the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">LoggingButton</span> renders. In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering. We generally recommend binding in the constructor or using the class fields syntax, to avoid this sort of performance problem.

Passing Arguments to Event Handlers

Inside a loop, it is common to want to pass an extra parameter to an event handler. For example, if <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">id</span> is the row ID, either of the following would work:

<span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">&lt;button onClick={(e) =&gt; this.deleteRow(id, e)}&gt;Delete Row&lt;/button&gt;&lt;button onClick={this.deleteRow.bind(this, id)}&gt;Delete Row&lt;/button&gt;</span>

The above two lines are equivalent, and use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions" class="notion-link-token notion-enable-hover"><span class="link-annotation-fd755ac0-1b61-4b2d-a4ae-7a8368622fc0-433402609" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">arrow functions</span></a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind" class="notion-link-token notion-enable-hover"><span class="link-annotation-fd755ac0-1b61-4b2d-a4ae-7a8368622fc0-789787645" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Function.prototype.bind</span></a> respectively.

In both cases, the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">e</span> argument representing the React event will be passed as a second argument after the ID. With an arrow function, we have to pass it explicitly, but with <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">bind</span> any further arguments are automatically forwarded.

<span class="notion-enable-hover" style="font-weight: 600" data-token-index="0">Conditional Rendering</span>

In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.

Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else" class="notion-link-token notion-enable-hover"><span class="link-annotation-55a0b4ed-d407-46c6-a203-545daf5bed45--1433302305" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">if</span></a> or the <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator" class="notion-link-token notion-enable-hover"><span class="link-annotation-55a0b4ed-d407-46c6-a203-545daf5bed45-810848670" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">conditional operator</span></a> to create elements representing the current state, and let React update the UI to match them.

Consider these two components:

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">UserGreeting</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Welcome back!</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">GuestGreeting</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Please sign up.</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

We’ll create a <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">Greeting</span> component that displays either of these components depending on whether a user is logged in:

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">Greeting</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> isLoggedIn </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">isLoggedIn</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">if</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">isLoggedIn</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">UserGreeting</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">GuestGreeting</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token punctuation" data-token-index="0">;</span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> ReactDOM</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token comment" data-token-index="0">// Try changing to isLoggedIn={true}:</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">Greeting</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">isLoggedIn</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token boolean" data-token-index="0">false</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> document</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">getElementById</span><span class="token punctuation" data-token-index="0">(</span><span class="token string" data-token-index="0">'root'</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

<a href="https://codepen.io/gaearon/pen/ZpVxNq?editors=0011" class="notion-link-token notion-enable-hover"><span class="link-annotation-08ff92e1-df48-4b5e-be17-43a55494b1b0-1229172057" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

<embed src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Asketch%3D%22http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%2Fns%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%20data-ember-extension%3D%221%22%3E%3Cdefs%3E%3ClinearGradient%20x1%3D%2228.1542969%25%22%20y1%3D%2263.7402344%25%22%20x2%3D%2274.6289062%25%22%20y2%3D%2217.7832031%25%22%20id%3D%22linearGradient-1%22%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%200)%22%20stop-opacity%3D%220%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20%3E%3Cg%20transform%3D%22translate(-236.000000%2C%20-286.000000)%22%3E%3Cg%20transform%3D%22translate(238.000000%2C%20286.000000)%22%3E%3Ccircle%20id%3D%22Oval-2%22%20stroke%3D%22url(%23linearGradient-1)%22%20stroke-width%3D%224%22%20cx%3D%2210%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%3Cpath%20d%3D%22M10%2C2%20C4.4771525%2C2%200%2C6.4771525%200%2C12%22%20id%3D%22Oval-2%22%20stroke%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20stroke-width%3D%224%22%2F%3E%3Crect%20id%3D%22Rectangle-1%22%20fill%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20x%3D%228%22%20y%3D%220%22%20width%3D%224%22%20height%3D%224%22%20rx%3D%228%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" class="loading-spinner" />

This example renders a different greeting depending on the value of <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">isLoggedIn</span> prop.

Element Variables

You can use variables to store elements. This can help you conditionally render a part of the component while the rest of the output doesn’t change.

Consider these two new components representing Logout and Login buttons:

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">LoginButton</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">button</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">onClick</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token script language-javascript" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">onClick</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> Login </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">button</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">LogoutButton</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">button</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">onClick</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token script language-javascript" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">onClick</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> Logout </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">button</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

In the example below, we will create a <a href="https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class" class="notion-link-token notion-enable-hover"><span class="link-annotation-2139d203-1789-49fa-a04a-304940df49f1--972831370" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">stateful component</span></a> called <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">LoginControl</span>.

It will render either <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">&lt;LoginButton /&gt;</span> or <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">&lt;LogoutButton /&gt;</span> depending on its current state. It will also render a <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">&lt;Greeting /&gt;</span> from the previous example:

<span class="token keyword" data-token-index="0">class</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">LoginControl</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">extends</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">React</span><span class="token punctuation" data-token-index="0">.</span><span class="token class-name" data-token-index="0">Component</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">constructor</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">super</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">handleLoginClick </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">handleLoginClick</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">bind</span><span class="token punctuation" data-token-index="0">(</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">handleLogoutClick </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">handleLogoutClick</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">bind</span><span class="token punctuation" data-token-index="0">(</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">isLoggedIn</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token boolean" data-token-index="0">false</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">handleLoginClick</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">setState</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">isLoggedIn</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token boolean" data-token-index="0">true</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">handleLogoutClick</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">setState</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">isLoggedIn</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token boolean" data-token-index="0">false</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> isLoggedIn </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">isLoggedIn</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">let</span><span data-token-index="0"> button</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">if</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">isLoggedIn</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> button </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">LogoutButton</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">onClick</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">handleLogoutClick</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">else</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> button </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">LoginButton</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">onClick</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">handleLoginClick</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">Greeting</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">isLoggedIn</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token script language-javascript" data-token-index="0">isLoggedIn</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">button</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> ReactDOM</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">LoginControl</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> document</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">getElementById</span><span class="token punctuation" data-token-index="0">(</span><span class="token string" data-token-index="0">'root'</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

<a href="https://codepen.io/gaearon/pen/QKzAgB?editors=0010" class="notion-link-token notion-enable-hover"><span class="link-annotation-9c3f9057-7aa3-416b-ab76-2eba81eca9ed--713918345" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

While declaring a variable and using an <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">if</span> statement is a fine way to conditionally render a component, sometimes you might want to use a shorter syntax. There are a few ways to inline conditions in JSX, explained below.

Inline If with Logical && Operator

You may <a href="https://reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx" class="notion-link-token notion-enable-hover"><span class="link-annotation-ae95982a-3611-403e-90de-98e692a92969--197942653" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">embed expressions in JSX</span></a> by wrapping them in curly braces. This includes the JavaScript logical <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">&&</span> operator. It can be handy for conditionally including an element:

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">Mailbox</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> unreadMessages </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">unreadMessages</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Hello!</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">unreadMessages</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">length </span><span class="token operator" data-token-index="0">&gt;</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">0</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">&&</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h2</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> You have </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">unreadMessages</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">length</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> unread messages. </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h2</span><span class="token punctuation" data-token-index="0">&gt;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> messages </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">\[</span><span class="token string" data-token-index="0">'React'</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'Re: React'</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'Re:Re: React'</span><span class="token punctuation" data-token-index="0">\]</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> ReactDOM</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">Mailbox</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">unreadMessages</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token script language-javascript" data-token-index="0">messages</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> document</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">getElementById</span><span class="token punctuation" data-token-index="0">(</span><span class="token string" data-token-index="0">'root'</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

<a href="https://codepen.io/gaearon/pen/ozJddz?editors=0010" class="notion-link-token notion-enable-hover"><span class="link-annotation-9b1f5481-1166-4476-911b-cd5458d27bb1-406585880" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

<embed src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Asketch%3D%22http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%2Fns%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%20data-ember-extension%3D%221%22%3E%3Cdefs%3E%3ClinearGradient%20x1%3D%2228.1542969%25%22%20y1%3D%2263.7402344%25%22%20x2%3D%2274.6289062%25%22%20y2%3D%2217.7832031%25%22%20id%3D%22linearGradient-1%22%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%200)%22%20stop-opacity%3D%220%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20%3E%3Cg%20transform%3D%22translate(-236.000000%2C%20-286.000000)%22%3E%3Cg%20transform%3D%22translate(238.000000%2C%20286.000000)%22%3E%3Ccircle%20id%3D%22Oval-2%22%20stroke%3D%22url(%23linearGradient-1)%22%20stroke-width%3D%224%22%20cx%3D%2210%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%3Cpath%20d%3D%22M10%2C2%20C4.4771525%2C2%200%2C6.4771525%200%2C12%22%20id%3D%22Oval-2%22%20stroke%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20stroke-width%3D%224%22%2F%3E%3Crect%20id%3D%22Rectangle-1%22%20fill%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20x%3D%228%22%20y%3D%220%22%20width%3D%224%22%20height%3D%224%22%20rx%3D%228%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" class="loading-spinner" />

It works because in JavaScript, <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">true && expression</span> always evaluates to <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">expression</span>, and <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">false && expression</span> always evaluates to <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="7" spellcheck="false">false</span>.

Therefore, if the condition is <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">true</span>, the element right after <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">&&</span> will appear in the output. If it is <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">false</span>, React will ignore and skip it.

Note that returning a falsy expression will still cause the element after <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">&&</span> to be skipped but will return the falsy expression. In the example below, <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">&lt;div&gt;0&lt;/div&gt;</span> will be returned by the render method.

<span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> count </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">0</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> count </span><span class="token operator" data-token-index="0">&&</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Messages: </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">count</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

Inline If-Else with Conditional Operator

Another method for conditionally rendering elements inline is to use the JavaScript conditional operator <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator" class="notion-link-token notion-enable-hover"><span class="link-annotation-b24404de-c793-4f74-95dd-31eff8105376-810848670" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">condition ? true : false</span></a>.

In the example below, we use it to conditionally render a small block of text.

<span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> isLoggedIn </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">isLoggedIn</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> The user is </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">b</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">isLoggedIn </span><span class="token operator" data-token-index="0">?</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'currently'</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'not'</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">b</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> logged in. </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

It can also be used for larger expressions although it is less obvious what’s going on:

<span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> isLoggedIn </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">isLoggedIn</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">isLoggedIn </span><span class="token operator" data-token-index="0">?</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">LogoutButton</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">onClick</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">handleLogoutClick</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">LoginButton</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">onClick</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">handleLoginClick</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

Just like in JavaScript, it is up to you to choose an appropriate style based on what you and your team consider more readable. Also remember that whenever conditions become too complex, it might be a good time to <a href="https://reactjs.org/docs/components-and-props.html#extracting-components" class="notion-link-token notion-enable-hover"><span class="link-annotation-abdd4bf1-e9ab-444d-80f9-56fc9a57b115-947646465" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">extract a component</span></a>.

Preventing Component from Rendering

In rare cases you might want a component to hide itself even though it was rendered by another component. To do this return <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">null</span> instead of its render output.

In the example below, the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">&lt;WarningBanner /&gt;</span> is rendered depending on the value of the prop called <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">warn</span>. If the value of the prop is <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">false</span>, then the component does not render:

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">WarningBanner</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">if</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span class="token operator" data-token-index="0">!</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">warn</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">null</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">className</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">warning</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> Warning! </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">class</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">Page</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">extends</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">React</span><span class="token punctuation" data-token-index="0">.</span><span class="token class-name" data-token-index="0">Component</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">constructor</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">super</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">showWarning</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token boolean" data-token-index="0">true</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">handleToggleClick </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">handleToggleClick</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">bind</span><span class="token punctuation" data-token-index="0">(</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">handleToggleClick</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">setState</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">state</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">=&gt;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> showWarning</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">!</span><span data-token-index="0">state</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">showWarning </span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">WarningBanner</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">warn</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">state</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">showWarning</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">button</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">onClick</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">handleToggleClick</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">showWarning </span><span class="token operator" data-token-index="0">?</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'Hide'</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'Show'</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">button</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> ReactDOM</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">Page</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> document</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">getElementById</span><span class="token punctuation" data-token-index="0">(</span><span class="token string" data-token-index="0">'root'</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

<a href="https://codepen.io/gaearon/pen/Xjoqwm?editors=0010" class="notion-link-token notion-enable-hover"><span class="link-annotation-d10b5cc5-35bc-41cf-8c25-dce1a945a804--1530259447" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

Returning <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">null</span> from a component’s <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">render</span> method does not affect the firing of the component’s lifecycle methods. For instance <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">componentDidUpdate</span> will still be called.

<span class="notion-enable-hover" style="font-weight: 600" data-token-index="0">Lists and Keys</span>

First, let’s review how you transform lists in JavaScript.

Given the code below, we use the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" class="notion-link-token notion-enable-hover"><span class="link-annotation-d47d9bc8-94df-413a-8a3e-47e240727956-461949167" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">map()</span></a> function to take an array of <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">numbers</span> and double their values. We assign the new array returned by <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">map()</span> to the variable <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="7" spellcheck="false">doubled</span> and log it:

<span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> numbers </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">\[</span><span class="token number" data-token-index="0">1</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">2</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">3</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">4</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">5</span><span class="token punctuation" data-token-index="0">\]</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> doubled </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> numbers</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">map</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">number</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">=&gt;</span><span data-token-index="0"> number </span><span class="token operator" data-token-index="0">\*</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">2</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0">console</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">log</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">doubled</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

This code logs <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">\[2, 4, 6, 8, 10\]</span> to the console.

In React, transforming arrays into lists of <a href="https://reactjs.org/docs/rendering-elements.html" class="notion-link-token notion-enable-hover"><span class="link-annotation-b1a9e219-b05d-4dc6-bad7-00c4450581f8-64595501" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">elements</span></a> is nearly identical.

Rendering Multiple Components

You can build collections of elements and <a href="https://reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx" class="notion-link-token notion-enable-hover"><span class="link-annotation-8f2c8845-1725-4c76-9f51-711166d1dc19--197942653" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">include them in JSX</span></a> using curly braces <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">{}</span>.

Below, we loop through the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">numbers</span> array using the JavaScript <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" class="notion-link-token notion-enable-hover"><span class="link-annotation-68a3b1fb-af05-4952-9888-f63992009644-461949167" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">map()</span></a> function. We return a <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">&lt;li&gt;</span> element for each item. Finally, we assign the resulting array of elements to <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="7" spellcheck="false">listItems</span>:

<span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> numbers </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">\[</span><span class="token number" data-token-index="0">1</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">2</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">3</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">4</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">5</span><span class="token punctuation" data-token-index="0">\]</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> listItems </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> numbers</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">map</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">number</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">=&gt;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">li</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">number</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">li</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

We include the entire <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">listItems</span> array inside a <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">&lt;ul&gt;</span> element, and <a href="https://reactjs.org/docs/rendering-elements.html#rendering-an-element-into-the-dom" class="notion-link-token notion-enable-hover"><span class="link-annotation-dbf3b778-aa7f-4b73-bba7-83af65a34ba0-1042118451" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">render it to the DOM</span></a>:

<span data-token-index="0">ReactDOM</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">ul</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">listItems</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">ul</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> document</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">getElementById</span><span class="token punctuation" data-token-index="0">(</span><span class="token string" data-token-index="0">'root'</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

<a href="https://codepen.io/gaearon/pen/GjPyQr?editors=0011" class="notion-link-token notion-enable-hover"><span class="link-annotation-34008d02-acc5-494b-82c1-7958915041d3-1463406983" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

<embed src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Asketch%3D%22http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%2Fns%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%20data-ember-extension%3D%221%22%3E%3Cdefs%3E%3ClinearGradient%20x1%3D%2228.1542969%25%22%20y1%3D%2263.7402344%25%22%20x2%3D%2274.6289062%25%22%20y2%3D%2217.7832031%25%22%20id%3D%22linearGradient-1%22%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%200)%22%20stop-opacity%3D%220%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20%3E%3Cg%20transform%3D%22translate(-236.000000%2C%20-286.000000)%22%3E%3Cg%20transform%3D%22translate(238.000000%2C%20286.000000)%22%3E%3Ccircle%20id%3D%22Oval-2%22%20stroke%3D%22url(%23linearGradient-1)%22%20stroke-width%3D%224%22%20cx%3D%2210%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%3Cpath%20d%3D%22M10%2C2%20C4.4771525%2C2%200%2C6.4771525%200%2C12%22%20id%3D%22Oval-2%22%20stroke%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20stroke-width%3D%224%22%2F%3E%3Crect%20id%3D%22Rectangle-1%22%20fill%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20x%3D%228%22%20y%3D%220%22%20width%3D%224%22%20height%3D%224%22%20rx%3D%228%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" class="loading-spinner" />

This code displays a bullet list of numbers between 1 and 5.

Basic List Component

Usually you would render lists inside a <a href="https://reactjs.org/docs/components-and-props.html" class="notion-link-token notion-enable-hover"><span class="link-annotation-59a4b962-edfc-44ee-b084-a1d0134ed050-37385506" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">component</span></a>.

We can refactor the previous example into a component that accepts an array of <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">numbers</span> and outputs a list of elements.

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">NumberList</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> numbers </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">numbers</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> listItems </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> numbers</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">map</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">number</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">=&gt;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">li</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">number</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">li</span><span class="token punctuation" data-token-index="0">&gt;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">ul</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">listItems</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">ul</span><span class="token punctuation" data-token-index="0">&gt;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> numbers </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">\[</span><span class="token number" data-token-index="0">1</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">2</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">3</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">4</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">5</span><span class="token punctuation" data-token-index="0">\]</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> ReactDOM</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">NumberList</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">numbers</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token script language-javascript" data-token-index="0">numbers</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> document</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">getElementById</span><span class="token punctuation" data-token-index="0">(</span><span class="token string" data-token-index="0">'root'</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

When you run this code, you’ll be given a warning that a key should be provided for list items. A “key” is a special string attribute you need to include when creating lists of elements. We’ll discuss why it’s important in the next section.

Let’s assign a <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">key</span> to our list items inside <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">numbers.map()</span> and fix the missing key issue.

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">NumberList</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> numbers </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">numbers</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> listItems </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> numbers</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">map</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">number</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">=&gt;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">li</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">key</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token script language-javascript" data-token-index="0">number</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">toString</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">number</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">li</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">ul</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">listItems</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">ul</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> numbers </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">\[</span><span class="token number" data-token-index="0">1</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">2</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">3</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">4</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">5</span><span class="token punctuation" data-token-index="0">\]</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> ReactDOM</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">NumberList</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">numbers</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token script language-javascript" data-token-index="0">numbers</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> document</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">getElementById</span><span class="token punctuation" data-token-index="0">(</span><span class="token string" data-token-index="0">'root'</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

<a href="https://codepen.io/gaearon/pen/jrXYRR?editors=0011" class="notion-link-token notion-enable-hover"><span class="link-annotation-2f864f4d-dc45-421c-bdcc-10ea8bfbe374-189377131" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

<embed src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Asketch%3D%22http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%2Fns%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%20data-ember-extension%3D%221%22%3E%3Cdefs%3E%3ClinearGradient%20x1%3D%2228.1542969%25%22%20y1%3D%2263.7402344%25%22%20x2%3D%2274.6289062%25%22%20y2%3D%2217.7832031%25%22%20id%3D%22linearGradient-1%22%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%200)%22%20stop-opacity%3D%220%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20%3E%3Cg%20transform%3D%22translate(-236.000000%2C%20-286.000000)%22%3E%3Cg%20transform%3D%22translate(238.000000%2C%20286.000000)%22%3E%3Ccircle%20id%3D%22Oval-2%22%20stroke%3D%22url(%23linearGradient-1)%22%20stroke-width%3D%224%22%20cx%3D%2210%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%3Cpath%20d%3D%22M10%2C2%20C4.4771525%2C2%200%2C6.4771525%200%2C12%22%20id%3D%22Oval-2%22%20stroke%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20stroke-width%3D%224%22%2F%3E%3Crect%20id%3D%22Rectangle-1%22%20fill%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20x%3D%228%22%20y%3D%220%22%20width%3D%224%22%20height%3D%224%22%20rx%3D%228%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" class="loading-spinner" />

Keys

Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:

<span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> numbers </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">\[</span><span class="token number" data-token-index="0">1</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">2</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">3</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">4</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">5</span><span class="token punctuation" data-token-index="0">\]</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> listItems </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> numbers</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">map</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">number</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">=&gt;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">li</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">key</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token script language-javascript" data-token-index="0">number</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">toString</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">number</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">li</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys:

<span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> todoItems </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> todos</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">map</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">todo</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">=&gt;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">li</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">key</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token script language-javascript" data-token-index="0">todo</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">id</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">todo</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">text</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">li</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort:

<span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> todoItems </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> todos</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">map</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">todo</span><span class="token punctuation" data-token-index="0">,</span><span class="token parameter" data-token-index="0"> index</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">=&gt;</span><span data-token-index="0"> </span><span class="token comment" data-token-index="0">// Only do this if items have no stable IDs &lt;li key={index}&gt; {todo.text}</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">li</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

We don’t recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state. Check out Robin Pokorny’s article for an <a href="https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318" class="notion-link-token notion-enable-hover"><span class="link-annotation-2c04e796-22a9-4528-a8cf-e979f3a3603c--1582360049" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">in-depth explanation on the negative impacts of using an index as a key</span></a>. If you choose not to assign an explicit key to list items then React will default to using indexes as keys.

Here is an <a href="https://reactjs.org/docs/reconciliation.html#recursing-on-children" class="notion-link-token notion-enable-hover"><span class="link-annotation-29b22892-dc9d-4bb9-b78e-90ab99ebef0f-1247464091" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">in-depth explanation about why keys are necessary</span></a> if you’re interested in learning more.

Extracting Components with Keys

Keys only make sense in the context of the surrounding array.

For example, if you <a href="https://reactjs.org/docs/components-and-props.html#extracting-components" class="notion-link-token notion-enable-hover"><span class="link-annotation-7afbcb6b-d1a0-47fd-b8e5-a149f977bb6d-947646465" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">extract</span></a> a <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">ListItem</span> component, you should keep the key on the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">&lt;ListItem /&gt;</span> elements in the array rather than on the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="7" spellcheck="false">&lt;li&gt;</span> element in the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="9" spellcheck="false">ListItem</span> itself.

<span class="notion-enable-hover" style="font-weight: 600" data-token-index="0">Example: Incorrect Key Usage</span>

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">ListItem</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> value </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">value</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token comment" data-token-index="0">// Wrong! There is no need to specify the key here: &lt;li key={value.toString()}&gt; {value}</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">li</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">NumberList</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> numbers </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">numbers</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> listItems </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> numbers</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">map</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">number</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">=&gt;</span><span data-token-index="0"> </span><span class="token comment" data-token-index="0">// Wrong! The key should have been specified here: &lt;ListItem value={number} /&gt; );</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">ul</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">listItems</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">ul</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> numbers </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">\[</span><span class="token number" data-token-index="0">1</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">2</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">3</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">4</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">5</span><span class="token punctuation" data-token-index="0">\]</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> ReactDOM</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">NumberList</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">numbers</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token script language-javascript" data-token-index="0">numbers</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> document</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">getElementById</span><span class="token punctuation" data-token-index="0">(</span><span class="token string" data-token-index="0">'root'</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

<span class="notion-enable-hover" style="font-weight: 600" data-token-index="0">Example: Correct Key Usage</span>

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">ListItem</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token comment" data-token-index="0">// Correct! There is no need to specify the key here: return &lt;li&gt;{props.value}&lt;/li&gt;;}</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">NumberList</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> numbers </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">numbers</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> listItems </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> numbers</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">map</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">number</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">=&gt;</span><span data-token-index="0"> </span><span class="token comment" data-token-index="0">// Correct! Key should be specified inside the array. &lt;ListItem key={number.toString()} value={number} /&gt; );</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">ul</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">listItems</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">ul</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> numbers </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">\[</span><span class="token number" data-token-index="0">1</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">2</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">3</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">4</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">5</span><span class="token punctuation" data-token-index="0">\]</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> ReactDOM</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">NumberList</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">numbers</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token script language-javascript" data-token-index="0">numbers</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> document</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">getElementById</span><span class="token punctuation" data-token-index="0">(</span><span class="token string" data-token-index="0">'root'</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

<a href="https://codepen.io/gaearon/pen/ZXeOGM?editors=0010" class="notion-link-token notion-enable-hover"><span class="link-annotation-51149077-fb9a-4a1b-8ef4-3995c7054d13-1023259045" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

A good rule of thumb is that elements inside the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">map()</span> call need keys.

Keys Must Only Be Unique Among Siblings

Keys used within arrays should be unique among their siblings. However, they don’t need to be globally unique. We can use the same keys when we produce two different arrays:

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">Blog</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> sidebar </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">ul</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">posts</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">map</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">post</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">=&gt;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">li</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">key</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token script language-javascript" data-token-index="0">post</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">id</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">post</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">title</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">li</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">ul</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> content </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">posts</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">map</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">post</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">=&gt;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">key</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token script language-javascript" data-token-index="0">post</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">id</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h3</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">post</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">title</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h3</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">p</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">post</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">content</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">p</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">sidebar</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">hr</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">content</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> posts </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">\[</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">id</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">1</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> title</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'Hello World'</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> content</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'Welcome to learning React!'</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">id</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">2</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> title</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'Installation'</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> content</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'You can install React from npm.'</span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">\]</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> ReactDOM</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">Blog</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">posts</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token script language-javascript" data-token-index="0">posts</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> document</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">getElementById</span><span class="token punctuation" data-token-index="0">(</span><span class="token string" data-token-index="0">'root'</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

<a href="https://codepen.io/gaearon/pen/NRZYGN?editors=0010" class="notion-link-token notion-enable-hover"><span class="link-annotation-950a7444-ba37-4bef-a3b3-2012fc6cb6dc-937015849" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

<embed src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Asketch%3D%22http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%2Fns%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%20data-ember-extension%3D%221%22%3E%3Cdefs%3E%3ClinearGradient%20x1%3D%2228.1542969%25%22%20y1%3D%2263.7402344%25%22%20x2%3D%2274.6289062%25%22%20y2%3D%2217.7832031%25%22%20id%3D%22linearGradient-1%22%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%200)%22%20stop-opacity%3D%220%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20%3E%3Cg%20transform%3D%22translate(-236.000000%2C%20-286.000000)%22%3E%3Cg%20transform%3D%22translate(238.000000%2C%20286.000000)%22%3E%3Ccircle%20id%3D%22Oval-2%22%20stroke%3D%22url(%23linearGradient-1)%22%20stroke-width%3D%224%22%20cx%3D%2210%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%3Cpath%20d%3D%22M10%2C2%20C4.4771525%2C2%200%2C6.4771525%200%2C12%22%20id%3D%22Oval-2%22%20stroke%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20stroke-width%3D%224%22%2F%3E%3Crect%20id%3D%22Rectangle-1%22%20fill%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20x%3D%228%22%20y%3D%220%22%20width%3D%224%22%20height%3D%224%22%20rx%3D%228%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" class="loading-spinner" />

Keys serve as a hint to React but they don’t get passed to your components. If you need the same value in your component, pass it explicitly as a prop with a different name:

<span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> content </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> posts</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">map</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">post</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">=&gt;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">Post</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">key</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token script language-javascript" data-token-index="0">post</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">id</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">id</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token script language-javascript" data-token-index="0">post</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">id</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">title</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token script language-javascript" data-token-index="0">post</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">title</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

With the example above, the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">Post</span> component can read <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">props.id</span>, but not <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">props.key</span>.

Embedding map() in JSX

In the examples above we declared a separate <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">listItems</span> variable and included it in JSX:

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">NumberList</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> numbers </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">numbers</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> listItems </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> numbers</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">map</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">number</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">=&gt;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">ListItem</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">key</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token script language-javascript" data-token-index="0">number</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">toString</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">value</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token script language-javascript" data-token-index="0">number</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">ul</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">listItems</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">ul</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

JSX allows <a href="https://reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx" class="notion-link-token notion-enable-hover"><span class="link-annotation-66d0ab49-3e5e-4cbd-bd37-2f2adda57b2c--197942653" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">embedding any expression</span></a> in curly braces so we could inline the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">map()</span> result:

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">NumberList</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> numbers </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">numbers</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">ul</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">numbers</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">map</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">number</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">=&gt;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">ListItem</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">key</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token script language-javascript" data-token-index="0">number</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">toString</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">value</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token script language-javascript" data-token-index="0">number</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">ul</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

<a href="https://codepen.io/gaearon/pen/BLvYrB?editors=0010" class="notion-link-token notion-enable-hover"><span class="link-annotation-1de807b6-6f79-4d79-9e09-c67660c326fe-1283163638" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

<embed src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Asketch%3D%22http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%2Fns%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%20data-ember-extension%3D%221%22%3E%3Cdefs%3E%3ClinearGradient%20x1%3D%2228.1542969%25%22%20y1%3D%2263.7402344%25%22%20x2%3D%2274.6289062%25%22%20y2%3D%2217.7832031%25%22%20id%3D%22linearGradient-1%22%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%200)%22%20stop-opacity%3D%220%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20%3E%3Cg%20transform%3D%22translate(-236.000000%2C%20-286.000000)%22%3E%3Cg%20transform%3D%22translate(238.000000%2C%20286.000000)%22%3E%3Ccircle%20id%3D%22Oval-2%22%20stroke%3D%22url(%23linearGradient-1)%22%20stroke-width%3D%224%22%20cx%3D%2210%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%3Cpath%20d%3D%22M10%2C2%20C4.4771525%2C2%200%2C6.4771525%200%2C12%22%20id%3D%22Oval-2%22%20stroke%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20stroke-width%3D%224%22%2F%3E%3Crect%20id%3D%22Rectangle-1%22%20fill%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20x%3D%228%22%20y%3D%220%22%20width%3D%224%22%20height%3D%224%22%20rx%3D%228%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" class="loading-spinner" />

Sometimes this results in clearer code, but this style can also be abused. Like in JavaScript, it is up to you to decide whether it is worth extracting a variable for readability. Keep in mind that if the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">map()</span> body is too nested, it might be a good time to <a href="https://reactjs.org/docs/components-and-props.html#extracting-components" class="notion-link-token notion-enable-hover"><span class="link-annotation-74ca3cb1-534f-489a-84ef-bdb09e744b2f-947646465" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">extract a component</span></a>.

<span class="notion-enable-hover" style="font-weight: 600" data-token-index="0">Forms</span>

HTML form elements work a bit differently from other DOM elements in React, because form elements naturally keep some internal state. For example, this form in plain HTML accepts a single name:

<span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">form</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">label</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> Name: </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">input</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">type</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">text</span><span class="token punctuation" data-token-index="0">"</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">name</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">name</span><span class="token punctuation" data-token-index="0">"</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">label</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">input</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">type</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">submit</span><span class="token punctuation" data-token-index="0">"</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">value</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">Submit</span><span class="token punctuation" data-token-index="0">"</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">form</span><span class="token punctuation" data-token-index="0">&gt;</span>

JavaScript

This form has the default HTML form behavior of browsing to a new page when the user submits the form. If you want this behavior in React, it just works. But in most cases, it’s convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form. The standard way to achieve this is with a technique called “controlled components”.

Controlled Components

In HTML, form elements such as <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">&lt;input&gt;</span>, <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">&lt;textarea&gt;</span>, and <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">&lt;select&gt;</span> typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with <a href="https://reactjs.org/docs/react-component.html#setstate" class="notion-link-token notion-enable-hover"><span class="link-annotation-1c6de761-c583-41d0-917f-e7fddb62214d--1638990284" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">setState()</span></a>.

We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”.

For example, if we want to make the previous example log the name when it is submitted, we can write the form as a controlled component:

<span class="token keyword" data-token-index="0">class</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">NameForm</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">extends</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">React</span><span class="token punctuation" data-token-index="0">.</span><span class="token class-name" data-token-index="0">Component</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">constructor</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">super</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">value</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">''</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">;</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">handleChange </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">handleChange</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">bind</span><span class="token punctuation" data-token-index="0">(</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">handleSubmit </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">handleSubmit</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">bind</span><span class="token punctuation" data-token-index="0">(</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">handleChange</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">event</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">setState</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">value</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> event</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">target</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">value</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span class="token function" data-token-index="0">handleSubmit</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">event</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">alert</span><span class="token punctuation" data-token-index="0">(</span><span class="token string" data-token-index="0">'A name was submitted: '</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">+</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">value</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> event</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">preventDefault</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">form</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">onSubmit</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">handleSubmit</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">label</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> Name: </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">input</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">type</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">text</span><span class="token punctuation" data-token-index="0">"</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">value</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">state</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">value</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">onChange</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">handleChange</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">label</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">input</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">type</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">submit</span><span class="token punctuation" data-token-index="0">"</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">value</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">Submit</span><span class="token punctuation" data-token-index="0">"</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">form</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

<a href="https://codepen.io/gaearon/pen/VmmPgp?editors=0010" class="notion-link-token notion-enable-hover"><span class="link-annotation-2163b1e5-abf0-46e0-aef5-aac7c8091b6e--1444127248" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

<embed src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Asketch%3D%22http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%2Fns%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%20data-ember-extension%3D%221%22%3E%3Cdefs%3E%3ClinearGradient%20x1%3D%2228.1542969%25%22%20y1%3D%2263.7402344%25%22%20x2%3D%2274.6289062%25%22%20y2%3D%2217.7832031%25%22%20id%3D%22linearGradient-1%22%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%200)%22%20stop-opacity%3D%220%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20%3E%3Cg%20transform%3D%22translate(-236.000000%2C%20-286.000000)%22%3E%3Cg%20transform%3D%22translate(238.000000%2C%20286.000000)%22%3E%3Ccircle%20id%3D%22Oval-2%22%20stroke%3D%22url(%23linearGradient-1)%22%20stroke-width%3D%224%22%20cx%3D%2210%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%3Cpath%20d%3D%22M10%2C2%20C4.4771525%2C2%200%2C6.4771525%200%2C12%22%20id%3D%22Oval-2%22%20stroke%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20stroke-width%3D%224%22%2F%3E%3Crect%20id%3D%22Rectangle-1%22%20fill%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20x%3D%228%22%20y%3D%220%22%20width%3D%224%22%20height%3D%224%22%20rx%3D%228%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" class="loading-spinner" />

Since the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">value</span> attribute is set on our form element, the displayed value will always be <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">this.state.value</span>, making the React state the source of truth. Since <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">handleChange</span> runs on every keystroke to update the React state, the displayed value will update as the user types.

With a controlled component, the input’s value is always driven by the React state. While this means you have to type a bit more code, you can now pass the value to other UI elements too, or reset it from other event handlers.

The textarea Tag

In HTML, a <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">&lt;textarea&gt;</span> element defines its text by its children:

<span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">textarea</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> Hello there, this is some text in a text area </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">textarea</span><span class="token punctuation" data-token-index="0">&gt;</span>

JavaScript

In React, a <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">&lt;textarea&gt;</span> uses a <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">value</span> attribute instead. This way, a form using a <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">&lt;textarea&gt;</span> can be written very similarly to a form that uses a single-line input:

<span class="token keyword" data-token-index="0">class</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">EssayForm</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">extends</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">React</span><span class="token punctuation" data-token-index="0">.</span><span class="token class-name" data-token-index="0">Component</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">constructor</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">super</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> value</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'Please write an essay about your favorite DOM element.'</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">;</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">handleChange </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">handleChange</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">bind</span><span class="token punctuation" data-token-index="0">(</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">handleSubmit </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">handleSubmit</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">bind</span><span class="token punctuation" data-token-index="0">(</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">handleChange</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">event</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">setState</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">value</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> event</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">target</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">value</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span class="token function" data-token-index="0">handleSubmit</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">event</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">alert</span><span class="token punctuation" data-token-index="0">(</span><span class="token string" data-token-index="0">'An essay was submitted: '</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">+</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">value</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> event</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">preventDefault</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">form</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">onSubmit</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">handleSubmit</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">label</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> Essay: </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">textarea</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">value</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">state</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">value</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">onChange</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">handleChange</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">label</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">input</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">type</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">submit</span><span class="token punctuation" data-token-index="0">"</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">value</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">Submit</span><span class="token punctuation" data-token-index="0">"</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">form</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

Notice that <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">this.state.value</span> is initialized in the constructor, so that the text area starts off with some text in it.

The select Tag

In HTML, <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">&lt;select&gt;</span> creates a drop-down list. For example, this HTML creates a drop-down list of flavors:

<span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">&lt;select&gt;&lt;option value="grapefruit"&gt;Grapefruit&lt;/option&gt;&lt;option value="lime"&gt;Lime&lt;/option&gt;&lt;option selected value="coconut"&gt;Coconut&lt;/option&gt;&lt;option value="mango"&gt;Mango&lt;/option&gt;&lt;/select&gt;</span>

Note that the Coconut option is initially selected, because of the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">selected</span> attribute. React, instead of using this <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">selected</span> attribute, uses a <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">value</span> attribute on the root <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="7" spellcheck="false">select</span> tag. This is more convenient in a controlled component because you only need to update it in one place. For example:

<span class="token keyword" data-token-index="0">class</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">FlavorForm</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">extends</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">React</span><span class="token punctuation" data-token-index="0">.</span><span class="token class-name" data-token-index="0">Component</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">constructor</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">super</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">value</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'coconut'</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">;</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">handleChange </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">handleChange</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">bind</span><span class="token punctuation" data-token-index="0">(</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">handleSubmit </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">handleSubmit</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">bind</span><span class="token punctuation" data-token-index="0">(</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">handleChange</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">event</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">setState</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">value</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> event</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">target</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">value</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span class="token function" data-token-index="0">handleSubmit</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">event</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">alert</span><span class="token punctuation" data-token-index="0">(</span><span class="token string" data-token-index="0">'Your favorite flavor is: '</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">+</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">value</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> event</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">preventDefault</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">form</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">onSubmit</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">handleSubmit</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">label</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> Pick your favorite flavor: </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">select</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">value</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">state</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">value</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">onChange</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">handleChange</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">option</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">value</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">grapefruit</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Grapefruit</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">option</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">option</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">value</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">lime</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Lime</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">option</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">option</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">value</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">coconut</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Coconut</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">option</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">option</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">value</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">mango</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Mango</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">option</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">select</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">label</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">input</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">type</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">submit</span><span class="token punctuation" data-token-index="0">"</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">value</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">Submit</span><span class="token punctuation" data-token-index="0">"</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">form</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

<a href="https://codepen.io/gaearon/pen/JbbEzX?editors=0010" class="notion-link-token notion-enable-hover"><span class="link-annotation-723ceb82-ccf1-432e-9b03-479b4836cc39--375915814" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

Overall, this makes it so that <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">&lt;input type="text"&gt;</span>, <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">&lt;textarea&gt;</span>, and <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">&lt;select&gt;</span> all work very similarly - they all accept a <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="7" spellcheck="false">value</span> attribute that you can use to implement a controlled component.

NoteYou can pass an array into the value attribute, allowing you to select multiple options in a select tag:&lt;select multiple={true} value={\['B', 'C'\]}&gt;

The file input Tag

In HTML, an <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">&lt;input type="file"&gt;</span> lets the user choose one or more files from their device storage to be uploaded to a server or manipulated by JavaScript via the <a href="https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications" class="notion-link-token notion-enable-hover"><span class="link-annotation-cd9f76b6-75b1-4ecb-ae39-523a269a4eb4-2088374280" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">File API</span></a>.

<span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">&lt;input type="file" /&gt;</span>

Because its value is read-only, it is an <span class="notion-enable-hover" style="font-weight: 600" data-token-index="1">uncontrolled</span> component in React. It is discussed together with other uncontrolled components <a href="https://reactjs.org/docs/uncontrolled-components.html#the-file-input-tag" class="notion-link-token notion-enable-hover"><span class="link-annotation-49200fff-9bf6-4232-9acd-73ae7c63cf2b-1985105908" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">later in the documentation</span></a>.

Handling Multiple Inputs

When you need to handle multiple controlled <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">input</span> elements, you can add a <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">name</span> attribute to each element and let the handler function choose what to do based on the value of <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">event.target.name</span>.

For example:

<span class="token keyword" data-token-index="0">class</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">Reservation</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">extends</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">React</span><span class="token punctuation" data-token-index="0">.</span><span class="token class-name" data-token-index="0">Component</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">constructor</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">super</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> isGoing</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token boolean" data-token-index="0">true</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> numberOfGuests</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">2</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">handleInputChange </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">handleInputChange</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">bind</span><span class="token punctuation" data-token-index="0">(</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">handleInputChange</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">event</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> target </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> event</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">target</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> value </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> target</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">type </span><span class="token operator" data-token-index="0">===</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'checkbox'</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">?</span><span data-token-index="0"> target</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">checked </span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> target</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">value</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> name </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> target</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">name</span><span class="token punctuation" data-token-index="0">;</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">setState</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">\[</span><span data-token-index="0">name</span><span class="token punctuation" data-token-index="0">\]</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> value </span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">form</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">label</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> Is going: &lt;input name="isGoing" type="checkbox"checked=</span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">isGoing</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0">onChange=</span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">handleInputChange</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> /&gt; </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">label</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">br</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">label</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> Number of guests: &lt;input name="numberOfGuests" type="number"value=</span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">numberOfGuests</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0">onChange=</span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">handleInputChange</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> /&gt; </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">label</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">form</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

<a href="https://codepen.io/gaearon/pen/wgedvV?editors=0010" class="notion-link-token notion-enable-hover"><span class="link-annotation-e20b7a46-2901-4c8e-93be-5dd7f633ec15--18690012" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

Note how we used the ES6 <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names" class="notion-link-token notion-enable-hover"><span class="link-annotation-61ecc6ca-bcb5-49f9-a0d2-0acfce433a88-1280194704" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">computed property name</span></a> syntax to update the state key corresponding to the given input name:

<span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">setState</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">\[</span><span data-token-index="0">name</span><span class="token punctuation" data-token-index="0">\]</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> value</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

It is equivalent to this ES5 code:

<span class="token keyword" data-token-index="0">var</span><span data-token-index="0"> partialState </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> partialState</span><span class="token punctuation" data-token-index="0">\[</span><span data-token-index="0">name</span><span class="token punctuation" data-token-index="0">\]</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> value</span><span class="token punctuation" data-token-index="0">;</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">setState</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">partialState</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

Also, since <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">setState()</span> automatically <a href="https://reactjs.org/docs/state-and-lifecycle.html#state-updates-are-merged" class="notion-link-token notion-enable-hover"><span class="link-annotation-e339bbf7-2fe0-465d-9690-d748f5a749db-1704812530" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">merges a partial state into the current state</span></a>, we only needed to call it with the changed parts.

Controlled Input Null Value

Specifying the value prop on a <a href="https://reactjs.org/docs/forms.html#controlled-components" class="notion-link-token notion-enable-hover"><span class="link-annotation-d0e148e6-ce9c-4346-95b6-1d152b127060--1744238320" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">controlled component</span></a> prevents the user from changing the input unless you desire so. If you’ve specified a <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">value</span> but the input is still editable, you may have accidentally set <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">value</span> to <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="7" spellcheck="false">undefined</span> or <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="9" spellcheck="false">null</span>.

The following code demonstrates this. (The input is locked at first but becomes editable after a short delay.)

<span data-token-index="0">ReactDOM</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">input</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">value</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">hi</span><span class="token punctuation" data-token-index="0">"</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> mountNode</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">setTimeout</span><span class="token punctuation" data-token-index="0">(</span><span class="token keyword" data-token-index="0">function</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> ReactDOM</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">input</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">value</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">null</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> mountNode</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">1000</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span>

JavaScript

Alternatives to Controlled Components

It can sometimes be tedious to use controlled components, because you need to write an event handler for every way your data can change and pipe all of the input state through a React component. This can become particularly annoying when you are converting a preexisting codebase to React, or integrating a React application with a non-React library. In these situations, you might want to check out <a href="https://reactjs.org/docs/uncontrolled-components.html" class="notion-link-token notion-enable-hover"><span class="link-annotation-cbacaf01-ed09-4b43-83a4-315847ac5457-1361651377" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">uncontrolled components</span></a>, an alternative technique for implementing input forms.

Fully-Fledged Solutions

If you’re looking for a complete solution including validation, keeping track of the visited fields, and handling form submission, <a href="https://jaredpalmer.com/formik" class="notion-link-token notion-enable-hover"><span class="link-annotation-e8594881-2049-4561-a84f-89bef80184e7--299121672" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Formik</span></a> is one of the popular choices. However, it is built on the same principles of controlled components and managing state — so don’t neglect to learn them.

<span class="notion-enable-hover" style="font-weight: 600" data-token-index="0">Lifting State Up</span>

Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor. Let’s see how this works in action.

In this section, we will create a temperature calculator that calculates whether the water would boil at a given temperature.

We will start with a component called <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">BoilingVerdict</span>. It accepts the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">celsius</span> temperature as a prop, and prints whether it is enough to boil the water:

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">BoilingVerdict</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">if</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">celsius </span><span class="token operator" data-token-index="0">&gt;=</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">100</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">p</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">The water would boil.</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">p</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">p</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">The water would not boil.</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">p</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">;</span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

Next, we will create a component called <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">Calculator</span>. It renders an <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">&lt;input&gt;</span> that lets you enter the temperature, and keeps its value in <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">this.state.temperature</span>.

Additionally, it renders the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">BoilingVerdict</span> for the current input value.

<span class="token keyword" data-token-index="0">class</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">Calculator</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">extends</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">React</span><span class="token punctuation" data-token-index="0">.</span><span class="token class-name" data-token-index="0">Component</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">constructor</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">super</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">handleChange </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">handleChange</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">bind</span><span class="token punctuation" data-token-index="0">(</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">temperature</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">''</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">handleChange</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">e</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">setState</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">temperature</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> e</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">target</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">value</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> temperature </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">temperature</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">fieldset</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">legend</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Enter temperature in Celsius:</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">legend</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">input</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">value</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token script language-javascript" data-token-index="0">temperature</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">onChange</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">handleChange</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">BoilingVerdict</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">celsius</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token function" data-token-index="0">parseFloat</span><span class="token punctuation" data-token-index="0">(</span><span class="token script language-javascript" data-token-index="0">temperature</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">fieldset</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

<a href="https://codepen.io/gaearon/pen/ZXeOBm?editors=0010" class="notion-link-token notion-enable-hover"><span class="link-annotation-c536620e-4f05-4cf7-946f-4726cfd263fd--1217539520" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

<embed src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Asketch%3D%22http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%2Fns%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%20data-ember-extension%3D%221%22%3E%3Cdefs%3E%3ClinearGradient%20x1%3D%2228.1542969%25%22%20y1%3D%2263.7402344%25%22%20x2%3D%2274.6289062%25%22%20y2%3D%2217.7832031%25%22%20id%3D%22linearGradient-1%22%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%200)%22%20stop-opacity%3D%220%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20%3E%3Cg%20transform%3D%22translate(-236.000000%2C%20-286.000000)%22%3E%3Cg%20transform%3D%22translate(238.000000%2C%20286.000000)%22%3E%3Ccircle%20id%3D%22Oval-2%22%20stroke%3D%22url(%23linearGradient-1)%22%20stroke-width%3D%224%22%20cx%3D%2210%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%3Cpath%20d%3D%22M10%2C2%20C4.4771525%2C2%200%2C6.4771525%200%2C12%22%20id%3D%22Oval-2%22%20stroke%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20stroke-width%3D%224%22%2F%3E%3Crect%20id%3D%22Rectangle-1%22%20fill%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20x%3D%228%22%20y%3D%220%22%20width%3D%224%22%20height%3D%224%22%20rx%3D%228%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" class="loading-spinner" />

Adding a Second Input

Our new requirement is that, in addition to a Celsius input, we provide a Fahrenheit input, and they are kept in sync.

We can start by extracting a <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">TemperatureInput</span> component from <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">Calculator</span>. We will add a new <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">scale</span> prop to it that can either be <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="7" spellcheck="false">"c"</span> or <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="9" spellcheck="false">"f"</span>:

<span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> scaleNames </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> c</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'Celsius'</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> f</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'Fahrenheit'</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">;</span><span class="token keyword" data-token-index="0">class</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">TemperatureInput</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">extends</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">React</span><span class="token punctuation" data-token-index="0">.</span><span class="token class-name" data-token-index="0">Component</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">constructor</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">super</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">handleChange </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">handleChange</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">bind</span><span class="token punctuation" data-token-index="0">(</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">temperature</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">''</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">handleChange</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">e</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">setState</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">temperature</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> e</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">target</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">value</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> temperature </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">temperature</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> scale </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">scale</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">fieldset</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">legend</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Enter temperature in </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">scaleNames</span><span class="token punctuation" data-token-index="0">\[</span><span data-token-index="0">scale</span><span class="token punctuation" data-token-index="0">\]</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0">:</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">legend</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> &lt;input value=</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">temperature</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0">onChange=</span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">handleChange</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> /&gt; </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">fieldset</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

We can now change the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">Calculator</span> to render two separate temperature inputs:

<span class="token keyword" data-token-index="0">class</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">Calculator</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">extends</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">React</span><span class="token punctuation" data-token-index="0">.</span><span class="token class-name" data-token-index="0">Component</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">TemperatureInput</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">scale</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">c</span><span class="token punctuation" data-token-index="0">"</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">TemperatureInput</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">scale</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">f</span><span class="token punctuation" data-token-index="0">"</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

<a href="https://codepen.io/gaearon/pen/jGBryx?editors=0010" class="notion-link-token notion-enable-hover"><span class="link-annotation-66fb5ffc-9647-4fec-8d68-d1173d92a285-1455907687" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

<embed src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Asketch%3D%22http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%2Fns%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%20data-ember-extension%3D%221%22%3E%3Cdefs%3E%3ClinearGradient%20x1%3D%2228.1542969%25%22%20y1%3D%2263.7402344%25%22%20x2%3D%2274.6289062%25%22%20y2%3D%2217.7832031%25%22%20id%3D%22linearGradient-1%22%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%200)%22%20stop-opacity%3D%220%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20%3E%3Cg%20transform%3D%22translate(-236.000000%2C%20-286.000000)%22%3E%3Cg%20transform%3D%22translate(238.000000%2C%20286.000000)%22%3E%3Ccircle%20id%3D%22Oval-2%22%20stroke%3D%22url(%23linearGradient-1)%22%20stroke-width%3D%224%22%20cx%3D%2210%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%3Cpath%20d%3D%22M10%2C2%20C4.4771525%2C2%200%2C6.4771525%200%2C12%22%20id%3D%22Oval-2%22%20stroke%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20stroke-width%3D%224%22%2F%3E%3Crect%20id%3D%22Rectangle-1%22%20fill%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20x%3D%228%22%20y%3D%220%22%20width%3D%224%22%20height%3D%224%22%20rx%3D%228%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" class="loading-spinner" />

We have two inputs now, but when you enter the temperature in one of them, the other doesn’t update. This contradicts our requirement: we want to keep them in sync.

We also can’t display the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">BoilingVerdict</span> from <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">Calculator</span>. The <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">Calculator</span> doesn’t know the current temperature because it is hidden inside the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="7" spellcheck="false">TemperatureInput</span>.

Writing Conversion Functions

First, we will write two functions to convert from Celsius to Fahrenheit and back:

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">toCelsius</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">fahrenheit</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">fahrenheit </span><span class="token operator" data-token-index="0">-</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">32</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">\*</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">5</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">/</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">9</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">toFahrenheit</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">celsius</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">celsius </span><span class="token operator" data-token-index="0">\*</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">9</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">/</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">5</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">+</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">32</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

These two functions convert numbers. We will write another function that takes a string <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">temperature</span> and a converter function as arguments and returns a string. We will use it to calculate the value of one input based on the other input.

It returns an empty string on an invalid <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">temperature</span>, and it keeps the output rounded to the third decimal place:

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">tryConvert</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">temperature</span><span class="token punctuation" data-token-index="0">,</span><span class="token parameter" data-token-index="0"> convert</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> input </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">parseFloat</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">temperature</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">if</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">Number</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">isNaN</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">input</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">''</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> output </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">convert</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">input</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> rounded </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> Math</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">round</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">output </span><span class="token operator" data-token-index="0">\*</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">1000</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">/</span><span data-token-index="0"> </span><span class="token number" data-token-index="0">1000</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> rounded</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">toString</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

For example, <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">tryConvert('abc', toCelsius)</span> returns an empty string, and <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">tryConvert('10.22', toFahrenheit)</span> returns <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">'50.396'</span>.

Lifting State Up

Currently, both <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">TemperatureInput</span> components independently keep their values in the local state:

<span class="token keyword" data-token-index="0">class</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">TemperatureInput</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">extends</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">React</span><span class="token punctuation" data-token-index="0">.</span><span class="token class-name" data-token-index="0">Component</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">constructor</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">super</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">handleChange </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">handleChange</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">bind</span><span class="token punctuation" data-token-index="0">(</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">temperature</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">''</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">handleChange</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">e</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">setState</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">temperature</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> e</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">target</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">value</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> temperature </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">temperature</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token comment" data-token-index="0">// ...</span>

JavaScript

However, we want these two inputs to be in sync with each other. When we update the Celsius input, the Fahrenheit input should reflect the converted temperature, and vice versa.

In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called “lifting state up”. We will remove the local state from the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">TemperatureInput</span> and move it into the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">Calculator</span> instead.

If the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">Calculator</span> owns the shared state, it becomes the “source of truth” for the current temperature in both inputs. It can instruct them both to have values that are consistent with each other. Since the props of both <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">TemperatureInput</span> components are coming from the same parent <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">Calculator</span> component, the two inputs will always be in sync.

Let’s see how this works step by step.

First, we will replace <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">this.state.temperature</span> with <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">this.props.temperature</span> in the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">TemperatureInput</span> component. For now, let’s pretend <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="7" spellcheck="false">this.props.temperature</span> already exists, although we will need to pass it from the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="9" spellcheck="false">Calculator</span> in the future:

<span data-token-index="0"> </span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token comment" data-token-index="0">// Before: const temperature = this.state.temperature;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> temperature </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">temperature</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token comment" data-token-index="0">// ...</span>

JavaScript

We know that <a href="https://reactjs.org/docs/components-and-props.html#props-are-read-only" class="notion-link-token notion-enable-hover"><span class="link-annotation-f68349bf-aa62-45e8-950d-fe3872106491-1445580492" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">props are read-only</span></a>. When the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">temperature</span> was in the local state, the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">TemperatureInput</span> could just call <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="7" spellcheck="false">this.setState()</span> to change it. However, now that the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="9" spellcheck="false">temperature</span> is coming from the parent as a prop, the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="11" spellcheck="false">TemperatureInput</span> has no control over it.

In React, this is usually solved by making a component “controlled”. Just like the DOM <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">&lt;input&gt;</span> accepts both a <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">value</span> and an <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">onChange</span> prop, so can the custom <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="7" spellcheck="false">TemperatureInput</span> accept both <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="9" spellcheck="false">temperature</span> and <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="11" spellcheck="false">onTemperatureChange</span> props from its parent <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="13" spellcheck="false">Calculator</span>.

Now, when the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">TemperatureInput</span> wants to update its temperature, it calls <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">this.props.onTemperatureChange</span>:

<span data-token-index="0"> </span><span class="token function" data-token-index="0">handleChange</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">e</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token comment" data-token-index="0">// Before: this.setState({temperature: e.target.value});</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">onTemperatureChange</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">e</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">target</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">value</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token comment" data-token-index="0">// ...</span>

JavaScript

Note:There is no special meaning to either temperature or onTemperatureChange prop names in custom components. We could have called them anything else, like name them value and onChange which is a common convention.

The <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">onTemperatureChange</span> prop will be provided together with the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">temperature</span> prop by the parent <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">Calculator</span> component. It will handle the change by modifying its own local state, thus re-rendering both inputs with the new values. We will look at the new <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="7" spellcheck="false">Calculator</span> implementation very soon.

Before diving into the changes in the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">Calculator</span>, let’s recap our changes to the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">TemperatureInput</span> component. We have removed the local state from it, and instead of reading <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">this.state.temperature</span>, we now read <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="7" spellcheck="false">this.props.temperature</span>. Instead of calling <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="9" spellcheck="false">this.setState()</span> when we want to make a change, we now call <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="11" spellcheck="false">this.props.onTemperatureChange()</span>, which will be provided by the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="13" spellcheck="false">Calculator</span>:

<span class="token keyword" data-token-index="0">class</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">TemperatureInput</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">extends</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">React</span><span class="token punctuation" data-token-index="0">.</span><span class="token class-name" data-token-index="0">Component</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">constructor</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">super</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">handleChange </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">handleChange</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">bind</span><span class="token punctuation" data-token-index="0">(</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">handleChange</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">e</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">onTemperatureChange</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">e</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">target</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">value</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> temperature </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">temperature</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> scale </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">scale</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">fieldset</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">legend</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0">Enter temperature in </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">scaleNames</span><span class="token punctuation" data-token-index="0">\[</span><span data-token-index="0">scale</span><span class="token punctuation" data-token-index="0">\]</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0">:</span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">legend</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> &lt;input value=</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">temperature</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0">onChange=</span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">handleChange</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> /&gt; </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">fieldset</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

Now let’s turn to the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">Calculator</span> component.

We will store the current input’s <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">temperature</span> and <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">scale</span> in its local state. This is the state we “lifted up” from the inputs, and it will serve as the “source of truth” for both of them. It is the minimal representation of all the data we need to know in order to render both inputs.

For example, if we enter 37 into the Celsius input, the state of the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">Calculator</span> component will be:

<span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> temperature</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'37'</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> scale</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'c'</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

If we later edit the Fahrenheit field to be 212, the state of the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">Calculator</span> will be:

<span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> temperature</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'212'</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> scale</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'f'</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

We could have stored the value of both inputs but it turns out to be unnecessary. It is enough to store the value of the most recently changed input, and the scale that it represents. We can then infer the value of the other input based on the current <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">temperature</span> and <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">scale</span> alone.

The inputs stay in sync because their values are computed from the same state:

<span class="token keyword" data-token-index="0">class</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">Calculator</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">extends</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">React</span><span class="token punctuation" data-token-index="0">.</span><span class="token class-name" data-token-index="0">Component</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">constructor</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">super</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">handleCelsiusChange </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">handleCelsiusChange</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">bind</span><span class="token punctuation" data-token-index="0">(</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">handleFahrenheitChange </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">handleFahrenheitChange</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">bind</span><span class="token punctuation" data-token-index="0">(</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">temperature</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">''</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> scale</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'c'</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">handleCelsiusChange</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">temperature</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">setState</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">scale</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'c'</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> temperature</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">handleFahrenheitChange</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">temperature</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">setState</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">scale</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'f'</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> temperature</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> scale </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">scale</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> temperature </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">temperature</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> celsius </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> scale </span><span class="token operator" data-token-index="0">===</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'f'</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">?</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">tryConvert</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">temperature</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> toCelsius</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> temperature</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">const</span><span data-token-index="0"> fahrenheit </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> scale </span><span class="token operator" data-token-index="0">===</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">'c'</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">?</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">tryConvert</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">temperature</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> toFahrenheit</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> temperature</span><span class="token punctuation" data-token-index="0">;</span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> &lt;TemperatureInputscale="c" temperature=</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">celsius</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> onTemperatureChange=</span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">handleCelsiusChange</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> /&gt; &lt;TemperatureInputscale="f" temperature=</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">fahrenheit</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> onTemperatureChange=</span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">handleFahrenheitChange</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> /&gt; </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">BoilingVerdict</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">celsius</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token function" data-token-index="0">parseFloat</span><span class="token punctuation" data-token-index="0">(</span><span class="token script language-javascript" data-token-index="0">celsius</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

<a href="https://codepen.io/gaearon/pen/WZpxpz?editors=0010" class="notion-link-token notion-enable-hover"><span class="link-annotation-8fdd58c4-d049-4ad3-8e06-67410adabdd9-216783038" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

Now, no matter which input you edit, <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">this.state.temperature</span> and <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">this.state.scale</span> in the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">Calculator</span> get updated. One of the inputs gets the value as is, so any user input is preserved, and the other input value is always recalculated based on it.

Let’s recap what happens when you edit an input:

React calls the function specified as <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="1" spellcheck="false">onChange</span> on the DOM <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="3" spellcheck="false">&lt;input&gt;</span>. In our case, this is the <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="5" spellcheck="false">handleChange</span> method in the <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="7" spellcheck="false">TemperatureInput</span> component.

The <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="1" spellcheck="false">handleChange</span> method in the <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="3" spellcheck="false">TemperatureInput</span> component calls <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="5" spellcheck="false">this.props.onTemperatureChange()</span> with the new desired value. Its props, including <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="7" spellcheck="false">onTemperatureChange</span>, were provided by its parent component, the <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="9" spellcheck="false">Calculator</span>.

When it previously rendered, the <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="1" spellcheck="false">Calculator</span> had specified that <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="3" spellcheck="false">onTemperatureChange</span> of the Celsius <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="5" spellcheck="false">TemperatureInput</span> is the <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="7" spellcheck="false">Calculator</span>’s <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="9" spellcheck="false">handleCelsiusChange</span> method, and <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="11" spellcheck="false">onTemperatureChange</span> of the Fahrenheit <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="13" spellcheck="false">TemperatureInput</span> is the <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="15" spellcheck="false">Calculator</span>’s <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="17" spellcheck="false">handleFahrenheitChange</span> method. So either of these two <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="19" spellcheck="false">Calculator</span> methods gets called depending on which input we edited.

Inside these methods, the <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="1" spellcheck="false">Calculator</span> component asks React to re-render itself by calling <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="3" spellcheck="false">this.setState()</span> with the new input value and the current scale of the input we just edited.

React calls the <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="1" spellcheck="false">Calculator</span> component’s <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="3" spellcheck="false">render</span> method to learn what the UI should look like. The values of both inputs are recomputed based on the current temperature and the active scale. The temperature conversion is performed here.

React calls the <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="1" spellcheck="false">render</span> methods of the individual <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="3" spellcheck="false">TemperatureInput</span> components with their new props specified by the <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="5" spellcheck="false">Calculator</span>. It learns what their UI should look like.

React calls the <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="1" spellcheck="false">render</span> method of the <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="3" spellcheck="false">BoilingVerdict</span> component, passing the temperature in Celsius as its props.

React DOM updates the DOM with the boiling verdict and to match the desired input values. The input we just edited receives its current value, and the other input is updated to the temperature after conversion.

Every update goes through the same steps so the inputs stay in sync.

Lessons Learned

There should be a single “source of truth” for any data that changes in a React application. Usually, the state is first added to the component that needs it for rendering. Then, if other components also need it, you can lift it up to their closest common ancestor. Instead of trying to sync the state between different components, you should rely on the <a href="https://reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down" class="notion-link-token notion-enable-hover"><span class="link-annotation-717f3b78-bffb-4df0-aae3-f55585ed1bd7--1875053373" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">top-down data flow</span></a>.

Lifting state involves writing more “boilerplate” code than two-way binding approaches, but as a benefit, it takes less work to find and isolate bugs. Since any state “lives” in some component and that component alone can change it, the surface area for bugs is greatly reduced. Additionally, you can implement any custom logic to reject or transform user input.

If something can be derived from either props or state, it probably shouldn’t be in the state. For example, instead of storing both <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">celsiusValue</span> and <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">fahrenheitValue</span>, we store just the last edited <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">temperature</span> and its <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="7" spellcheck="false">scale</span>. The value of the other input can always be calculated from them in the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="9" spellcheck="false">render()</span> method. This lets us clear or apply rounding to the other field without losing any precision in the user input.

When you see something wrong in the UI, you can use <a href="https://github.com/facebook/react/tree/main/packages/react-devtools" class="notion-link-token notion-enable-hover"><span class="link-annotation-08ed6f2f-f308-4f1f-be46-c250cf530aba--1690460094" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">React Developer Tools</span></a> to inspect the props and move up the tree until you find the component responsible for updating the state. This lets you trace the bugs to their source:


<span class="notion-enable-hover" style="font-weight: 600" data-token-index="0">Composition vs Inheritance</span>

React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.

In this section, we will consider a few problems where developers new to React often reach for inheritance, and show how we can solve them with composition.

Containment

Some components don’t know their children ahead of time. This is especially common for components like <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">Sidebar</span> or <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">Dialog</span> that represent generic “boxes”.

We recommend that such components use the special <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">children</span> prop to pass children elements directly into their output:

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">FancyBorder</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">className</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token string" data-token-index="0">'FancyBorder FancyBorder-'</span><span class="token script language-javascript" data-token-index="0"> </span><span class="token operator" data-token-index="0">+</span><span class="token script language-javascript" data-token-index="0"> props</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">color</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">children</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

This lets other components pass arbitrary children to them by nesting the JSX:

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">WelcomeDialog</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">FancyBorder</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">color</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">blue</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h1</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">className</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">Dialog-title</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> Welcome </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">p</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">className</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">Dialog-message</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> Thank you for visiting our spacecraft! </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">p</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token class-name" data-token-index="0">FancyBorder</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

<a href="https://codepen.io/gaearon/pen/ozqNOV?editors=0010" class="notion-link-token notion-enable-hover"><span class="link-annotation-94dea564-7b88-4f6e-b0e0-5f9e3476192d--580669084" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

Anything inside the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">&lt;FancyBorder&gt;</span> JSX tag gets passed into the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">FancyBorder</span> component as a <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">children</span> prop. Since <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="7" spellcheck="false">FancyBorder</span> renders <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="9" spellcheck="false">{props.children}</span> inside a <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="11" spellcheck="false">&lt;div&gt;</span>, the passed elements appear in the final output.

While this is less common, sometimes you might need multiple “holes” in a component. In such cases you may come up with your own convention instead of using <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">children</span>:

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">SplitPane</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">className</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">SplitPane</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">className</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">SplitPane-left</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">left</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">div</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">className</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">SplitPane-right</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">right</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">div</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">App</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">&lt;</span><span data-token-index="0">SplitPaneleft</span><span class="token operator" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">Contacts</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0">right</span><span class="token operator" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">Chat</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">/</span><span class="token operator" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

<a href="https://codepen.io/gaearon/pen/gwZOJp?editors=0010" class="notion-link-token notion-enable-hover"><span class="link-annotation-7722f4f6-c6d9-46a5-9b6d-da455b8dc837--202944600" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

React elements like <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">&lt;Contacts /&gt;</span> and <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">&lt;Chat /&gt;</span> are just objects, so you can pass them as props like any other data. This approach may remind you of “slots” in other libraries but there are no limitations on what you can pass as props in React.

Specialization

Sometimes we think about components as being “special cases” of other components. For example, we might say that a <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">WelcomeDialog</span> is a special case of <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">Dialog</span>.

In React, this is also achieved by composition, where a more “specific” component renders a more “generic” one and configures it with props:

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">Dialog</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">FancyBorder</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">color</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">blue</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h1</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">className</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">Dialog-title</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">title</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">p</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">className</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">Dialog-message</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">message</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">p</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token class-name" data-token-index="0">FancyBorder</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">WelcomeDialog</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">Dialog</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">title</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">Welcome</span><span class="token punctuation" data-token-index="0">"</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">message</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">Thank you for visiting our spacecraft!</span><span class="token punctuation" data-token-index="0">"</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

<a href="https://codepen.io/gaearon/pen/kkEaOZ?editors=0010" class="notion-link-token notion-enable-hover"><span class="link-annotation-8637f6bb-b931-4878-859e-25293c197c2d--1975099284" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

Composition works equally well for components defined as classes:

<span class="token keyword" data-token-index="0">function</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">Dialog</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token class-name" data-token-index="0">FancyBorder</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">color</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">blue</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">h1</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">className</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">Dialog-title</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">title</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">h1</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">p</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">className</span><span class="token punctuation attr-equals" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">"</span><span class="token attr-value" data-token-index="0">Dialog-message</span><span class="token punctuation" data-token-index="0">"</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">message</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">p</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">children</span><span class="token punctuation" data-token-index="0">}</span><span class="token plain-text" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token class-name" data-token-index="0">FancyBorder</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">class</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">SignUpDialog</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">extends</span><span data-token-index="0"> </span><span class="token class-name" data-token-index="0">React</span><span class="token punctuation" data-token-index="0">.</span><span class="token class-name" data-token-index="0">Component</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">constructor</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">super</span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0">props</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">handleChange </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">handleChange</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">bind</span><span class="token punctuation" data-token-index="0">(</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">handleSignUp </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">handleSignUp</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">bind</span><span class="token punctuation" data-token-index="0">(</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">state </span><span class="token operator" data-token-index="0">=</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">login</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">''</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">render</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">return</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">(</span><span data-token-index="0"> </span><span class="token operator" data-token-index="0">&lt;</span><span data-token-index="0">Dialog title</span><span class="token operator" data-token-index="0">=</span><span class="token string" data-token-index="0">"Mars Exploration Program"</span><span data-token-index="0">message</span><span class="token operator" data-token-index="0">=</span><span class="token string" data-token-index="0">"How should we refer to you?"</span><span class="token operator" data-token-index="0">&gt;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">input</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">value</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">state</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">login</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">onChange</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">handleChange</span><span class="token punctuation" data-token-index="0">}</span><span class="token tag" data-token-index="0"> </span><span class="token punctuation" data-token-index="0">/&gt;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;</span><span class="token tag" data-token-index="0">button</span><span class="token tag" data-token-index="0"> </span><span class="token attr-name" data-token-index="0">onClick</span><span class="token script-punctuation punctuation" data-token-index="0">=</span><span class="token punctuation" data-token-index="0">{</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token script language-javascript" data-token-index="0">handleSignUp</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token plain-text" data-token-index="0"> Sign Me Up! </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token tag" data-token-index="0">button</span><span class="token punctuation" data-token-index="0">&gt;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">&lt;/</span><span class="token class-name" data-token-index="0">Dialog</span><span class="token punctuation" data-token-index="0">&gt;</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">handleChange</span><span class="token punctuation" data-token-index="0">(</span><span class="token parameter" data-token-index="0">e</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token function" data-token-index="0">setState</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">login</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> e</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">target</span><span class="token punctuation" data-token-index="0">.</span><span data-token-index="0">value</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">handleSignUp</span><span class="token punctuation" data-token-index="0">(</span><span class="token punctuation" data-token-index="0">)</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0"> </span><span class="token function" data-token-index="0">alert</span><span class="token punctuation" data-token-index="0">(</span><span class="token template-punctuation string" data-token-index="0">\`</span><span class="token string" data-token-index="0">Welcome aboard, </span><span class="token interpolation-punctuation punctuation" data-token-index="0">${</span><span class="token keyword" data-token-index="0">this</span><span class="token punctuation" data-token-index="0">.</span><span class="token interpolation" data-token-index="0">state</span><span class="token punctuation" data-token-index="0">.</span><span class="token interpolation" data-token-index="0">login</span><span class="token interpolation-punctuation punctuation" data-token-index="0">}</span><span class="token string" data-token-index="0">!</span><span class="token template-punctuation string" data-token-index="0">\`</span><span class="token punctuation" data-token-index="0">)</span><span class="token punctuation" data-token-index="0">;</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">}</span>

JavaScript

<a href="https://codepen.io/gaearon/pen/gwZbYa?editors=0010" class="notion-link-token notion-enable-hover"><span class="link-annotation-7e75b163-5848-4e40-ab77-049c95fc8493--1181273933" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Try it on CodePen</span></a>

So What About Inheritance?

At Facebook, we use React in thousands of components, and we haven’t found any use cases where we would recommend creating component inheritance hierarchies.

Props and composition give you all the flexibility you need to customize a component’s look and behavior in an explicit and safe way. Remember that components may accept arbitrary props, including primitive values, React elements, or functions.

If you want to reuse non-UI functionality between components, we suggest extracting it into a separate JavaScript module. The components may import it and use that function, object, or a class, without extending it.

<span class="notion-enable-hover" style="font-weight: 600" data-token-index="0">Thinking in React</span>

React is, in our opinion, the premier way to build big, fast Web apps with JavaScript. It has scaled very well for us at Facebook and Instagram.

One of the many great parts of React is how it makes you think about apps as you build them. In this document, we’ll walk you through the thought process of building a searchable product data table using React.

Start With A Mock

Imagine that we already have a JSON API and a mock from our designer. The mock looks like this:

![](data:image/png;base64,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)

Our JSON API returns some data that looks like this:

<span class="token punctuation" data-token-index="0">\[</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">category</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">"Sporting Goods"</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> price</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">"$49.99"</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> stocked</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token boolean" data-token-index="0">true</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> name</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">"Football"</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">category</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">"Sporting Goods"</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> price</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">"$9.99"</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> stocked</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token boolean" data-token-index="0">true</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> name</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">"Baseball"</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">category</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">"Sporting Goods"</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> price</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">"$29.99"</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> stocked</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token boolean" data-token-index="0">false</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> name</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">"Basketball"</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">category</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">"Electronics"</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> price</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">"$99.99"</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> stocked</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token boolean" data-token-index="0">true</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> name</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">"iPod Touch"</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">category</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">"Electronics"</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> price</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">"$399.99"</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> stocked</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token boolean" data-token-index="0">false</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> name</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">"iPhone 5"</span><span class="token punctuation" data-token-index="0">}</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">{</span><span data-token-index="0">category</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">"Electronics"</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> price</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">"$199.99"</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> stocked</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token boolean" data-token-index="0">true</span><span class="token punctuation" data-token-index="0">,</span><span data-token-index="0"> name</span><span class="token operator" data-token-index="0">:</span><span data-token-index="0"> </span><span class="token string" data-token-index="0">"Nexus 7"</span><span class="token punctuation" data-token-index="0">}</span><span data-token-index="0"> </span><span class="token punctuation" data-token-index="0">\]</span><span data-token-index="0">;</span>

JSON

Step 1: Break The UI Into A Component Hierarchy

The first thing you’ll want to do is to draw boxes around every component (and subcomponent) in the mock and give them all names. If you’re working with a designer, they may have already done this, so go talk to them! Their Photoshop layer names may end up being the names of your React components!

But how do you know what should be its own component? Use the same techniques for deciding if you should create a new function or object. One such technique is the <a href="https://en.wikipedia.org/wiki/Single_responsibility_principle" class="notion-link-token notion-enable-hover"><span class="link-annotation-8d447c6d-e02d-4a7e-af10-06b2bf5c17ad--820476997" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">single responsibility principle</span></a>, that is, a component should ideally only do one thing. If it ends up growing, it should be decomposed into smaller subcomponents.

Since you’re often displaying a JSON data model to a user, you’ll find that if your model was built correctly, your UI (and therefore your component structure) will map nicely. That’s because UI and data models tend to adhere to the same <span class="notion-enable-hover" style="font-style: italic" data-token-index="1">information architecture</span>. Separate your UI into components, where each component matches one piece of your data model.

![](data:image/png;base64,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)

You’ll see here that we have five components in our app. We’ve italicized the data each component represents.

<span class="pseudoBefore" style="--pseudoBefore--content: '1.'"></span>

<span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                              font-weight: 600;
                            " data-token-index="0" spellcheck="false">FilterableProductTable</span><span class="notion-enable-hover" style="font-weight: 600" data-token-index="1"> (orange):</span> contains the entirety of the example

<span class="pseudoBefore" style="--pseudoBefore--content: '2.'"></span>

<span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                              font-weight: 600;
                            " data-token-index="0" spellcheck="false">SearchBar</span><span class="notion-enable-hover" style="font-weight: 600" data-token-index="1"> (blue):</span> receives all <span class="notion-enable-hover" style="font-style: italic" data-token-index="3">user input</span>

<span class="pseudoBefore" style="--pseudoBefore--content: '3.'"></span>

<span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                              font-weight: 600;
                            " data-token-index="0" spellcheck="false">ProductTable</span><span class="notion-enable-hover" style="font-weight: 600" data-token-index="1"> (green):</span> displays and filters the <span class="notion-enable-hover" style="font-style: italic" data-token-index="3">data collection</span> based on <span class="notion-enable-hover" style="font-style: italic" data-token-index="5">user input</span>

<span class="pseudoBefore" style="--pseudoBefore--content: '4.'"></span>

<span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                              font-weight: 600;
                            " data-token-index="0" spellcheck="false">ProductCategoryRow</span><span class="notion-enable-hover" style="font-weight: 600" data-token-index="1"> (turquoise):</span> displays a heading for each <span class="notion-enable-hover" style="font-style: italic" data-token-index="3">category</span>

<span class="pseudoBefore" style="--pseudoBefore--content: '5.'"></span>

<span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                              font-weight: 600;
                            " data-token-index="0" spellcheck="false">ProductRow</span><span class="notion-enable-hover" style="font-weight: 600" data-token-index="1"> (red):</span> displays a row for each <span class="notion-enable-hover" style="font-style: italic" data-token-index="3">product</span>

If you look at <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">ProductTable</span>, you’ll see that the table header (containing the “Name” and “Price” labels) isn’t its own component. This is a matter of preference, and there’s an argument to be made either way. For this example, we left it as part of <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">ProductTable</span> because it is part of rendering the <span class="notion-enable-hover" style="font-style: italic" data-token-index="5">data collection</span> which is <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="7" spellcheck="false">ProductTable</span>’s responsibility. However, if this header grows to be complex (e.g., if we were to add affordances for sorting), it would certainly make sense to make this its own <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="9" spellcheck="false">ProductTableHeader</span> component.

Now that we’ve identified the components in our mock, let’s arrange them into a hierarchy. Components that appear within another component in the mock should appear as a child in the hierarchy:

<span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="0" spellcheck="false">FilterableProductTable</span>

<span class="notion-enable-hover" style="
                                    font-family: 'SFMono-Regular', Menlo,
                                      Consolas, 'PT Mono', 'Liberation Mono',
                                      Courier, monospace;
                                    line-height: normal;
                                    background: rgba(135, 131, 120, 0.15);
                                    color: #eb5757;
                                    border-radius: 3px;
                                    font-size: 85%;
                                    padding: 0.2em 0.4em;
                                  " data-token-index="0" spellcheck="false">SearchBar</span>

<span class="notion-enable-hover" style="
                                    font-family: 'SFMono-Regular', Menlo,
                                      Consolas, 'PT Mono', 'Liberation Mono',
                                      Courier, monospace;
                                    line-height: normal;
                                    background: rgba(135, 131, 120, 0.15);
                                    color: #eb5757;
                                    border-radius: 3px;
                                    font-size: 85%;
                                    padding: 0.2em 0.4em;
                                  " data-token-index="0" spellcheck="false">ProductTable</span>

<span class="notion-enable-hover" style="
                                          font-family: 'SFMono-Regular', Menlo,
                                            Consolas, 'PT Mono',
                                            'Liberation Mono', Courier,
                                            monospace;
                                          line-height: normal;
                                          background: rgba(135, 131, 120, 0.15);
                                          color: #eb5757;
                                          border-radius: 3px;
                                          font-size: 85%;
                                          padding: 0.2em 0.4em;
                                        " data-token-index="0" spellcheck="false">ProductCategoryRow</span>

<span class="notion-enable-hover" style="
                                          font-family: 'SFMono-Regular', Menlo,
                                            Consolas, 'PT Mono',
                                            'Liberation Mono', Courier,
                                            monospace;
                                          line-height: normal;
                                          background: rgba(135, 131, 120, 0.15);
                                          color: #eb5757;
                                          border-radius: 3px;
                                          font-size: 85%;
                                          padding: 0.2em 0.4em;
                                        " data-token-index="0" spellcheck="false">ProductRow</span>

Step 2: Build A Static Version in React

See the Pen <a href="https://codepen.io/gaearon/pen/BwWzwm" class="notion-link-token notion-enable-hover"><span class="link-annotation-6c0f68b0-f256-4c10-b6a8-7845cb40928b-227624688" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Thinking In React: Step 2</span></a> on <a href="https://codepen.io/" class="notion-link-token notion-enable-hover"><span class="link-annotation-6c0f68b0-f256-4c10-b6a8-7845cb40928b--676656968" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">CodePen</span></a>.

Now that you have your component hierarchy, it’s time to implement your app. The easiest way is to build a version that takes your data model and renders the UI but has no interactivity. It’s best to decouple these processes because building a static version requires a lot of typing and no thinking, and adding interactivity requires a lot of thinking and not a lot of typing. We’ll see why.

To build a static version of your app that renders your data model, you’ll want to build components that reuse other components and pass data using <span class="notion-enable-hover" style="font-style: italic" data-token-index="1">props</span>. <span class="notion-enable-hover" style="font-style: italic" data-token-index="3">props</span> are a way of passing data from parent to child. If you’re familiar with the concept of <span class="notion-enable-hover" style="font-style: italic" data-token-index="5">state</span>, <span class="notion-enable-hover" style="font-weight: 600" data-token-index="7">don’t use state at all</span> to build this static version. State is reserved only for interactivity, that is, data that changes over time. Since this is a static version of the app, you don’t need it.

You can build top-down or bottom-up. That is, you can either start with building the components higher up in the hierarchy (i.e. starting with <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">FilterableProductTable</span>) or with the ones lower in it (<span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">ProductRow</span>). In simpler examples, it’s usually easier to go top-down, and on larger projects, it’s easier to go bottom-up and write tests as you build.

At the end of this step, you’ll have a library of reusable components that render your data model. The components will only have <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">render()</span> methods since this is a static version of your app. The component at the top of the hierarchy (<span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">FilterableProductTable</span>) will take your data model as a prop. If you make a change to your underlying data model and call <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">ReactDOM.render()</span> again, the UI will be updated. You can see how your UI is updated and where to make changes. React’s <span class="notion-enable-hover" style="font-weight: 600" data-token-index="7">one-way data flow</span> (also called <span class="notion-enable-hover" style="font-style: italic" data-token-index="9">one-way binding</span>) keeps everything modular and fast.

Refer to the <a href="https://reactjs.org/docs/" class="notion-link-token notion-enable-hover"><span class="link-annotation-3ae05da0-2a97-4c31-9bf5-23bffa7638e0--567085036" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">React docs</span></a> if you need help executing this step.

A Brief Interlude: Props vs State

There are two types of “model” data in React: props and state. It’s important to understand the distinction between the two; skim <a href="https://reactjs.org/docs/state-and-lifecycle.html" class="notion-link-token notion-enable-hover"><span class="link-annotation-79b8315e-c23a-42f8-a971-75c4bebc76a1--1011996363" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">the official React docs</span></a> if you aren’t sure what the difference is. See also <a href="https://reactjs.org/docs/faq-state.html#what-is-the-difference-between-state-and-props" class="notion-link-token notion-enable-hover"><span class="link-annotation-79b8315e-c23a-42f8-a971-75c4bebc76a1-1073605615" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">FAQ: What is the difference between state and props?</span></a>

Step 3: Identify The Minimal (but complete) Representation Of UI State

To make your UI interactive, you need to be able to trigger changes to your underlying data model. React achieves this with <span class="notion-enable-hover" style="font-weight: 600" data-token-index="1">state</span>.

To build your app correctly, you first need to think of the minimal set of mutable state that your app needs. The key here is <a href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself" class="notion-link-token notion-enable-hover"><span class="link-annotation-1d410e38-9a9c-4994-8af5-1baa69d04470--1695750070" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">DRY: </span></a><a href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself" class="notion-link-token notion-enable-hover"><span class="link-annotation-1d410e38-9a9c-4994-8af5-1baa69d04470--1695750070" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Don’t Repeat Yourself</span></a>. Figure out the absolute minimal representation of the state your application needs and compute everything else you need on-demand. For example, if you’re building a TODO list, keep an array of the TODO items around; don’t keep a separate state variable for the count. Instead, when you want to render the TODO count, take the length of the TODO items array.

Think of all the pieces of data in our example application. We have:

The original list of products

The search text the user has entered

The value of the checkbox

The filtered list of products

Let’s go through each one and figure out which one is state. Ask three questions about each piece of data:

<span class="pseudoBefore" style="--pseudoBefore--content: '1.'"></span>

Is it passed in from a parent via props? If so, it probably isn’t state.

<span class="pseudoBefore" style="--pseudoBefore--content: '2.'"></span>

Does it remain unchanged over time? If so, it probably isn’t state.

<span class="pseudoBefore" style="--pseudoBefore--content: '3.'"></span>

Can you compute it based on any other state or props in your component? If so, it isn’t state.

The original list of products is passed in as props, so that’s not state. The search text and the checkbox seem to be state since they change over time and can’t be computed from anything. And finally, the filtered list of products isn’t state because it can be computed by combining the original list of products with the search text and value of the checkbox.

So finally, our state is:

The search text the user has entered

The value of the checkbox

Step 4: Identify Where Your State Should Live

See the Pen <a href="https://codepen.io/gaearon/pen/qPrNQZ" class="notion-link-token notion-enable-hover"><span class="link-annotation-0c32bd86-8ec3-4c1e-a59b-2e79f56adaea-1537938342" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Thinking In React: Step 4</span></a> on <a href="https://codepen.io/" class="notion-link-token notion-enable-hover"><span class="link-annotation-0c32bd86-8ec3-4c1e-a59b-2e79f56adaea--676656968" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">CodePen</span></a>.

OK, so we’ve identified what the minimal set of app state is. Next, we need to identify which component mutates, or <span class="notion-enable-hover" style="font-style: italic" data-token-index="1">owns</span>, this state.

Remember: React is all about one-way data flow down the component hierarchy. It may not be immediately clear which component should own what state. <span class="notion-enable-hover" style="font-weight: 600" data-token-index="1">This is often the most challenging part for newcomers to understand,</span> so follow these steps to figure it out:

For each piece of state in your application:

Identify every component that renders something based on that state.

Find a common owner component (a single component above all the components that need the state in the hierarchy).

Either the common owner or another component higher up in the hierarchy should own the state.

If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.

Let’s run through this strategy for our application:

<span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="0" spellcheck="false">ProductTable</span> needs to filter the product list based on state and <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="2" spellcheck="false">SearchBar</span> needs to display the search text and checked state.

The common owner component is <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="1" spellcheck="false">FilterableProductTable</span>.

It conceptually makes sense for the filter text and checked value to live in <span class="notion-enable-hover" style="
                              font-family: 'SFMono-Regular', Menlo, Consolas,
                                'PT Mono', 'Liberation Mono', Courier, monospace;
                              line-height: normal;
                              background: rgba(135, 131, 120, 0.15);
                              color: #eb5757;
                              border-radius: 3px;
                              font-size: 85%;
                              padding: 0.2em 0.4em;
                            " data-token-index="1" spellcheck="false">FilterableProductTable</span>

Cool, so we’ve decided that our state lives in <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">FilterableProductTable</span>. First, add an instance property <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">this.state = {filterText: '', inStockOnly: false}</span> to <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">FilterableProductTable</span>’s <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="7" spellcheck="false">constructor</span> to reflect the initial state of your application. Then, pass <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="9" spellcheck="false">filterText</span> and <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="11" spellcheck="false">inStockOnly</span> to <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="13" spellcheck="false">ProductTable</span> and <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="15" spellcheck="false">SearchBar</span> as a prop. Finally, use these props to filter the rows in <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="17" spellcheck="false">ProductTable</span> and set the values of the form fields in <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="19" spellcheck="false">SearchBar</span>.

You can start seeing how your application will behave: set <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">filterText</span> to <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">"ball"</span> and refresh your app. You’ll see that the data table is updated correctly.

Step 5: Add Inverse Data Flow

See the Pen <a href="https://codepen.io/gaearon/pen/LzWZvb" class="notion-link-token notion-enable-hover"><span class="link-annotation-c0a2b578-cd88-4620-b3c5-b7e18e9c8c4e-516655967" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">Thinking In React: Step 5</span></a> on <a href="https://codepen.io/" class="notion-link-token notion-enable-hover"><span class="link-annotation-c0a2b578-cd88-4620-b3c5-b7e18e9c8c4e--676656968" style="
                              border-bottom: 0.05em solid;
                              border-color: rgba(55, 53, 47, 0.4);
                              opacity: 0.7;
                            ">CodePen</span></a>.

So far, we’ve built an app that renders correctly as a function of props and state flowing down the hierarchy. Now it’s time to support data flowing the other way: the form components deep in the hierarchy need to update the state in <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">FilterableProductTable</span>.

React makes this data flow explicit to help you understand how your program works, but it does require a little more typing than traditional two-way data binding.

If you try to type or check the box in the current version of the example, you’ll see that React ignores your input. This is intentional, as we’ve set the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">value</span> prop of the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">input</span> to always be equal to the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">state</span> passed in from <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="7" spellcheck="false">FilterableProductTable</span>.

Let’s think about what we want to happen. We want to make sure that whenever the user changes the form, we update the state to reflect the user input. Since components should only update their own state, <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="1" spellcheck="false">FilterableProductTable</span> will pass callbacks to <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="3" spellcheck="false">SearchBar</span> that will fire whenever the state should be updated. We can use the <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="5" spellcheck="false">onChange</span> event on the inputs to be notified of it. The callbacks passed by <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="7" spellcheck="false">FilterableProductTable</span> will call <span class="notion-enable-hover" style="
                            font-family: 'SFMono-Regular', Menlo, Consolas,
                              'PT Mono', 'Liberation Mono', Courier, monospace;
                            line-height: normal;
                            background: rgba(135, 131, 120, 0.15);
                            color: #eb5757;
                            border-radius: 3px;
                            font-size: 85%;
                            padding: 0.2em 0.4em;
                          " data-token-index="9" spellcheck="false">setState()</span>, and the app will be updated.

And That’s It

Hopefully, this gives you an idea of how to think about building components and applications with React. While it may be a little more typing than you’re used to, remember that code is read far more than it’s written, and it’s less difficult to read this modular, explicit code. As you start to build large libraries of components, you’ll appreciate this explicitness and modularity, and with code reuse, your lines of code will start to shrink. :)

[](https://webdevhub42.notion.site/Advanced-Content-fbe1ec3ca3544951b5763b051b843949)

Advanced Content

[](https://webdevhub42.notion.site/React-Component-3dc17bc49a8e4d7e89efcc1281e747d9)

React Component

\-

<span style="
        margin: 0px auto;
        border: 2px dotted rgb(0, 0, 0);
        position: absolute;
        z-index: 2147483647;
        visibility: hidden;
        left: 1316px;
        width: 0px;
        top: 203px;
        height: 0px;
      "></span><span style="
        z-index: 2147483647;
        position: absolute;
        visibility: hidden;
        left: 1301px;
        width: 50px;
        top: 188px;
        height: 20px;
        font-size: 10px;
        color: black;
      "></span>