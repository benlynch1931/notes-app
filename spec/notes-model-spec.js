// (function(exports) {
//   function testCircleRadiusDefaultsTo10() {
//     var circle = new Circle();
//
//     if (circle.radius !== 10) {
//       throw new Error("Circle size is not 10");
//     }
//   };
//
//   testCircleRadiusDefaultsTo10();
// })(this);

// (function(exports) {
//
//   function testShowMessage() {
//     var note = new Note("Mace is the 'G'!");
//
//     if (note.showMessage() != "Mace is the 'G'!") {
//       throw new Error("test showMessage() - FAILED")
//     } else {
//       console.log("test showMessage() - passed")
//     }
//   }
//
//   testShowMessage();
// })(this);



( () => {
  test.that('The message is the same', () => {
    let note = new Note("I am with mace!");
    expect.toEqual(note.showMessage(), "I am with Mace!");
  })
})(this);
