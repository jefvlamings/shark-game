// Dependencies
var Scene = require('./scene');
var Shark = require('./shark');

class Game {

  // Constructor
  constructor($canvas) {
    this.scene = new Scene($canvas);
    this.prepare();
    console.log('Game loaded');
  }

  // Prepare
  prepare() {

    // Start position
    var position = {
      x: 125,
      y: 25
    };

    // Add shark
    var shark = new Shark('Barry', position);
    this.scene.addItem(shark);

  }

}

export default Game;