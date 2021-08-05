# is-finalizationregistry <sup>[![Version Badge][2]][1]</sup>

[![dependency status][5]][6]
[![dev dependency status][7]][8]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][11]][1]

Is this value a JS FinalizationRegistry? This module works cross-realm/iframe, and despite ES6 @@toStringTag.

## Example

```js
var isFinalizationRegistry = require('is-finalizationregistry');
assert(!isFinalizationRegistry(function () {}));
assert(!isFinalizationRegistry(null));
assert(!isFinalizationRegistry(function* () { yield 42; return Infinity; });
assert(!isFinalizationRegistry(Symbol('foo')));
assert(!isFinalizationRegistry(1n));
assert(!isFinalizationRegistry(Object(1n)));

assert(!isFinalizationRegistry(new Set()));
assert(!isFinalizationRegistry(new WeakSet()));
assert(!isFinalizationRegistry(new Map()));
assert(!isFinalizationRegistry(new WeakMap()));
assert(!isFinalizationRegistry(new WeakRef({})));

assert(isFinalizationRegistry(new FinalizationRegistry(function () {})));

class MyFinalizationRegistry extends FinalizationRegistry {}
assert(isFinalizationRegistry(new MyFinalizationRegistry(function () {})));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[1]: https://npmjs.org/package/is-finalizationregistry
[2]: http://versionbadg.es/inspect-js/is-finalizationregistry.svg
[5]: https://david-dm.org/inspect-js/is-finalizationregistry.svg
[6]: https://david-dm.org/inspect-js/is-finalizationregistry
[7]: https://david-dm.org/inspect-js/is-finalizationregistry/dev-status.svg
[8]: https://david-dm.org/inspect-js/is-finalizationregistry#info=devDependencies
[11]: https://nodei.co/npm/is-finalizationregistry.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/is-finalizationregistry.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/is-finalizationregistry.svg
[downloads-url]: http://npm-stat.com/charts.html?package=is-finalizationregistry
