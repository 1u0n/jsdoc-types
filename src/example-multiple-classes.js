class MyFirstClass {
  member1 = 0;
  member2 = 'hey';
}

class MySecondClass {
  member3 = 10;

  /**
   * Takes two numbers and returns their sum
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  someMethod (a, b) {
    return a + b;
  }
}

module.exports = { MyFirstClass, MySecondClass };
