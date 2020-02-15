const dependency1 = require('./example-multiple-classes');
const dependency2 = require('./example-unexported');

const instance = new dependency1.MySecondClass();
// the module.exports in 'example-unexported' doesn't include LogicValues, but we can still use it like this:
/** @type {import('./example-unexported').LogicValues} */
const logicValue = 0;

const result = dependency2.someFunctionality('Just Testing', instance.someMethod(logicValue, 1));
console.log(result);
