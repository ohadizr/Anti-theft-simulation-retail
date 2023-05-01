

type Position = {
    x: number;
    y: number;
  };

  console.log("CartPickup.tsx");
  
export default class Cameras {
  
    constructor(
      public position: Position,
      public width: number = 20,
      public height: number = 20,
      public alert: boolean = false
    ) {
      this.position = position;
      this.width = 20;
      this.height = 20;
      this.alert = false;
    }
    static width = 20;
    static height = 20;

    draw = (ctx: CanvasRenderingContext2D | null) => {


      if(this.alert){
        ctx!.fillStyle = "rgba(223, 223, 69, 0.663)";
      }else{
        ctx!.fillStyle = "transparent";
      }

      ctx!.fillRect(
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    };
    focusCamera(ctx: CanvasRenderingContext2D | null,alert: boolean){

        this.alert = alert;
        this.draw(ctx);
        setTimeout(() => {
          this.alert = false;
          this.draw(ctx);
      }, 1000);


  
        

  }
    

  }
