## what's this

a template node.js project that includes basic configuration to be able to have static type checking at compile and CI time, using jsdoc annotations with plain JS (no typescript code).

* type checking at compile-time: most modern IDEs will read `jsconfig.json` , which is here configured to make the IDE's internal typescript engine to check JS code. It'll automatically leverage your jsdoc to generate typescript errors and warnings
* type checking at CI-time: a 'tsc' task is included in package.json scripts so the CI pipeline can leverage typescript functionality to check for type correctness the jsdoc-annotated JS code


## Result

you get the benefits of typescript, but writing JS + JSDOC code


## Working with Jsdoc as your types source

* values and types exist in different planes. `Class myClass {...}` , `let foo = ...` will create the values (that your code can use, call...) and the types (usable in jsdoc). `/** @typedef {number} someType */` will only create the type, and automatically export it.
* every file has its own scope. A **value** defined inside file1 is only usable from file2 if file1 exports it. A **type** from file1 is usable in file2 if it is the type of an exported value, or if in file1 we do `/** @typedef {unexportedValue} MyExportedType */`

A couple of examples are given in code to illustrate these problems.


## How to use it

1. `npm i`
2. `npm run check` -- runs the linter and the type check
3. start writing js + jsdoc code