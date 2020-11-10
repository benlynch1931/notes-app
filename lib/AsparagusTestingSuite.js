let test = {
  that: function(message, assertion) {
    Window.testMessage = message;
    try {
      assertion();
      console.log(`${message} - passed`);
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
