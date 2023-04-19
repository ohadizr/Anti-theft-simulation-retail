type Velocity = {
  x: number;
  y: number;
};
type Position = {
  x: number;
  y: number;
};

export default class Customer {
  constructor(
    public position: Position,
    public velocity: Velocity,
    public radius: number = 10,
    public onStart: boolean = true,
    public useCart: boolean = false,
    public startTime: number = 0,
    public currentIndex: number = 0
  ) {
    this.position = position;
    this.velocity = velocity;
    this.radius = 10;
    this.onStart = true;
    this.useCart = false;
    this.startTime = 0;
    this.currentIndex = 0;
  }
  static radius = 10;

  moveUp() {
    this.velocity.y = -1;
  }
  moveDown() {
    this.velocity.y = 1;
  }
  moveLeft() {
    this.velocity.x = -1;
  }
  moveRight() {
    this.velocity.x = 1;
  }
  stopMovingVertical() {
    this.velocity.y = 0;
  }
  stopMovingHorizontal() {
    this.velocity.x = 0;
  }

 

  draw = (ctx: CanvasRenderingContext2D | null) => {
    ctx!.beginPath();
    if (this.onStart) {
      this.position.x = 20;
      this.position.y = 320;
      this.onStart = false;
    }
    ctx!.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    ctx!.fillStyle = "blue";
    if (this.useCart) {
      ctx!.fillStyle = "green";
      
    }
    ctx!.fill();
    ctx!.closePath();
  };
  update(ctx: CanvasRenderingContext2D | null) {
    this.draw(ctx);
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  pullCart = () => {
    this.useCart = true;
  
  };
}
