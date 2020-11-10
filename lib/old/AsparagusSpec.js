class Asparagus {

  constructor() {
    this.testCount = 0;
    this.passedTests = 0;
    this.failedTests = 0;
    this.testInfo = [];
  }

  it(description, assertion) {
    this.testCount++;
    this.assertedTest = assertion();
    status = this._passFail(this.assertedTest);
    this.testInfo.push({
      testNum: this.testCount,
      description: description,
      status: status
    })
    this._printResult(description, status)
  }

  expect(argument) {
    return new AsparaMatch(argument);
  }


  _passFail(test) {
    if (test === true) {
      this.passedTests++
      return 'passed';
    } else {
      this.failedTests++
      return 'FAILURE';
    }
  }

  _printResult(description, status) {
    console.log(`Test ${this.testCount}: it ${description} - status: ${status}`)
  }
}
