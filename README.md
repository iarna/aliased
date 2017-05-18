# aliased

Simple module aliasing.

## EXAMPLE

`package.json`:
```json
{
  "aliases": {
    "underscore": "lodash"
  }
}
```

`example.js`:
```js
const _ = require('underscore')
…
```

```
$ node -r aliased example.js // uses lodash instead of underscore
```

Or…

`server.js`:
```
require('aliased').register()
const example = require('./example.js') // uses lodash instead of underscore
```

## USAGE

This module provides simple module aliasing.  Aliases go in your
`package.json` in the `aliases` property.  The `key` is the name of the
alias, the `value` is the name of the actual package.

While you _can_ provide aliases of relative requires, eg `require('./foo')`
this treats the string as opaque, so it'll catch anyone requiring the
relative path, even if it would oridinarly point at a different file.

Similarly, values _can_ be relative, but they're substituted literally and
so anything using them that's not in the same path as your package root will
probably have a bad day.

So...  probably don't use relative paths with this.  `module-alias` and
`path-alias` are better choices for that.

## DISCLAIMER

I'm not saying this module is a good idea.  Loading something different off
disk than you `require`d is probably going to lead to confusion.  But if you
must have aliases, it's an option.

## PRIOR ART

* [module-alias](https://www.npmjs.com/package/module-alias) to treat local files like packages.
* [getmod](https://www.npmjs.com/package/getmod) is an alternative module loader (eg, thing other than `require`) with aliases.
* [load-alias](https://www.npmjs.com/package/getmod) is another alternative module loader with aliases.
* [path-alias](https://www.npmjs.com/package/path-alias) to treat local files like packages.
