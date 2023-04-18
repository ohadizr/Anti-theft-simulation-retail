type Velocity = {
    x: number;
    y: number;
  };
  type Position = {
    x: number;
    y: number;
  };
export default   class Customer {
    constructor(
      public position: Position,
      public velocity: Velocity,
      public radius: number = 10
    ) {
      this.position = position;
      this.velocity = velocity;
      this.radius = 10;
    }
    static radius = 10;

    moveUp() {
      this.velocity.y -= 10;
      console.log("move up");
    }
    moveDown() {
      console.log("move down");
      this.velocity.y += 10;
    }
    moveLeft() {
      this.velocity.x -= 10;
      console.log("move left");
    }
    moveRight() {
      this.velocity.x += 10;
      console.log("move right");
    }

    update() {
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
    }

    draw = (ctx: CanvasRenderingContext2D | null) => {
      ctx!.beginPath();
      ctx!.arc(
        this.position.x,
        this.position.y,
        this.radius,
        0,
        Math.PI * 2
      );
      ctx!.fillStyle = "red";
      ctx!.fill();
      this.update();
      ctx!.closePath();
    };
  }