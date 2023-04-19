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
      //count true time for this.alert

  //     let time = new Date();
  //     let timeAlert:null|number = null
  //  setTimeout(() => {
  //   let timeNow = time.getTime();
  //   let timeAlert = timeNow - time.getTime();
  //      }, 10000);

      if(this.alert){
        ctx!.fillStyle = "rgba(223, 223, 69, 0.663)";
        // if (this.alert && timeAlert ) {
        //   ctx!.fillStyle = "rgba(223, 164, 69, 0.663)";
        // }
      }else{
        ctx!.fillStyle = "rgba(238, 238, 192, 0.514)";
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