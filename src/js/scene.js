class Scene {

  // Constructor
  constructor($canvas) {
    this.$canvas = $canvas;
    this.gridSize = 10;
    this.frameRate = 100; // ms
    this.canvas = this.$canvas[0];
    this.ctx = this.canvas.getContext("2d");
    this.items = []
    this.play();
    console.log('Scene loaded');
  }

  // Play
  play() {

    setInterval(v => {
      this.prepare();
      //item.draw(this.ctx);
    }, this.frameRate);

  }

  // Add item
  addItem(item) {
    this.items.push(item);
    console.log(item.type + ' ' + item.name + ' added to the pool.');
  }

  // Prepare
  prepare() {

    // Clear the canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Add a grid
    this.addGrid();

  }

  // Add Grid
  addGrid() {

    this.ctx.strokeStyle = '#eee';
    this.ctx.lineWidth = 1;

    // Vertical lines along the x-axis
    for(var x = this.gridSize; x <= this.canvas.width; x = x + this.gridSize) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, this.canvas.height);
      this.ctx.stroke();
    }

    // Horizontal lines along the y-axis
    for(var y = this.gridSize; y <= this.canvas.height; y = y + this.gridSize) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(this.canvas.width, y);
      this.ctx.stroke();
    }

  }

}

export default Scene;