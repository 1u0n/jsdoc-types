class MyFirstClass {
  constructor () {
    this.member1 = 0;
    this.member2 = 'hey';
  }
}

class MySecondClass {
  constructor () {
    this.member3 = 10;
  }

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

exports.MyFirstClass = MyFirstClass;
exports.MySecondClass = MySecondClass;
