type Position = {
    x: number;
    y: number;
  };

  console.log("CartPickup.tsx");
  
export default class CartPickup {
    constructor(
      public position: Position,
      public width: number = 20,
      public height: number = 20
    ) {
      this.position = position;
      this.width = 20;
      this.height = 20;
    }
    static width = 20;
    static height = 20;

    draw = (ctx: CanvasRenderingContext2D | null) => {
      // ctx!.fillStyle = "green";
      ctx!.fillRect(
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    };

  }