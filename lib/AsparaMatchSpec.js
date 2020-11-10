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

class Expect {

  constructor(message) {
    this.testMessage = message;
  }

  toEqual(method, expected) {

    return method === expected;
    // if(method !== expected) {
    //   throw new Error `${this.testMessage} - FAILED`;
    // } else {
    //   console.log(`${this.testMessage} - Passed`)
    // }
  }
}



let test = {
  that: function(message, assertion) {
    Window.testMessage = message;
    try {
      console.log(`${message} - passed`);
      assertion();
    } catch (e) {
      console.error(e);
    }
  }

}

let expect = {
  toEqual: function(method, expected)  {
    if(method !== expected) {
      throw new Error(`${Window.testMessage} - FAILED`);
    } else {
      return 'passed'
    }
  }
}
