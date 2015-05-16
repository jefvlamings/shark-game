class Shark {

  // Constructor
  constructor(name, position) {
    this.type = 'Shark';
    this.name = name;
    this.x = position.x;
    this.y = position.y;
    this.width = 10;
    this.height = 10;
    this.color = "red"
  }

  // Draw
  draw(ctx) {

    this.ctx = ctx;

    this.x = this.x+0.5;
    this.y = this.y+0.5;

    // Draw circle
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, (this.width/2), 0, 2 * Math.PI, true);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();

    // Draw coordinates
    this.ctx.font = "10px Arial";
    this.ctx.fillText(this.name, this.x+10, this.y+3);

  }

}

export default Shark;