<h1 align="center">
<br>
  <a href="https://github.com/leonardomso/33"><img src="https://i.imgur.com/dsHmk6H.jpg" alt="33 Concepts Every JS Developer Should Know" width=200"></a>
  <br>
    <br>
  33 Concepts Every JavaScript Developer Should Know
  <br><br>
</h1>

<p align="center">
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="License MIT">
  </a>
  <a href="https://travis-ci.com/leonardomso/33-js-concepts">
    <img src="https://img.shields.io/travis/leonardomso/33-js-concepts/master.svg?style=flat-square&label=build&logo=travis" alt="Build Status">
  </a>
</p>

## Introduction

This repository was created with the intention of helping developers master their concepts in JavaScript. It is not a requirement, but a guide for future studies. It is based on an article written by [Stephen Curtis](https://twitter.com/stephenthecurt) and you can read it [here](https://medium.com/@stephenthecurt/33-fundamentals-every-javascript-developer-should-know-13dd720a90d1).

**π Considered by GitHub as one of the [top open source projects of 2018!](https://blog.github.com/2018-12-13-new-open-source-projects/)**

## Community

Feel free to submit a PR adding a link to your own recaps or reviews. If you want to translate the repo into your native language, please feel free to do so.

All the translations for this repo will be listed below:

- [Chinese](https://github.com/stephentian/33-js-concepts) β Re Tian
- [Portuguese-BR](https://github.com/tiagoboeing/33-js-concepts) β Tiago Boeing
- [Korean](https://github.com/yjs03057/33-js-concepts.git) β Suin Lee
- [Spanish](https://github.com/adonismendozaperez/33-js-conceptos) β Adonis Mendoza
- [Turkish](https://github.com/ilker0/33-js-concepts) β Δ°lker Demir
- [Russian](https://github.com/gumennii/33-js-concepts) β Mihail Gumennii
- [TiαΊΏng Viα»t](https://github.com/nguyentranchung/33-js-concepts) β Nguyα»n TrαΊ§n Chung
- [Polish](https://github.com/lip3k/33-js-concepts) β Dawid Lipinski
- [Persian](https://github.com/majidalavizadeh/33-js-concepts) β Majid Alavizadeh
- [Indonesian](https://github.com/rijdz/33-js-concepts) β Rijdzuan Sampoerna
- [French](https://github.com/robinmetral/33-concepts-js) β Robin MΓ©tral
- [Hindi](https://github.com/vikaschauhan/33-js-concepts) β Vikas Chauhan
- [Greek](https://github.com/DimitrisZx/33-js-concepts) β Dimitris Zarachanis

---

## Table of Contents

1. **[Call Stack](#1-call-stack)**
2. **[Primitive Types](#2-primitive-types)**
3. **[Value Types and Reference Types](#3-value-types-and-reference-types)**
4. **[Implicit, Explicit, Nominal, Structuring and Duck Typing](#4-implicit-explicit-nominal-structuring-and-duck-typing)**
5. **[== vs === vs typeof](#5--vs--vs-typeof)**
6. **[Function Scope, Block Scope and Lexical Scope](#6-function-scope-block-scope-and-lexical-scope)**
7. **[Expression vs Statement](#7-expression-vs-statement)**
8. **[IIFE, Modules and Namespaces](#8-iife-modules-and-namespaces)**
9. **[Message Queue and Event Loop](#9-message-queue-and-event-loop)**
10. **[setTimeout, setInterval and requestAnimationFrame](#10-settimeout-setinterval-and-requestanimationframe)**
11. **[JavaScript Engines](#11-javascript-engines)**
12. **[Bitwise Operators, Type Arrays and Array Buffers](#12-bitwise-operators-type-arrays-and-array-buffers)**
13. **[DOM and Layout Trees](#13-dom-and-layout-trees)**
14. **[Factories and Classes](#14-factories-and-classes)**
15. **[this, call, apply and bind](#15-this-call-apply-and-bind)**
16. **[new, Constructor, instanceof and Instances](#16-new-constructor-instanceof-and-instances)**
17. **[Prototype Inheritance and Prototype Chain](#17-prototype-inheritance-and-prototype-chain)**
18. **[Object.create and Object.assign](#18-objectcreate-and-objectassign)**
19. **[map, reduce, filter](#19-map-reduce-filter)**
20. **[Pure Functions, Side Effects and State Mutation](#20-pure-functions-side-effects-and-state-mutation)**
21. **[Closures](#21-closures)**
22. **[High Order Functions](#22-high-order-functions)**
23. **[Recursion](#23-recursion)**
24. **[Collections and Generators](#24-collections-and-generators)**
25. **[Promises](#25-promises)**
26. **[async/await](#26-asyncawait)**
27. **[Data Structures](#27-data-structures)**
28. **[Expensive Operation and Big O Notation](#28-expensive-operation-and-big-o-notation)**
29. **[Algorithms](#29-algorithms)**
30. **[Inheritance, Polymorphism and Code Reuse](#30-inheritance-polymorphism-and-code-reuse)**
31. **[Design Patterns](#31-design-patterns)**
32. **[Partial Applications, Currying, Compose and Pipe](#32-partial-applications-currying-compose-and-pipe)**
33. **[Clean Code](#33-clean-code)**

---

## 1. Call Stack

### Articles

- π [Understanding Javascript Call Stack, Event Loops β Gaurav Pandvia](https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec)
- π [Understanding the JavaScript Call Stack β Charles Freeborn](https://medium.freecodecamp.org/understanding-the-javascript-call-stack-861e41ae61d4)
- π [Javascript: What Is The Execution Context? What Is The Call Stack? β Valentino Gagliardi](https://www.valentinog.com/blog/js-execution-context-call-stack/)
- π [What is the JS Event Loop and Call Stack? β Jess Telford](https://gist.github.com/jesstelford/9a35d20a2aa044df8bf241e00d7bc2d0)
- π [Call Stack β MDN](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack)
- π [Understanding Execution Context and Execution Stack in Javascript β Sukhjinder Arora](https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0)
- π [How JavaScript Works: An Overview of the Engine, the Runtime, and the Call Stack β Alexander Zlatkov](https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf)
- π [The Ultimate Guide to Execution Contexts, Hoisting, Scopes, and Closures in JavaScript β Tyler McGinnis](https://tylermcginnis.com/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/)

### Videos

- π₯ [Javascript: the Call Stack explained β Coding Blocks India](https://www.youtube.com/watch?v=w6QGEiQceOM)
- π₯ [The JS Call Stack Explained In 9 Minutes β Colt Steele](https://www.youtube.com/watch?v=W8AeMrVtFLY)
- π₯ [JavaScript Execution Stack β Codecademy](https://www.youtube.com/watch?v=jT0USJeNFEA)
- π₯ [What is the Call Stack? β Eric Traub](https://www.youtube.com/watch?v=w7QWQlkLY_s)
- π₯ [The Call Stack β Kevin Drumm](https://www.youtube.com/watch?v=Q2sFmqvpBe0)
- π₯ [Understanding JavaScript Execution β Codesmith](https://www.youtube.com/watch?v=Z6a1cLyq7Ac&list=PLWrQZnG8l0E4kd1T_nyuVoxQUaYEWFgcD)
- π₯ [Call Stack & Event Loop β movies com](https://www.youtube.com/watch?v=mk0lu9MKBto)
- π₯ [The Ultimate Guide to Execution Contexts, Hoisting, Scopes, and Closures in JavaScript β Tyler McGinnis](https://www.youtube.com/watch?v=Nt-qa_LlUH0)
- π₯ [What the heck is the event loop anyway? β Philip Roberts](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

**[β¬ Back to Top](#table-of-contents)**

---

## 2. Primitive Types

### Articles

- π [How numbers are encoded in JavaScript β Dr. Axel Rauschmayer](http://2ality.com/2012/04/number-encoding.html)
- π [What You Need to Know About JavaScript Number Type β Max Wizard K](https://medium.com/dailyjs/javascripts-number-type-8d59199db1b6)
- π [What Every JavaScript Developer Should Know About Floating Point Numbers β Chewxy](https://blog.chewxy.com/2014/02/24/what-every-javascript-developer-should-know-about-floating-point-numbers/)
- π [The Secret Life of JavaScript Primitives β Angus Croll](https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/)
- π [Primitive Types β Flow](https://flow.org/en/docs/types/primitives/)
- π [(Not) Everything in JavaScript is an Object - Daniel Li](http://blog.brew.com.hk/not-everything-in-javascript-is-an-object/)
- π [JavaScript data types and data structures - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Primitive_values)

### Videos

- π₯ [JavaScript Reference vs Primitive Types β Academind](https://www.youtube.com/watch?v=9ooYYRLdg_g)
- π₯ [JavaScript Primitive Types β Simon Sez IT](https://www.youtube.com/watch?v=HsbWQsSCE5Y)
- π₯ [Value Types and Reference Types in JavaScript β Programming with Mosh](https://www.youtube.com/watch?v=e-_mDyqm2oU)
- π₯ [JavaScript Primitive Data Types β Avelx](https://www.youtube.com/watch?v=qw3j0A3DIzQ)
- π₯ [Everything you never wanted to know about JavaScript numbers β Bartek Szopka](https://www.youtube.com/watch?v=MqHDDtVYJRI)
- π₯ [What are variables in Javascript? β JS For Everyone](https://www.youtube.com/watch?v=B4Bbmei_thw)

**[β¬ Back to Top](#table-of-contents)**

---

## 3. Value Types and Reference Types

### Articles

- π [Explaining Value vs. Reference in Javascript β Arnav Aggarwal](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)
- π [Understand Value and Reference Types in JavaScript β Zsolt Nagy](https://www.zsoltnagy.eu/understand-value-and-reference-types-in-javascript/)
- π [Primitive Types & Reference Types in JavaScript β Bran van der Meer](https://gist.github.com/branneman/7fb06d8a74d7e6d4cbcf75c50fec599c)
- π [Value Types, Reference Types and Scope in JavaScript β Ben Aston](https://medium.com/@benastontweet/lesson-1b-javascript-fundamentals-380f601ba851)
- π [Back to roots: JavaScript Value vs Reference β Miro Koczka](https://medium.com/dailyjs/back-to-roots-javascript-value-vs-reference-8fb69d587a18)
- π [Grasp βBy Value " and βBy Reference " in JavaScript β LΓ©na Faure](https://hackernoon.com/grasp-by-value-and-by-reference-in-javascript-7ed75efa1293)
- π [JavaScript Reference and Copy Variables β VΓ­tor Capretz](https://hackernoon.com/javascript-reference-and-copy-variables-b0103074fdf0)
- π [JavaScript Primitive vs Reference Values](http://www.javascripttutorial.net/javascript-primitive-vs-reference-values/)
- π [JavaScript by Reference vs. by Value β nrabinowitz](https://stackoverflow.com/questions/6605640/javascript-by-reference-vs-by-value)

### Videos

- π₯ [Javascript Pass by Value vs Pass by Reference β techsith](https://www.youtube.com/watch?v=E-dAnFdq8k8)
- π₯ [JavaScript Value vs Reference Types β Programming with Mosh](https://www.youtube.com/watch?v=fD0t_DKREbE)

**[β¬ Back to Top](#table-of-contents)**

---

## 4. Implicit, Explicit, Nominal, Structuring and Duck Typing

### Articles

- π [What you need to know about Javascript's Implicit Coercion β Promise Tochi](https://dev.to/promhize/what-you-need-to-know-about-javascripts-implicit-coercion-e23)
- π [JavaScript Type Coercion Explained β Alexey Samoshkin](https://medium.freecodecamp.org/js-type-coercion-explained-27ba3d9a2839)
- π [Javascript Coercion Explained β Ben Garrison](https://hackernoon.com/javascript-coercion-explained-545c895213d3)
- π [What exactly is Type Coercion in Javascript? - Stack Overflow](https://stackoverflow.com/questions/19915688/what-exactly-is-type-coercion-in-javascript)
- π [You Don't Know JS: Types & Grammar [Book] β Kyle Simpson](https://www.oreilly.com/library/view/you-dont-know/9781491905159/ch04.html)
- π [Type Coercion in JavaScript, and why everyone gets it wrong.](https://thedevs.network/blog/type-coercion-in-javascript-and-why-everyone-gets-it-wrong)

### Videos

- π₯ [== ? === ??? ...#@^% - Shirmung Bielefeld](https://www.youtube.com/watch?v=qGyqzN0bjhc&t)
- π₯ [Coercion in Javascript - Hitesh Choudhary](https://www.youtube.com/watch?v=b04Q_vyqEG8)
- π₯ [JavaScript Questions: What is Coercion? - Steven Hancock](https://www.youtube.com/watch?v=z4-8wMSPJyI)

**[β¬ Back to Top](#table-of-contents)**

---

## 5. == vs === vs typeof

### Articles

- π [JavaScript Double Equals vs. Triple Equals β Brandon Morelli](https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a)
- π [What is the difference between =, ==, and === in JS? β Codecademy](https://www.codecademy.com/en/forum_questions/558ea4f5e39efed371000508)
- π [Should I use === or == equality comparison operator in JavaScript? β Panu Pitkamaki](https://bytearcher.com/articles/equality-comparison-operator-javascript/)
- π [== vs === JavaScript: Double Equals and Coercion β AJ Meyghani](https://www.codementor.io/javascript/tutorial/double-equals-and-coercion-in-javascript)
- π [Why Use the Triple-Equals Operator in JavaScript? β Louis Lazaris](https://www.impressivewebs.com/why-use-triple-equals-javascipt/)
- π [What is the difference between == and === in JavaScript? β Craig Buckler](https://www.oreilly.com/learning/what-is-the-difference-between-and-in-javascript)
- π [Why javascript's typeof always return "object"? β Stack Overflow](https://stackoverflow.com/questions/3787901/why-javascripts-typeof-always-return-object)
- π [Checking Types in Javascript β Toby Ho](http://tobyho.com/2011/01/28/checking-types-in-javascript/)
- π [How to better check data types in JavaScript β Webbjocke](https://webbjocke.com/javascript-check-data-types/)
- π [Checking for the Absence of a Value in JavaScript β Tomer Aberbach](https://tomeraberba.ch/html/post/checking-for-the-absence-of-a-value-in-javascript.html)

### Videos

- π₯ [JavaScript - The typeof operator β Java Brains](https://www.youtube.com/watch?v=ol_su88I3kw)
- π₯ [Javascript typeof operator β DevDelight](https://www.youtube.com/watch?v=qPYhTPt_SbQ)

**[β¬ Back to Top](#table-of-contents)**

---

## 6. Function Scope, Block Scope and Lexical Scope

### Articles

- π [You Don't Know JS: Scope & Closures [Book] β Kyle Simpson](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch3.md)
- π [JavaScript FunctionsβββUnderstanding The Basics β Brandon Morelli](https://codeburst.io/javascript-functions-understanding-the-basics-207dbf42ed99)
- π [The battle between Function Scope and Block Scope β Marius Herring](http://www.deadcoderising.com/2017-04-11-es6-var-let-and-const-the-battle-between-function-scope-and-block-scope/)
- π [Emulating Block Scope in JavaScript β Josh Clanton](http://adripofjavascript.com/blog/drips/emulating-block-scope-in-javascript.html)
- π [The Difference Between Function and Block Scope in JavaScript β Joseph Cardillo](https://medium.com/@josephcardillo/the-difference-between-function-and-block-scope-in-javascript-4296b2322abe)
- π [Function Scopes and Block Scopes in JavaScript β Samer Buna](https://edgecoders.com/function-scopes-and-block-scopes-in-javascript-25bbd7f293d7)
- π [Understanding Scope and Context in JavaScript | Ryan Morr](http://ryanmorr.com/understanding-scope-and-context-in-javascript/)
- π [JavaScript Scope and Closures β Zell Liew](https://css-tricks.com/javascript-scope-closures/)
- π [Understanding Scope in JavaScript β Wissam Abirached](https://developer.telerik.com/topics/web-development/understanding-scope-in-javascript/)
- π [Speaking JavaScript - Variables: Scopes, Environments, and Closures β Dr. Axel Rauschmayer](http://speakingjs.com/es5/ch16.html)
- π [Understanding Scope in JavaScript β Hammad Ahmed](https://scotch.io/tutorials/understanding-scope-in-javascript)

### Videos

- π₯ [What Makes Javascript Weird ... and Awesome pt. 4 β LearnCode.academy](https://www.youtube.com/watch?v=SBwoFkRjZvE)
- π₯ [Variable Scope in JavaScript β Kirupa Chinnathambi](https://www.youtube.com/watch?v=dhp57T3p760)
- π₯ [JavaScript Block Scope and Function Scope β mmtuts](https://www.youtube.com/watch?v=aK_nuUAdr8E)
- π₯ [What the Heck is Lexical Scope? β NWCalvank](https://www.youtube.com/watch?v=GhNA0r10MmA)

**[β¬ Back to Top](#table-of-contents)**

---

## 7. Expression vs Statement

### Articles

- π [All you need to know about Javascript's Expressions, Statements and Expression Statements β Promise Tochi](https://dev.to/promhize/javascript-in-depth-all-you-need-to-know-about-expressions-statements-and-expression-statements-5k2)
- π [Function Expressions vs Function Declarations β Paul Wilkins](https://www.sitepoint.com/function-expressions-vs-declarations/)
- π [JavaScript Function β Declaration vs Expression β Ravi Roshan](https://medium.com/@raviroshan.talk/javascript-function-declaration-vs-expression-f5873b8c7b38)
- π [Function Declarations vs. Function Expressions β Mandeep Singh](https://medium.com/@mandeep1012/function-declarations-vs-function-expressions-b43646042052)
- π [Function Declarations vs. Function Expressions β Anguls Croll](https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/)

### Videos

- π₯ [Expressions vs. Statements in JavaScript β Hexlet](https://www.youtube.com/watch?v=WVyCrI1cHi8)
- π₯ [JavaScript - Expression vs. Statement β WebTunings](https://www.youtube.com/watch?v=3jDpNGJkupA)
- π₯ [Function Statements and Function Expressions β Codeacademy](https://www.youtube.com/watch?v=oB5rH_9bqAI)

**[β¬ Back to Top](#table-of-contents)**

---

## 8. IIFE, Modules and Namespaces

### Articles

- π [Mastering Immediately-Invoked Function Expressions β Chandra Gundamaraju](https://medium.com/@vvkchandra/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6)
- π [Do ES6 Modules make the case of IIFEs obsolete?](https://hashnode.com/post/do-es6-modules-make-the-case-of-iifes-obsolete-civ96wet80scqgc538un20es0)
- π [A 10 minute primer to JavaScript modules, module formats, module loaders and module bundlers β Jurgen Van de Moere](https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/)
- π [Modules β Exploring JS](http://exploringjs.com/es6/ch_modules.html)
- π [ES modules: A cartoon deep-dive β Lin Clark](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
- π [Understanding ES6 Modules β Craig Buckler](https://www.sitepoint.com/understanding-es6-modules/)
- π [An overview of ES6 Modules in JavaScript β Brent Graham](https://blog.cloud66.com/an-overview-of-es6-modules-in-javascript/)
- π [ES6 Modules in Depth β NicolΓ‘s Bevacqua](https://ponyfoo.com/articles/es6-modules-in-depth)
- π [ES6 modules, Node.js and the Michael Jackson Solution β Alberto Gimeno](https://medium.com/dailyjs/es6-modules-node-js-and-the-michael-jackson-solution-828dc244b8b)
- π [JavaScript Modules: A Beginnerβs Guide β Preethi Kasireddy](https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc)

### Videos

- π₯ [Immediately Invoked Function Expression - Beau teaches JavaScript β freeCodeCamp](https://www.youtube.com/watch?v=3cbiZV4H22c)
- π₯ [Understanding JavaScript IIFE](https://www.youtube.com/watch?v=I5EntfMeIIQ)
- π₯ [JavaScript Modules: ES6 Import and Export β Kyle Robinson](https://www.youtube.com/watch?v=_3oSWwapPKQ)
- π₯ [ES6 - Modules β Ryan Christiani](https://www.youtube.com/watch?v=aQr2bV1BPyE)
- π₯ [ES6 Modules in the Real World β Sam Thorogood](https://www.youtube.com/watch?v=fIP4pjAqCtQ)
- π₯ [ES6 Modules β TempleCoding](https://www.youtube.com/watch?v=5P04OK6KlXA)

**[β¬ Back to Top](#table-of-contents)**

---

## 9. Message Queue and Event Loop

### Articles

- π [JavaScript Event Loop Explained β Anoop Raveendran](https://medium.com/front-end-hacking/javascript-event-loop-explained-4cd26af121d4)
- π [The JavaScript Event Loop: Explained β Erin Sweson-Healey](https://blog.carbonfive.com/2013/10/27/the-javascript-event-loop-explained/)
- π [What is the Event Loop in Javascript β WP Tutor.io](https://www.wptutor.io/web/js/javascript-event-loop)
- π [Understanding JS: The Event Loop β Alexander Kondov](https://hackernoon.com/understanding-js-the-event-loop-959beae3ac40)
- π [Understanding the JavaScript Event Loop β Ashish Gupta](https://www.zeolearn.com/magazine/understanding-the-javascript-event-loop)
- π [Event Loop in Javascript β Manjula Dube](https://code.likeagirl.io/what-the-heck-is-event-loop-1e414fccef49)
- π [The JavaScript Event Loop β Flavio Copes](https://flaviocopes.com/javascript-event-loop/)
- π [How JavaScript works: Event loop β Alexander Zlatkov](https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5)
- π [Tasks, microtasks, queues and schedules β Jake Archibald](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
- π [Visualising the JavaScript Event Loop with a Pizza Restaurant analogy β Priyansh Jain](https://dev.to/presto412/visualising-the-javascript-event-loop-with-a-pizza-restaurant-analogy-47a8)

### Videos

- π₯ [What the heck is the event loop anyway? | JSConf EU β Philip Roberts](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- π₯ [JavaScript Event Loop β ComScience Simplified](https://www.youtube.com/watch?v=XzXIMZMN9k4)
- π₯ [I'm stuck in an Event Loop β Philip Roberts](https://www.youtube.com/watch?v=6MXRNXXgP_0)
- π₯ [In The Loop - Jake Archibald | JSConf.Asia 2018](https://www.youtube.com/watch?v=cCOL7MC4Pl0)
- π₯ [Desmitificando el Event Loop (Spanish)](https://www.youtube.com/watch?v=Eqq2Rb7LzYE)

**[β¬ Back to Top](#table-of-contents)**

---

## 10. setTimeout, setInterval and requestAnimationFrame

### Articles

- π [setTimeout and setInterval β JavaScript.Info](https://javascript.info/settimeout-setinterval)
- π [Why not to use setInterval β Akanksha Sharma](https://dev.to/akanksha_9560/why-not-to-use-setinterval--2na9)
- π [setTimeout VS setInterval β Develoger](https://develoger.com/settimeout-vs-setinterval-cff85142555b)
- π [Using requestAnimationFrame β Chris Coyier](https://css-tricks.com/using-requestanimationframe/)
- π [Understanding JavaScript's requestAnimationFrame() β JavaScript Kit](http://www.javascriptkit.com/javatutors/requestanimationframe.shtml)
- π [Handling time intervals in JavaScript - Amit Merchant](https://www.amitmerchant.com/Handling-Time-Intervals-In-Javascript/)

### Videos

- π₯ [Javascript: How setTimeout and setInterval works β Coding Blocks India](https://www.youtube.com/watch?v=6bPKyl8WYWI)
- π₯ [setTimeout and setInterval in JavaScript β techsith](https://www.youtube.com/watch?v=TbCgGWe8LN8)
- π₯ [JavaScript Timers β Steve Griffith](https://www.youtube.com/watch?v=0VVJSvlUgtg)
- π₯ [JavaScript setTimeout, setInterval & clearInterval β DoingITeasyChannel](https://www.youtube.com/watch?v=BVALvvy5bZY)
- π₯ [JavaScript setTimeOut and setInterval Explained β Theodore Anderson](https://www.youtube.com/watch?v=mVKfrWCOB60)

**[β¬ Back to Top](#table-of-contents)**

---

## 11. JavaScript Engines

### Articles

- π [JavaScript Engines β Jen Looper](http://www.softwaremag.com/javascript-engines/)
- π [Understanding How the Chrome V8 Engine Translates JavaScript into Machine Code β DroidHead](https://medium.freecodecamp.org/understanding-the-core-of-nodejs-the-powerful-chrome-v8-engine-79e7eb8af964)
- π [Understanding V8βs Bytecode β Franziska Hinkelmann](https://medium.com/dailyjs/understanding-v8s-bytecode-317d46c94775)
- π [How the V8 engine works? β Thibault Laurens](http://thibaultlaurens.github.io/javascript/2013/04/29/how-the-v8-engine-works/)
- π [A Brief History of Googleβs V8 Javascript Engine β Clair Smith](https://www.mediacurrent.com/blog/brief-history-googles-v8-javascript-engine/)
- π [JavaScript essentials: why you should know how the engine works - Rainer Hahnekamp](https://medium.freecodecamp.org/javascript-essentials-why-you-should-know-how-the-engine-works-c2cc0d321553)

### Videos

- π₯ [JavaScript Engines: The Good Partsβ’ β Mathias Bynens & Benedikt Meurer](https://www.youtube.com/watch?v=5nmpokoRaZI)

**[β¬ Back to Top](#table-of-contents)**

---

## 12. Bitwise Operators, Type Arrays and Array Buffers

### Articles

- π [Programming with JS: Bitwise Operations β Alexander Kondov](https://hackernoon.com/programming-with-js-bitwise-operations-393eb0745dc4)
- π [Using JavaScriptβs Bitwise Operators in Real Life β ian m](https://codeburst.io/using-javascript-bitwise-operators-in-real-life-f551a731ff5)
- π [JavaScript Bitwise Operators β w3resource](https://www.w3resource.com/javascript/operators/bitwise-operator.php)
- π [Bitwise Operators in Javascript β Joe Cha](https://medium.com/bother7-blog/bitwise-operators-in-javascript-65c4c69be0d3)
- π [A Comprehensive Primer on Binary Computation and Bitwise Operators in Javascript β Paul Brown](https://medium.com/techtrument/a-comprehensive-primer-on-binary-computation-and-bitwise-operators-in-javascript-81acf8341f04)

### Videos

- π₯ [JavaScript Bitwise Operators β Programming with Mosh](https://www.youtube.com/watch?v=mesu75PTDC8)

**[β¬ Back to Top](#table-of-contents)**

---

## 13. DOM and Layout Trees

### Articles

- π [How To Understand and Modify the DOM in JavaScript β Tania Rascia](https://www.digitalocean.com/community/tutorials/introduction-to-the-dom)
- π [Whatβs the Document Object Model, and why you should know how to use it β Leonardo Maldonado](https://medium.freecodecamp.org/whats-the-document-object-model-and-why-you-should-know-how-to-use-it-1a2d0bc5429d)
- π [JavaScript DOM Tutorial with Example β Guru99](https://www.guru99.com/how-to-use-dom-and-events-in-javascript.html)
- π [What is the DOM? β Chris Coyier](https://css-tricks.com/dom/)
- π [Traversing the DOM with JavaScript β Zell Liew](https://zellwk.com/blog/dom-traversals/)
- π [Eloquent JavaScript [Book] β The Document Object Model](https://eloquentjavascript.net/14_dom.html)
- π [DOM Tree](https://javascript.info/dom-nodes)
- π [How to traverse the DOM in Javascript β Vojislav GrujiΔ](https://medium.com/javascript-in-plain-english/how-to-traverse-the-dom-in-javascript-d6555c335b4e)
- π [Render Tree Construction β Ilya Grigorik](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction)

### Videos

- π₯ [JavaScript DOM β The Net Ninja](https://www.youtube.com/watch?v=FIORjGvT0kk)
- π₯ [JavaScript DOM Crash Course β Traversy Media](https://www.youtube.com/watch?v=0ik6X4DJKCc)

**[β¬ Back to Top](#table-of-contents)**

---

## 14. Factories and Classes

### Articles

- π [How To Use Classes in JavaScript β Tania Rascia](https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript)
- π [Javascript Classes β Under The Hood β Majid](https://medium.com/tech-tajawal/javascript-classes-under-the-hood-6b26d2667677)
- π [ES6 Classes β Nathaniel Foster](https://www.javascriptjanuary.com/blog/es6-classes)
- π [Better JavaScript with ES6, Pt. II: A Deep Dive into Classes β Peleke Sengstacke](https://scotch.io/tutorials/better-javascript-with-es6-pt-ii-a-deep-dive-into-classes)
- π [Understand the Factory Design Pattern in Plain JavaScript β Aditya Agarwal](https://medium.com/front-end-hacking/understand-the-factory-design-pattern-in-plain-javascript-20b348c832bd)
- π [Factory Functions in JavaScript β Josh Miller](https://atendesigngroup.com/blog/factory-functions-javascript)
- π [The Factory Pattern in JS ES6 β SnstsDev](https://medium.com/@SntsDev/the-factory-pattern-in-js-es6-78f0afad17e9)
- π [Class vs Factory function: exploring the way forward β Cristi Salcescu](https://medium.freecodecamp.org/class-vs-factory-function-exploring-the-way-forward-73258b6a8d15)
- π [How ES6 classes really work and how to build your own β Robert Grosse](https://medium.com/@robertgrosse/how-es6-classes-really-work-and-how-to-build-your-own-fd6085eb326a)

### Videos

- π₯ [JavaScript Factory Functions β Programming with Mosh](https://www.youtube.com/watch?v=jpegXpQpb3o)
- π₯ [Factory Functions in JavaScript β Fun Fun Function](https://www.youtube.com/watch?v=ImwrezYhw4w)
- π₯ [Javascript Tutorial Function Factories β Crypto Chan](https://www.youtube.com/watch?v=R7-IwpH80UE)

**[β¬ Back to Top](#table-of-contents)**

---

## 15. this, call, apply and bind

### Articles

- π [How-to: call() , apply() and bind() in JavaScript β Niladri Sekhar Dutta](https://www.codementor.io/niladrisekhardutta/how-to-call-apply-and-bind-in-javascript-8i1jca6jp)
- π [JavaScriptβs Apply, Call, and Bind Methods are Essential for JavaScript Professionals β Richard Bovell](http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/)
- π [WTF is this - Understanding the this keyword, call, apply, and bind in JavaScript β Tyler McGinnis](https://tylermcginnis.com/this-keyword-call-apply-bind-javascript/)
- π [Javascript: call(), apply() and bind() β Omer Goldberg](https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb)
- π [The difference between call / apply / bind β Ivan Sifrim](https://medium.com/@ivansifrim/the-differences-between-call-apply-bind-276724bb825b)
- π [call(), apply() and bind() methods in JavaScript](https://tech.io/playgrounds/9799/learn-solve-call-apply-and-bind-methods-in-javascript)
- π [Mastering 'this' in JavaScript: Callbacks and bind(), apply(), call() β Michelle Gienow](https://thenewstack.io/mastering-javascript-callbacks-bind-apply-call/)
- π [JavaScriptβs apply, call, and bind explained by hosting a cookout β Kevin Kononenko](https://dev.to/kbk0125/javascripts-apply-call-and-bind-explained-by-hosting-a-cookout-32jo)
- π [How AND When to use bind, call, and apply in Javascript β Eigen X](https://www.eigenx.com/blog/https/mediumcom/eigen-x/how-and-when-to-use-bind-call-and-apply-in-javascript-77b6f42898fb)
- π [JavaScript .bind() vs .apply() and .call() β Hack Sparrow](https://www.hacksparrow.com/javascript-bind-vs-apply-and-call.html)
- π [call() β MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- π [bind() β MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)
- π [apply() β MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
- π [What is 'this' in JavaScript? β Daniel Li](http://blog.brew.com.hk/what-is-this-in-javascript/)
- π [Let me explain to you what is `this`. (Javascript) β Jason Yu](https://dev.to/ycmjason/let-me-explain-to-you-what-is-this-javascript-44ja)
- π [Understanding the βthis " Keyword in JavaScript β Pavan](https://medium.com/quick-code/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8)
- π [How to understand the keyword this and context in JavaScript β Lukas Gisder-DubΓ©](https://medium.freecodecamp.org/how-to-understand-the-keyword-this-and-context-in-javascript-cd624c6b74b8)

### Videos

- π₯ [JavaScript call, apply and bind β techsith](https://www.youtube.com/watch?v=c0mLRpw-9rI)
- π₯ [JavaScript Practical Applications of Call, Apply and Bind functionsβ techsith](https://www.youtube.com/watch?v=AYVYxezrMWA)
- π₯ [JavaScript (call, bind, apply) β curious aatma](https://www.youtube.com/watch?v=Uy0NOXLBraE)
- π₯ [Understanding Functions and 'this' In The World of ES2017 β Bryan Hughes](https://www.youtube.com/watch?v=AOSYY1_np_4)
- π₯ [bind and this - Object Creation in JavaScript - FunFunFunction](https://www.youtube.com/watch?v=GhbhD1HR5vk)
- π₯ [JavaScript Practical Applications of Call, Apply and Bind functions β techsith](https://www.youtube.com/watch?v=AYVYxezrMWA)
- π₯ [JS Function Methods call(), apply(), and bind() β Steve Griffith](https://www.youtube.com/watch?v=uBdH0iB1VDM)

**[β¬ Back to Top](#table-of-contents)**

---

## 16. new, Constructor, instanceof and Instances

### Articles

- π [JavaScript For Beginners: the βnewβ operator β Brandon Morelli](https://codeburst.io/javascript-for-beginners-the-new-operator-cee35beb669e)
- π [Letβs demystify JavaScriptβs βnewβ keyword β Cynthia Lee](https://medium.freecodecamp.org/demystifying-javascripts-new-keyword-874df126184c)
- π [Constructor, operator "new" β JavaScript.Info](https://javascript.info/constructor-new)
- π [Understanding JavaScript Constructors β Faraz Kelhini](https://css-tricks.com/understanding-javascript-constructors/)
- π [Use Constructor Functions β Openclassrooms](https://openclassrooms.com/en/courses/3523231-learn-to-code-with-javascript/4379006-use-constructor-functions)
- π [Beyond `typeof` and `instanceof`: simplifying dynamic type checks β Dr. Axel Rauschmayer](http://2ality.com/2017/08/type-right.html)
- π [What Is the Instanceof Operator in JavaScript β appendTo](https://appendto.com/2016/10/what-is-the-instanceof-operator-in-javascript/)
- π [JavaScript instanceof vs typeof β Gary Rafferty](http://garyrafferty.com/2012/12/07/JavaScript-instanceof-vs-typeof.html)
- π [Function and Object, instances of each other β Kiro Risk](https://javascriptrefined.io/function-and-object-instances-of-each-other-1e1095d5faac)

**[β¬ Back to Top](#table-of-contents)**

---

## 17. Prototype Inheritance and Prototype Chain

### Articles

- π [Javascript : Prototype vs Class β Valentin PARSY](https://medium.com/@parsyval/javascript-prototype-vs-class-a7015d5473b)
- π [JavaScript engine fundamentals: optimizing prototypes β Mathias Bynens](https://mathiasbynens.be/notes/prototypes)
- π [JavaScript Prototype β NC Patro](https://codeburst.io/javascript-prototype-cb29d82b8809)
- π [Prototype in Javascript β Sandeep Ranjan](https://www.codementor.io/sandeepranjan2007/prototype-in-javascipt-knbve0lqo)
- π [Prototypes in JavaScript β Rupesh Mishra](https://hackernoon.com/prototypes-in-javascript-5bba2990e04b)
- π [Prototype in JavaScript: itβs quirky, but hereβs how it works β Pranav Jindal](https://medium.freecodecamp.org/prototype-in-js-busted-5547ec68872)
- π [Inheritance and the prototype chain β MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- π [Understanding JavaScript: Prototype and Inheritance β Alexander Kondov](https://hackernoon.com/understanding-javascript-prototype-and-inheritance-d55a9a23bde2)
- π [Prototypal Inheritance β JavaScript.Info](https://javascript.info/prototype-inheritance)
- π [How To Work with Prototypes and Inheritance in JavaScript β Tania Rascia](https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript)
- π [Master JavaScript Prototypes & Inheritance β Arnav Aggarwal](https://codeburst.io/master-javascript-prototypes-inheritance-d0a9a5a75c4e)
- π [You Don't Know JS [Book] Chapter 5: Prototypes β Kyle Simpson](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch5.md)
- π [JavaScriptβs Prototypal Inheritance Explained Using CSS β Nash Vail](https://medium.freecodecamp.org/understanding-prototypal-inheritance-in-javascript-with-css-93b2fcda75e4)
- π [Prototypal Inheritance in JavaScript β Jannis Redmann](https://gist.github.com/derhuerst/a585c4916b1c361cc6f0)
- π [Classical and Prototypical Inheritance in JavaScript β Danny Cornelisse](http://www.competa.com/blog/classical-prototypical-inheritance-javascript/)
- π [Demystifying ES6 Classes And Prototypal Inheritance β Neo Ighodaro](https://scotch.io/tutorials/demystifying-es6-classes-and-prototypal-inheritance)
- π [Intro To Prototypal Inheritance β Dharani Jayakanthan](https://dev.to/danny/intro-to-prototypal-inheritance---js-9di)
- π [Classes in JavaScript - Explained β Daniel Li](http://blog.brew.com.hk/classes-in-javascript-explained/)
- π [You Don't Know JS: this & Object Prototypes β Kyle Simpson](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch4.md)

### Videos

- π₯ [Javascript Prototype Inheritance β Avelx](https://www.youtube.com/watch?v=sOrtAjyk4lQ)
- π₯ [JavaScript Prototype Inheritance Explained pt. I β techsith](https://www.youtube.com/watch?v=7oNWNlMrkpc)
- π₯ [JavaScript Prototype Inheritance Explained pt. II β techsith](https://www.youtube.com/watch?v=uIlj6_z_wL8)
- π₯ [JavaScript Prototype Inheritance Explained β Kyle Robinson](https://www.youtube.com/watch?v=qMO-LTOrJaE)
- π₯ [Advanced Javascript - Prototypal Inheritance In 1 Minute](https://www.youtube.com/watch?v=G6l5CHl67HQ)
- π₯ [An Overview Of Classical Javascript Classes and Prototypal Inheritance β Pentacode](https://www.youtube.com/watch?v=phwzuiJJPpQ)
- π₯ [Object Oriented JavaScript - Prototype β The Net Ninja](https://www.youtube.com/watch?v=4jb4AYEyhRc)
- π₯ [Prototype in JavaScript β kudvenkat](https://www.youtube.com/watch?v=2rkEbcptR64)
- π₯ [JavaScript Using Prototypes β O'Reilly](https://www.youtube.com/watch?v=oCwCcNvaXAQ)
- π₯ [A Beginner's Guide to Javascript's Prototype β Tyler Mcginnis](https://www.youtube.com/watch?v=XskMWBXNbp0)
- π₯ [Prototypes in Javascript - p5.js Tutorial β The Coding Train](https://www.youtube.com/watch?v=hS_WqkyUah8)

**[β¬ Back to Top](#table-of-contents)**

---

## 18. Object.create and Object.assign

### Articles

- π [Object.create() β MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
- π [Object.create in JavaScript β Rupesh Mishra](https://hackernoon.com/object-create-in-javascript-fa8674df6ed2)
- π [Object.create(): the New Way to Create Objects in JavaScript β Rob Gravelle](https://www.htmlgoodies.com/beyond/javascript/object.create-the-new-way-to-create-objects-in-javascript.html)
- π [Basic Inheritance with Object.create β Joshua Clanton](http://adripofjavascript.com/blog/drips/basic-inheritance-with-object-create.html)
- π [Object.create() In JavaScript β GeeksforGeeks](https://www.geeksforgeeks.org/object-create-javascript/)
- π [Understanding the difference between Object.create() and the new operator β Jonathan Voxland](https://medium.com/@jonathanvox01/understanding-the-difference-between-object-create-and-the-new-operator-b2a2f4749358)
- π [JavaScript Object Creation: Patterns and Best Practices β Jeff Mott](https://www.sitepoint.com/javascript-object-creation-patterns-best-practises/)
- π [Dealing With Objects in JavaScript With Object.assign, Object.keys and hasOwnProperty](https://alligator.io/js/dealing-with-objects/)
- π [Copying Objects in JavaScript β Orinami Olatunji](https://scotch.io/bar-talk/copying-objects-in-javascript)
- π [Object.assign() β MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- π [JavaScript: Object.assign() β Thiago S. Adriano](https://codeburst.io/javascript-object-assign-bc9696dcbb6e)
- π [How to deep clone a JavaScript Object β Flavio Copes](https://flaviocopes.com/how-to-clone-javascript-object/)

### Videos

- π₯ [Object.assign() explained β Aaron Writes Code](https://www.youtube.com/watch?v=aw7NfYhR5rc)
- π₯ [Object.assign() Method β techsith](https://www.youtube.com/watch?v=9Ky4X6inpi4)

**[β¬ Back to Top](#table-of-contents)**

---

## 19. map, reduce, filter

### Articles

- π [JavaScript Functional Programming β map, filter and reduce β Bojan Gvozderac](https://medium.com/jsguru/javascript-functional-programming-map-filter-and-reduce-846ff9ba492d)
- π [Learn map, filter and reduce in Javascript β JoΓ£o Miguel Cunha](https://medium.com/@joomiguelcunha/learn-map-filter-and-reduce-in-javascript-ea59009593c4)
- π [JavaScriptβs Map, Reduce, and Filter β Dan Martensen](https://danmartensen.svbtle.com/javascripts-map-reduce-and-filter)
- π [How to Use Map, Filter, & Reduce in JavaScript β Peleke Sengstacke](https://code.tutsplus.com/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209)
- π [JavaScript β Learn to Chain Map, Filter, and Reduce β Brandon Morelli](https://codeburst.io/javascript-learn-to-chain-map-filter-and-reduce-acd2d0562cd4)
- π [Javascript data structure with map, reduce, filter and ES6 β Deepak Gupta](https://codeburst.io/write-beautiful-javascript-with-%CE%BB-fp-es6-350cd64ab5bf)
- π [Understanding map, filter and reduce in Javascript β Luuk Gruijs](https://hackernoon.com/understanding-map-filter-and-reduce-in-javascript-5df1c7eee464)
- π [Functional Programming in JS: map, filter, reduce (Pt. 5) β Omer Goldberg](https://hackernoon.com/functional-programming-in-js-map-filter-reduce-pt-5-308a205fdd5f)
- π [JavaScript: Map, Filter, Reduce β William S. Vincent](https://wsvincent.com/functional-javascript-map-filter-reduce/)
- π [Arrow Functions: Fat and Concise Syntax in JavaScript β Kyle Pennell](https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/)
- π [JavaScript: Arrow Functions for Beginners β Brandon Morelli](https://codeburst.io/javascript-arrow-functions-for-beginners-926947fc0cdc)
- π [When (and why) you should use ES6 arrow functions β and when you shouldnβt β Cynthia Lee](https://medium.freecodecamp.org/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26)
- π [JavaScript β Learn & Understand Arrow Functions β Brandon Morelli](https://codeburst.io/javascript-learn-understand-arrow-functions-fe2083533946)
- π [(JavaScript )=> Arrow functions β sigu](https://medium.com/podiihq/javascript-arrow-functions-27d4c3334b83)
- π [A possibility to use Async/Await for filter(), find(), forEach(), map() and reduce() methods in Array β Ruwan Geeganage](https://www.linkedin.com/pulse/possibility-use-asyncawait-filter-find-foreach-map-reduce-geeganage/)
- π [Javascript.reduce() β Paul Anderson](https://medium.com/@panderson.dev/javascript-reduce-79aab078da23)
- π [Why you should replace forEach with map and filter in JavaScript β Roope Hakulinen](https://gofore.com/en/why-you-should-replace-foreach/)
- π [Simplify your JavaScript β Use .map(), .reduce(), and .filter() β Etienne Talbot](https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d)
- π [JavaScriptβs Reduce Method Explained By Going On a Diet β Kevin Kononenko](https://blog.codeanalogies.com/2018/07/24/javascripts-reduce-method-explained-by-going-on-a-diet/)

### Videos

- π₯ [Map, Filter and Reduce β Lydia Hallie](https://www.youtube.com/watch?v=UXiYii0Y7Nw)
- π₯ [Functional JavaScript: Map, forEach, Reduce, Filter β Theodore Anderson](https://www.youtube.com/watch?v=vytzLlY_wmU)
- π₯ [JavaScript Array superpowers: Map, Filter, Reduce (part I) β Michael Rosata](https://www.youtube.com/watch?v=qTeeVd8hOFY)
- π₯ [JavaScript Array superpowers: Map, Filter, Reduce (part 2) β Michael Rosata](https://www.youtube.com/watch?v=gIm9xLYudL0)
- π₯ [JavaScript Higher Order Functions - Filter, Map, Sort & Reduce β Epicop](https://www.youtube.com/watch?v=zYBeEPxNSbw)
- π₯ [[Array Methods 2/3] .filter + .map + .reduce β CodeWithNick](https://www.youtube.com/watch?v=4qWlqD0yYTU)
- π₯ [Arrow functions in JavaScript - What, Why and How β Fun Fun Function](https://www.youtube.com/watch?v=6sQDTgOqh-I)
- π₯ [Learning Functional Programming with JavaScript β Anjana Vakil - JSUnconf](https://www.youtube.com/watch?v=e-5obm1G_FY&t=1521s)
- π₯ [Map - Parte 2 JavaScript - Fun Fun Function](https://www.youtube.com/watch?v=bCqtb-Z5YGQ&t=17s)
- π₯ [Reduce basics - Part 3 of FP in JavaScript - Fun Fun Function](https://www.youtube.com/watch?v=Wl98eZpkp-c)
- π₯ [Reduce Advanced - Part 4 of FP in JavaScript - Fun Fun Function](https://www.youtube.com/watch?v=1DMolJ2FrNY&t=621s)

**[β¬ Back to Top](#table-of-contents)**

---

## 20. Pure Functions, Side Effects and State Mutation

### Articles

- π [Javascript and Functional Programming β Pure Functions β Omer Goldberg](https://hackernoon.com/javascript-and-functional-programming-pt-3-pure-functions-d572bb52e21c)
- π [Master the JavaScript Interview: What is a Pure Function? β Eric Elliott](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)
- π [JavaScript: What Are Pure Functions And Why Use Them? β James Jeffery](https://medium.com/@jamesjefferyuk/javascript-what-are-pure-functions-4d4d5392d49c)
- π [Pure functions in JavaScript β @nicoespeon](http://www.nicoespeon.com/en/2015/01/pure-functions-javascript/)
- π [Functional Programming: Pure Functions β Arne Brasseur](https://www.sitepoint.com/functional-programming-pure-functions/)
- π [Pure Functions In Javascript β Krunal](https://appdividend.com/2017/04/10/pure-functions-in-javascript/)
- π [Making your JavaScript Pure β Jack Franklin](https://alistapart.com/article/making-your-javascript-pure)
- π [To mutate, or not to mutate, in JavaScript](https://slemgrim.com/mutate-or-not-to-mutate/)
- π [Arrays, Objects and Mutations β Federico KnΓΌssel](https://medium.com/@fknussel/arrays-objects-and-mutations-6b23348b54aa)
- π [The State of Immutability β Maciej Sikora](https://medium.com/dailyjs/the-state-of-immutability-169d2cd11310)
- π [How to deal with dirty side effects in your pure functional JavaScript β James Sinclair](https://jrsinclair.com/articles/2018/how-to-deal-with-dirty-side-effects-in-your-pure-functional-javascript/)
- π [Preventing Side Effects in JavaScript β David Walsh](https://davidwalsh.name/preventing-sideeffects-javascript)
- π [Wielding Pure Functions in JavaScript and Function Composition β Peleke Sengstacke
  ](https://scotch.io/tutorials/wielding-pure-functions-in-javascript-and-function-composition)
- π [JavaScript: Pure Functions β William S. Vincent](https://wsvincent.com/javascript-pure-functions/)
- π [Functional programming paradigms in modern JavaScript: Pure functions β Alexander Kondov](https://hackernoon.com/functional-programming-paradigms-in-modern-javascript-pure-functions-797d9abbee1)

### Videos

- π₯ [Pure Functions β Hexlet](https://www.youtube.com/watch?v=dZ41D6LDSBg)
- π₯ [Pure Functions - Functional Programming in JavaScript β Paul McBride](https://www.youtube.com/watch?v=Jh_Uzqzz_wM)
- π₯ [JavaScript Pure Functions β Seth Alexander](https://www.youtube.com/watch?v=frT3H-eBmPc)
- π₯ [JavaScript Pure vs Impure Functions Explained β Theodore Anderson](https://www.youtube.com/watch?v=AHbRVJzpB54)
- π₯ [Pure Functions - ProgramaΓ§Γ£o Funcional: Parte 1 - Fun Fun Function](https://www.youtube.com/watch?v=BMUiFMZr7vk)

**[β¬ Back to Top](#table-of-contents)**

---

## 21. Closures

### Articles

- π [Closures β MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- π [I never understood JavaScript closures β Olivier De Meulder](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)
- π [Closure β JavaScript.Info](https://javascript.info/closure)
- π [Understand JavaScript Closures With Ease β Richard Bovell](http://javascriptissexy.com/understand-javascript-closures-with-ease/)
- π [Understanding JavaScript Closures β Codesmith](https://codeburst.io/understanding-javascript-closures-da6aab330302)
- π [Understand Closures in JavaScript β Brandon Morelli](https://codeburst.io/understand-closures-in-javascript-d07852fa51e7)
- π [A simple guide to help you understand closures in JavaScript β Prashant Ram](https://medium.freecodecamp.org/javascript-closures-simplified-d0d23fa06ba4)
- π [Understanding JavaScript Closures: A Practical Approach β Paul Upendo](https://scotch.io/tutorials/understanding-javascript-closures-a-practical-approach)
- π [Understanding JavaScript: Closures β Alexander Kondov](https://hackernoon.com/understanding-javascript-closures-4188edf5ea1b)
- π [How to use JavaScript closures with confidence β LΓ©na Faure](https://hackernoon.com/how-to-use-javascript-closures-with-confidence-85cd1f841a6b)
- π [JavaScript closures by example β tyler](https://howchoo.com/g/mge2mji2mtq/javascript-closures-by-example)
- π [JavaScriptβββClosures and Scope β Alex Aitken](https://codeburst.io/javascript-closures-and-scope-3784c75b9290)
- π [Discover the power of closures in JavaScriptβββCristi Salcescu](https://medium.freecodecamp.org/discover-the-power-of-closures-in-javascript-5c472a7765d7)
- π [Simplified JavaScript: Getting Started with ClosuresβββCode Like A Girl](https://code.likeagirl.io/simplified-javascript-getting-started-with-closures-f40f65317d00)
- π [The Ultimate Guide to Hoisting, Scopes, and Closures in JavaScriptβββTyler McGinnis](https://tylermcginnis.com/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/)
- π [Getting ClosureβββRealLifeJS](http://reallifejs.com/the-meat/getting-closure/)
- π [Understanding Closures in JavaScriptβββSukhjinder Arora](https://blog.bitsrc.io/a-beginners-guide-to-closures-in-javascript-97d372284dda)

### Videos

- π₯ [Javascript Closure β techsith](https://www.youtube.com/watch?v=71AtaJpJHw0)
- π₯ [Closures β Fun Fun Function](https://www.youtube.com/watch?v=CQqwU2Ixu-U)
- π₯ [Closures in JavaScript β techsith](https://www.youtube.com/watch?v=-xqJo5VRP4A)
- π₯ [JavaScript Closures 101: What is a closure? β JavaScript Tutorials](https://www.youtube.com/watch?v=yiEeiMN2Khs)
- π₯ [Closures β freeCodeCamp](https://www.youtube.com/watch?v=1JsJx1x35c0)
- π₯ [JavaScript Closures β CodeWorkr](https://www.youtube.com/watch?v=-rLrGAXK8WE)

**[β¬ Back to Top](#table-of-contents)**

---

## 22. High Order Functions

### Articles

- π [Higher-Order Functions β Eloquent JavaScript [Book]](https://eloquentjavascript.net/05_higher_order.html)
- π [Higher-Order Functions in JavaScript β M. David Green](https://www.sitepoint.com/higher-order-functions-javascript/)
- π [Higher Order Functions: Using Filter, Map and Reduce for More Maintainable Code β Guido Schmitz](https://medium.freecodecamp.org/higher-order-functions-in-javascript-d9101f9cf528)
- π [First-class and Higher Order Functions: Effective Functional JavaScript β Hugo Di Francesco](https://hackernoon.com/effective-functional-javascript-first-class-and-higher-order-functions-713fde8df50a)
- π [Higher Order Functions in JavaScript β John Hannah](https://www.lullabot.com/articles/higher-order-functions-in-javascript)
- π [Higher-order Functions β Richard Bovell](http://javascriptissexy.com/tag/higher-order-functions/)
- π [Higher Order Functions in JavaScript β Zsolt Nagy](http://www.zsoltnagy.eu/higher-order-functions-in-javascript/)
- π [Fun With Higher Order Functions In JavaScript β Derick](https://derickbailey.com/2015/10/21/fun-with-higher-order-functions-in-javascript/)
- π [Just a reminder on how to use high order functions β Pedro Filho](https://github.com/pedroapfilho/high-order-functions)
- π [Understanding Higher-Order Functions in JavaScript β Sukhjinder Arora](https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad)

### Videos

- π₯ [JavaScript Higher Order Functions & Arrays β Traversy Media](https://www.youtube.com/watch?v=rRgD1yVwIvE)
- π₯ [Higher Order Functions β Fun Fun Function](https://www.youtube.com/watch?v=BMUiFMZr7vk)
- π₯ [Higher Order Functions in Javascript β Raja Yogan](https://www.youtube.com/watch?v=dTlpYnmBW9I)
- π₯ [Higher Order Iterators in JavaScript β Fun Fun Function](https://www.youtube.com/watch?v=GYRMNp1SKXA)
- π₯ [Higher Order Functions in JavaScript β The Coding Train](https://www.youtube.com/watch?v=H4awPsyugS0)

**[β¬ Back to Top](#table-of-contents)**

---

## 23. Recursion

### Articles

- π [Recursion in JavaScript β Kevin Ennis](https://medium.freecodecamp.org/recursion-in-javascript-1608032c7a1f)
- π [Understanding Recursion in JavaScript β Zak Frisch](https://medium.com/@zfrisch/understanding-recursion-in-javascript-992e96449e03)
- π [Learn and Understand Recursion in JavaScript β Brandon Morelli](https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea)
- π [Recursion in Functional JavaScript β M. David Green](https://www.sitepoint.com/recursion-functional-javascript/)
- π [Programming with JS: Recursion β Alexander Kondov](https://hackernoon.com/programming-with-js-recursion-31371e2bf808)
- π [Anonymous Recursion in JavaScript β simo](https://dev.to/simov/anonymous-recursion-in-javascript)
- π [Recursion, iteration and tail calls in JS β loverajoel](http://www.jstips.co/en/javascript/recursion-iteration-and-tail-calls-in-js/)
- π [Understanding Recursion in JavaScript with Confidence β Jay](https://www.thecodingdelight.com/understanding-recursion-javascript/)

### Videos

- π₯ [Recursion In JavaScript β techsith](https://www.youtube.com/watch?v=VtG0WAUvq2w)
- π₯ [Recursion β Fun Fun Function](https://www.youtube.com/watch?v=k7-N8R0-KY4)
- π₯ [Recursion and Recursive Functions β Hexlet](https://www.youtube.com/watch?v=vLhHyGTkjCs)
- π₯ [Recursion: Recursion() β JS Monthly β Lucas da Costa](https://www.youtube.com/watch?v=kGXVsd8pBLw)
- π₯ [Recursive Function in JavaScript β kudvenkat](https://www.youtube.com/watch?v=uyjsR9eNTIw)
- π₯ [What on Earth is Recursion? β Computerphile](https://www.youtube.com/watch?v=Mv9NEXX1VHc)
- π₯ [Javascript Tutorial 34: Introduction To Recursion β codedamn](https://www.youtube.com/watch?v=9NO5dXSlbv8)
- π₯ [Recursion, Iteration, and JavaScript: A Love Story | JSHeroes 2018 β Anjana Vakil](https://www.youtube.com/watch?v=FmiQr4nfoPQ)

**[β¬ Back to Top](#table-of-contents)**

---

## 24. Collections and Generators

### Articles

- π [ES6 In Depth: Collections β Jason Orendorff](https://hacks.mozilla.org/2015/06/es6-in-depth-collections/)
- π [ES6 Collections: Using Map, Set, WeakMap, WeakSet β Kyle Pennell](https://www.sitepoint.com/es6-collections-map-set-weakmap-weakset/)
- π [ES6 WeakMaps, Sets, and WeakSets in Depth β NicolΓ‘s Bevacqua](https://ponyfoo.com/articles/es6-weakmaps-sets-and-weaksets-in-depth)
- π [Introduction to Sets in JavaScript β Alligator.io](https://alligator.io/js/sets-introduction/)
- π [Introduction to Maps in JavaScript β Alligator.io](https://alligator.io/js/maps-introduction/)
- π [Map, Set, WeakMap and WeakSet β JavaScript.Info](https://javascript.info/map-set-weakmap-weakset)
- π [Maps in ES6 - A Quick Guide β Ben Mildren](https://dev.to/mildrenben/maps-in-es6---a-quick-guide-35pk)
- π [ES6 β Set vs Array β What and when? β Maya Shavin](https://medium.com/front-end-hacking/es6-set-vs-array-what-and-when-efc055655e1a)
- π [ES6 β Map vs Object β What and when? β Maya Shavin](https://medium.com/front-end-hacking/es6-map-vs-object-what-and-when-b80621932373)
- π [ES6: Working with Sets in JavaScript β Dead Code Rising](http://www.deadcoderising.com/es6-working-with-sets-in-javascript/)
- π [Array vs Set vs Map vs Object β Real-time use cases in Javascript (ES6/ES7) β Rajesh Babu](https://codeburst.io/array-vs-set-vs-map-vs-object-real-time-use-cases-in-javascript-es6-47ee3295329b)
- π [How to create an array of unique values in JavaScript using Sets β Claire Parker-Jones](https://dev.to/claireparker/how-to-create-an-array-of-unique-values-in-javascript-using-sets-5dg6)
- π [What You Should Know About ES6 Maps β Just Chris](https://hackernoon.com/what-you-should-know-about-es6-maps-dc66af6b9a1e)
- π [ES6 Maps in Depth β NicolΓ‘s Bevacqua](https://ponyfoo.com/articles/es6-maps-in-depth)
- π [Generator β MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)
- π [What are JavaScript Generators and how to use them β Vladislav Stepanov](https://codeburst.io/what-are-javascript-generators-and-how-to-use-them-c6f2713fd12e)
- π [Understanding JavaScript Generators With Examples β Arfat Salman](https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5)
- π [The Basics of ES6 Generators β Kyle Simpson](https://davidwalsh.name/es6-generators)

### Videos

- π₯ [JavaScript ES6 / ES2015 Set, Map, WeakSet and WeakMap β Traversy Media](https://www.youtube.com/watch?v=ycohYSx5h9w)
- π₯ [The Differences between ES6 Maps and Sets β Steve Griffith](https://www.youtube.com/watch?v=m4abICrldQI)
- π₯ [Javascript Generators - THEY CHANGE EVERYTHING - ES6 Generators Harmony Generators β LearnCode.academy](https://www.youtube.com/watch?v=QO07THdLWQo)

**[β¬ Back to Top](#table-of-contents)**

---

## 25. Promises

### Articles

- π [Promise β MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- π [JavaScript Promises for Dummies β Jecelyn Yeen](https://scotch.io/tutorials/javascript-promises-for-dummies)
- π [Understanding promises in JavaScript β Gokul N K](https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1)
- π [Master the JavaScript Interview: What is a Promise? β Eric Elliott](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261)
- π [An Overview of JavaScript Promises β Sandeep Panda](https://www.sitepoint.com/overview-javascript-promises/)
- π [How to use Promises in JavaScript β Prashant Ram](https://medium.freecodecamp.org/promises-in-javascript-explained-277b98850de)
- π [Implementing Promises In JavaScript β Maciej Cieslar](https://medium.freecodecamp.org/how-to-implement-promises-in-javascript-1ce2680a7f51)
- π [JavaScript: Promises explained with simple real life analogies β Shruti Kapoor](https://codeburst.io/javascript-promises-explained-with-simple-real-life-analogies-dd6908092138)
- π [Promises for Asynchronous Programming β Exploring JS](http://exploringjs.com/es6/ch_promises.html)
- π [JavaScript Promises Explained By Gambling At A Casino β Kevin Kononenko](https://blog.codeanalogies.com/2018/08/26/javascript-promises-explained-by-gambling-at-a-casino/)
- π [ES6 Promises: Patterns and Anti-Patterns β Bobby Brennan](https://medium.com/datafire-io/es6-promises-patterns-and-anti-patterns-bbb21a5d0918)
- π [A Simple Guide to ES6 Promises β Brandon Morelli](https://codeburst.io/a-simple-guide-to-es6-promises-d71bacd2e13a)
- π [The ES6 Promises β Manoj Singh Negi](https://codeburst.io/the-es6-promises-87a979ab27e4)
- π [ES6 Promises in Depth β NicolΓ‘s Bevacqua](https://ponyfoo.com/articles/es6-promises-in-depth)
- π [Playing with Javascript Promises: A Comprehensive Approach β Rajesh Babu](https://codeburst.io/playing-with-javascript-promises-a-comprehensive-approach-25ab752c78c3)

### Videos

- π₯ [Let's Learn ES6 - Promises β Ryan Christiani](https://www.youtube.com/watch?v=vQ3MoXnKfuQ)
- π₯ [JavaScript ES6 / ES2015 Promises β Traversy Media](https://www.youtube.com/watch?v=XJEHuBZQ5dU)
- π₯ [Promises β Fun Fun Function](https://www.youtube.com/watch?v=2d7s3spWAzo)
- π₯ [Error Handling Promises in JavaScript β Fun Fun Function](https://www.youtube.com/watch?v=f8IgdnYIwOU)
- π₯ [Promises Part 1 - Topics of JavaScript/ES6 β The Coding Train](https://www.youtube.com/watch?v=QO4NXhWo_NM)

**[β¬ Back to Top](#table-of-contents)**

---

## 26. async/await

### Articles

- π [async/await β JavaScript.Info](https://javascript.info/async-await)
- π [Understanding async/await in Javascript β Gokul N K](https://hackernoon.com/understanding-async-await-in-javascript-1d81bb079b2c)
- π [Asynchronous Programming β Eloquent JavaScript](https://eloquentjavascript.net/11_async.html)
- π [Exploring Async/Await Functions in JavaScript β Alligator.io](https://alligator.io/js/async-functions/)
- π [Asynchronous Javascript using async/await β Joy Warugu](https://scotch.io/tutorials/asynchronous-javascript-using-async-await)
- π [Modern Asynchronous JavaScript with async/await β Flavio Copes](https://flaviocopes.com/javascript-async-await/)
- π [Asynchronous JavaScript: From Callback Hell to Async and Await β Demir Selmanovic](https://www.toptal.com/javascript/asynchronous-javascript-async-await-tutorial)
- π [Javascript β ES8 Introducing async/await Functions β Ben Garrison](https://medium.com/@_bengarrison/javascript-es8-introducing-async-await-functions-7a471ec7de8a)
- π [How to escape async/await hell β Aditya Agarwal](https://medium.freecodecamp.org/avoiding-the-async-await-hell-c77a0fb71c4c)
- π [Understanding JavaScriptβs async await β NicolΓ‘s Bevacqua](https://ponyfoo.com/articles/understanding-javascript-async-await)
- π [JavaScript Async/Await: Serial, Parallel and Complex Flow β TechBrij](https://techbrij.com/javascript-async-await-parallel-sequence)
- π [Asynchronous Programming β Exploring JS](http://exploringjs.com/es6/ch_async.html)
- π [From JavaScript Promises to Async/Await: why bother? β Chris Nwamba](https://blog.pusher.com/promises-async-await/)
- π [Flow Control in Modern JS: Callbacks to Promises to Async/Await β Craig Buckler](https://www.sitepoint.com/flow-control-callbacks-promises-async-await/)
- π [JavaScript: Promises and Why Async/Await Wins the Battle β Nick Parsons](https://dzone.com/articles/javascript-promises-and-why-asyncawait-wins-the-ba)
- π [How To Master Async/Await With This Real World Example β Adrian Hajdin](https://medium.freecodecamp.org/how-to-master-async-await-with-this-real-world-example-19107e7558ad)

### Videos

- π₯ [Async + Await β Wes Bos](https://www.youtube.com/watch?v=9YkUCxvaLEk)
- π₯ [Asynchrony: Under the Hood β Shelley Vohr](https://www.youtube.com/watch?v=SrNQS8J67zc)
- π₯ [async/await in JavaScript - What, Why and How β Fun Fun Function](https://www.youtube.com/watch?v=568g8hxJJp4&index=3&list=PL0zVEGEvSaeHJppaRLrqjeTPnCH6)
- π₯ [async/await Part 1 - Topics of JavaScript/ES8 β The Coding Train](https://www.youtube.com/watch?v=XO77Fib9tSI&index=3&list=PLRqwX-V7Uu6bKLPQvPRNNE65kBL62mVfx)
- π₯ [async/await Part 2 - Topics of JavaScript/ES8 β The Coding Train](https://www.youtube.com/watch?v=chavThlNz3s&index=4&list=PLRqwX-V7Uu6bKLPQvPRNNE65kBL62mVfx)

**[β¬ Back to Top](#table-of-contents)**

---

## 27. Data Structures

### Articles

- π [Data Structures in JavaScript β Thon Ly](https://medium.com/siliconwat/data-structures-in-javascript-1b9aed0ea17c)
- π [Algorithms and Data Structures in JavaScript β Oleksii Trekhleb](https://itnext.io/algorithms-and-data-structures-in-javascript-a71548f902cb)
- π [Data Structures: Objects and Arrays β Chris Nwamba](https://scotch.io/courses/10-need-to-know-javascript-concepts/data-structures-objects-and-arrays)
- π [Data structures in JavaScript β Benoit Vallon](http://blog.benoitvallon.com/data-structures-in-javascript/data-structures-in-javascript/)
- π [Playing with Data Structures in Javascript β Anish K.](https://blog.cloudboost.io/playing-with-data-structures-in-javascript-stack-a55ebe50f29d)
- π [The Little Guide of Queue in JavaScript β GermΓ‘n Cutraro](https://hackernoon.com/the-little-guide-of-queue-in-javascript-4f67e79260d9)
- π [All algorithms writing with JavaScript in the book 'Algorithms Fourth Edition'](https://github.com/barretlee/algorithms)
- π [Collection of classic computer science paradigms in JavaScript](https://github.com/nzakas/computer-science-in-javascript)
- π [All the things you didn't know you wanted to know about data structures](https://github.com/jamiebuilds/itsy-bitsy-data-structures)

### Videos

- π₯ [Algorithms in JavaScript β Seth Koch](https://www.youtube.com/watch?v=PylQlISSH8U&list=PLujX4CIdBGCa-65N3uN8CDbUMrYsHBrz-)
- π₯ [Algorithms In Javascript | Ace Your Interview β Eduonix Learning Solutions](https://www.youtube.com/watch?v=H_EBPZgiAas&list=PLDmvslp_VR0zYUSth_8O69p4_cmvZEgLa)
- π₯ [Data Structures and Algorithms in JavaScript β freeCodeCamp](https://www.youtube.com/watch?v=Gj5qBheGOEo&list=PLWKjhJtqVAbkso-IbgiiP48n-O-JQA9PJ)
- π₯ [Learning JavaScript Data Structures and Algorithms: Sorting β Packt Video](https://www.youtube.com/watch?v=Ymh_AurrMbA)

**[β¬ Back to Top](#table-of-contents)**

---

## 28. Expensive Operation and Big O Notation

### Articles

- π [Big O Notation in Javascript β CΓ©sar AntΓ³n Dorantes](https://medium.com/cesars-tech-insights/big-o-notation-javascript-25c79f50b19b)
- π [Time Complexity/Big O Notation β Tim Roberts](https://medium.com/javascript-scene/time-complexity-big-o-notation-1a4310c3ee4b)
- π [Big O in JavaScript β Gabriela Medina](https://medium.com/@gmedina229/big-o-in-javascript-36ff67766051)
- π [Big O Search Algorithms in JavaScript β Bradley Braithwaite](http://www.bradoncode.com/blog/2012/04/big-o-algorithm-examples-in-javascript.html)
- π [Time Complexity Analysis in JavaScript β Jennifer Bland](https://www.jenniferbland.com/time-complexity-analysis-in-javascript/)
- π [Algorithms in plain English: time complexity and Big-O Notation β Michael Olorunnisola](https://medium.freecodecamp.org/time-is-complex-but-priceless-f0abd015063c)

### Videos

- π₯ [JavaScript: Intro to Big O Notation and Function Runtime β Eric Traub](https://www.youtube.com/watch?v=HgA5VOFan5E)
- π₯ [Essential Big O for JavaScript Developers β Dave Smith](https://www.youtube.com/watch?v=KatlvCFHPRo)
- π₯ [Big O Notation - Time Complexity Analysis β WebTunings](https://www.youtube.com/watch?v=ALl86xJiTD8)

**[β¬ Back to Top](#table-of-contents)**

---

## 29. Algorithms

### Articles

- π [Data Structures and Algorithms using ES6](https://github.com/Crizstian/data-structure-and-algorithms-with-ES6)
- π [Algorithms and data structures implemented in JavaScript with explanations and links to further readings](https://github.com/trekhleb/javascript-algorithms)
- π [JS: Interview Algorithm](http://www.thatjsdude.com/interview/js1.html)
- π [Algorithms in JavaScript β Thon Ly](https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038)
- π [JavaScript Objects, Square Brackets and Algorithms β Dmitri Grabov](https://medium.freecodecamp.org/javascript-objects-square-brackets-and-algorithms-e9a2916dc158)
- π [Atwood's Law applied to CS101 - Classic algorithms and data structures implemented in JavaScript](https://github.com/felipernb/algorithms.js)
- π [Data Structures and Algorithms library in JavaScript](https://github.com/yangshun/lago)
- π [Collection of computer science algorithms and data structures written in JavaScript](https://github.com/idosela/algorithms-in-javascript)

**[β¬ Back to Top](#table-of-contents)**

---

## 30. Inheritance, Polymorphism and Code Reuse

### Articles

- π [Class inheritance, super β JavaScript.Info](https://javascript.info/class-inheritance)
- π [Inheritance in JavaScript β MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance)
- π [Inheritance in JavaScript β Rupesh Mishra](https://hackernoon.com/inheritance-in-javascript-21d2b82ffa6f)
- π [Simple Inheritance with JavaScript β David Catuhe](https://www.sitepoint.com/simple-inheritance-javascript/)
- π [JavaScript β Inheritance, delegation patterns and Object linking β NC Patro](https://codeburst.io/javascript-inheritance-25fe61ab9f85)
- π [Object Oriented JavaScript: Polymorphism with examples β Knoldus Blogs](https://blog.knoldus.com/object-oriented-javascript-polymorphism-with-examples/)
- π [Program Like Proteus β A beginnerβs guide to polymorphism in Javascript β Sam Galson](https://medium.com/yld-engineering-blog/program-like-proteus-a-beginners-guide-to-polymorphism-in-javascript-867bea7c8be2)
- π [Object-oriented JavaScript: A Deep Dive into ES6 Classes β Jeff Mott](https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/)

### Videos

- π₯ [Inheritance in JavaScript β kudvenkat](https://www.youtube.com/watch?v=yXlFR81tDBM)
- π₯ [JavaScript ES6 Classes and Inheritance β Traversy Media](https://www.youtube.com/watch?v=RBLIm5LMrmc)
- π₯ [Polymorphism in JavaScript β kudvenkat](https://www.youtube.com/watch?v=zdovG9cuEBA)

**[β¬ Back to Top](#table-of-contents)**

---

## 31. Design Patterns

### Articles

- π [4 JavaScript Design Patterns You Should Know β Devan Patel](https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know)
- π [JavaScript Design Patterns β Beginner's Guide to Mobile Web Development β Soumyajit Pathak](https://medium.com/beginners-guide-to-mobile-web-development/javascript-design-patterns-25f0faaaa15)
- π [JavaScript Design Patterns β Akash Pal](https://medium.com/front-end-hacking/javascript-design-patterns-ed9d4c144c81)
- π [Javascript Design Patterns: What They Are & How To Use Them β Patrick Simpson](https://seesparkbox.com/foundry/javascript_design_patterns)
- π [JavaScript Design Patterns: Understanding Design Patterns in JavaScript - Sukhjinder Arora](https://blog.bitsrc.io/understanding-design-patterns-in-javascript-13345223f2dd)
- π [All the 23 (GoF) design patterns implemented in Javascript β Felipe Beline](https://github.com/fbeline/Design-Patterns-JS)
- π [Learning JavaScript Design Patterns β Addy Osmani ](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

### Videos

- π₯ [JavaScript Design Patterns β Udacity](https://www.udacity.com/course/javascript-design-patterns--ud989)
- π₯ [JavaScript Patterns for 2017 β Scott Allen](https://www.youtube.com/watch?v=hO7mzO83N1Q)

**[β¬ Back to Top](#table-of-contents)**

---

## 32. Partial Applications, Currying, Compose and Pipe

### Articles

- π [Use function composition in JavaScript β RΓ©mi](https://www.codementor.io/michelre/use-function-composition-in-javascript-gkmxos5mj)
- π [Currying in JavaScript ES6 β Adam Bene](https://blog.benestudio.co/currying-in-javascript-es6-540d2ad09400)
- π [Composition and Currying Elegance in JavaScript β Pragyan Das](https://medium.com/@pragyan88/writing-middleware-composition-and-currying-elegance-in-javascript-8b15c98a541b)
- π [Functional JavaScript: Function Composition For Every Day Use β Joel Thoms](https://hackernoon.com/javascript-functional-composition-for-every-day-use-22421ef65a10)
- π [Functional Composition: compose() and pipe() β Anton Paras](https://medium.com/@acparas/what-i-learned-today-july-2-2017-ab9a46dbf85f)
- π [Why The Hipsters Compose Everything: Functional Composing In JavaScript β A. Sharif](http://busypeoples.github.io/post/functional-composing-javascript/)
- π [A Gentle Introduction to Functional JavaScript pt III: Functions for making functions β James Sinclair](https://jrsinclair.com/articles/2016/gentle-introduction-to-functional-javascript-functions/)
- π [Curry And Compose (why you should be using something like ramda in your code) β jsanchesleao](https://jsleao.wordpress.com/2015/02/22/curry-and-compose-why-you-should-be-using-something-like-ramda-in-your-code/)
- π [Function Composition in JavaScript with Pipe β Andy Van Slaars](https://vanslaars.io/post/create-pipe-function/)
- π [Practical Functional JavaScript with Ramda β Andrew D'Amelio, Yuri Takhteyev](https://developer.telerik.com/featured/practical-functional-javascript-ramda/)
- π [The beauty in Partial Application, Currying, and Function Composition β Joel Thoms](https://hackernoon.com/the-beauty-in-partial-application-currying-and-function-composition-d885bdf0d574)
- π [Curry or Partial Application? β Eric Elliott](https://medium.com/javascript-scene/curry-or-partial-application-8150044c78b8)
- π [Partial Application in JavaScript β Ben Alman](http://benalman.com/news/2012/09/partial-application-in-javascript/)
- π [Partial Application of Functions β Functional Reactive Ninja](https://hackernoon.com/partial-application-of-functions-dbe7d9b80760)
- π [Currying vs Partial Application β Deepak Gupta](https://codeburst.io/javascript-currying-vs-partial-application-4db5b2442be8)
- π [Partial Application in ECMAScript 2015 β Ragan Wald](http://raganwald.com/2015/04/01/partial-application.html)
- π [Functional Composition in Javascript β Joe Cortopassi](https://joecortopassi.com/articles/functional-composition-in-javascript/)
- π [So You Want to be a Functional Programmer pt. I β Charles Scalfani](https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-1-1f15e387e536)
- π [So You Want to be a Functional Programmer pt. II β Charles Scalfani](https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-2-7005682cec4a)
- π [So You Want to be a Functional Programmer pt. III β Charles Scalfani](https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-3-1b0fd14eb1a7)
- π [So You Want to be a Functional Programmer pt. IV β Charles Scalfani](https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-4-18fbe3ea9e49)
- π [So You Want to be a Functional Programmer pt. V β Charles Scalfani](https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-5-c70adc9cf56a)
- π [Functional-Light JavaScript Chapter 3: Managing Function Inputs β Kyle Simpson](https://github.com/getify/Functional-Light-JS/blob/master/manuscript/ch3.md)
- π [An introduction to the basic principles of Functional Programming β TK](https://medium.freecodecamp.org/an-introduction-to-the-basic-principles-of-functional-programming-a2c2a15c84)
- π [Concepts of Functional Programming in Javascript β TK](https://medium.com/the-renaissance-developer/concepts-of-functional-programming-in-javascript-6bc84220d2aa)
- π [An Introduction to Functional Programming Style in JavaScript β JavaScript Teacher](https://medium.freecodecamp.org/an-introduction-to-functional-programming-style-in-javascript-71fcc050f064)

### Videos

- π₯ [Compose vs Pipe: Functional Programming in JavaScript β Chyld Studios](https://www.youtube.com/watch?v=Wl2ejJOqHUU)
- π₯ [JavaScript Functional Programing: Compose β Theodore Anderson](https://www.youtube.com/watch?v=jigHxo9YR30)
- π₯ [Function Composition - Functional JavaScript β NWCalvank](https://www.youtube.com/watch?v=mth5WpEc4Qs)
- π₯ [JavaScript Function Composition Explained β Theodore Anderson](https://www.youtube.com/watch?v=Uam37AlzPYw)
- π₯ [Let's code with function composition β Fun Fun Function](https://www.youtube.com/watch?v=VGB9HbL1GHk)
- π₯ [Partial Application vs. Currying β NWCalvank](https://www.youtube.com/watch?v=DzLkRsUN2vE)
- π₯ [JavaScript Partial Application β Theodore Anderson](https://www.youtube.com/watch?v=jkebgHEcvac)

**[β¬ Back to Top](#table-of-contents)**

---

## 33. Clean Code

### Articles

- π [Clean Code concepts adapted for JavaScript β Ryan McDermott](https://github.com/ryanmcdermott/clean-code-javascript)
- π [JavaScript Clean Coding Best Practices β AndrΓ‘s TΓ³th](https://blog.risingstack.com/javascript-clean-coding-best-practices-node-js-at-scale/)
- π [Function parameters in JavaScript Clean Code β Kevin Peters](https://medium.com/@kevin_peters/function-parameters-in-javascript-clean-code-4caac109159b)
- π [Clean Code JavaScript β Sarah Drasner](https://css-tricks.com/clean-code-javascript/)
- π [Keeping your code clean β Samuel James](https://codeburst.io/keeping-your-code-clean-d30bcffd1a10)
- π [Best Practices for Using Modern JavaScript Syntax β M. David Green](https://www.sitepoint.com/modern-javascript-best-practices/)

### Videos

- π₯ [JavaScript Pro Tips - Code This, NOT That](https://www.youtube.com/watch?v=Mus_vwhTCq0)

**[β¬ Back to Top](#table-of-contents)**
