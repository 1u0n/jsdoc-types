/**
 * A kind of enum
 * @enum {number}
 */
const logicValues = {
  TRUE: 1,
  FALSE: -1,
  MAYBE: 0
};

/** @typedef {logicValues} LogicValues */

/**
 * @param {string} a
 * @param {logicValues} b
 * @returns {string} the same string, modified
 */
function someFunctionality (a, b) {
  if (b === logicValues.TRUE) {
    return a.toLowerCase();
  } else {
    return a.toUpperCase();
  }
}

// we only export this method, but the type 'LogicValues' will still be usable from outside
module.exports = {
  someFunctionality
};
