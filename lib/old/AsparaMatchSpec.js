// expect(<INPUT>).toEqual(<RETURN VALUE>)
// expect(<instance>).toBeA(<class>)
class AsparaMatch {

  constructor(argument) {
    this.argument = argument;
  }

  toEqual(expected) {
    return this._equalMatcher(expected);
  }

  toBeAnInstanceOf(className) {
    return this._instanceTypeMatcher(className);
  }

  toBeAn(className) {
    return this._instanceTypeMatcher(className);
  }

  toBeA(className) {
    return this._instanceTypeMatcher(className);
  }

  // toChangeBy(value_change) {
  //   this.expected = this.argument + value_change;
  //   console.log("expected num:" + this.expected)
  //   console.log(this)
  //   return this;
  // }

  // when(funcToRun) {
  //   console.log(funcToRun)
  //   console.log(funcToRun())
  //   this.result = funcToRun();
  //   console.log("actual num: " + this.result)
  //   return this.expected === this.result;
  // }

  _instanceTypeMatcher(className) {
    return this.argument instanceof className;
  }

  _equalMatcher(expected) {
    return this.argument === expected;
  }
}
