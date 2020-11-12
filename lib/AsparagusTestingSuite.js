let test = {
  that: function(message, assertion) {
    window.testMessage = message;
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
    if(method === expected) {
      return;
    } else {
      throw new Error(`${window.testMessage} - FAILED`);
    }
  },

  toBeAnInstanceOf: function(instanceName, className) {
    if(instanceName instanceof className) {
      return;
    } else {
      throw new Error(`${window.testMessage} - FAILED`);
    }
  },

  toEqualEmpty: function(item, className) {
    if(className === Array) {
      if(item instanceof Array) {
        if(item.length === 0) {
          return;
        } else {
          throw new Error(`${window.testMessage} - FAILED: ${item} not empty`)
        }
      } else {
        throw new Error(`${window.testMessage} - FAILED: ${item} not ${className}`)
      }
    } else {
      throw new Error(`${window.testMessage} - FAILED: ${className} is not valid`)

    }
  }

}
