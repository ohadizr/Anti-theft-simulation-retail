type Position = {
    x: number;
    y: number;
  };

export default   class Boundary {
    constructor(
      public position: Position,
      public width: number = 40,
      public height: number = 40
    ) {
      this.position = position;
      this.width = 40;
      this.height = 40;
    }
    static width = 40;
    static height = 40;

    draw = (ctx: CanvasRenderingContext2D | null) => {
      ctx!.fillStyle = "blue";
      ctx!.fillRect(
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    };
  }