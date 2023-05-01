type Velocity = {
    x: number;
    y: number;
  };
  type Position = {
    x: number;
    y: number;
  };

export default   class CustomerManual {
    constructor(
      public position: Position,
      public velocity: Velocity,
      public radius: number = 10,
      public onStart: boolean = true,
      public useCart: boolean = false
    ) {
      this.position = position;
      this.velocity = velocity;
      this.radius = 10;
      this.onStart = true;
      this.useCart = false;
    }
    static radius = 10;

    moveUp() {
      this.velocity.y = -2;
   
    }
    moveDown() {
      this.velocity.y = 2;
   
    }
    moveLeft() {
      this.velocity.x = -2;
 
    }
    moveRight() {
      this.velocity.x = 2;
      // this.movementRecording();
    }
    stopMovingVertical() {
      this.velocity.y = 0;
      // this.movementRecording();
    }
    stopMovingHorizontal() {
      this.velocity.x = 0;
      // this.movementRecording();
    }

    movementRecording= () => {
      const movementArray = [];
      const movement = {
        x: this.position.x,
        y: this.position.y,
        time: Date.now()
      }
     //save movement to array in local storage
      movementArray.push(movement);

      // localStorage.setItem("movement", JSON.stringify(movementArray));
      

      console.log(movementArray);
    }
    

    draw = (ctx: CanvasRenderingContext2D | null) => {
      ctx!.beginPath();
      if (this.onStart) {
        this.position.x = 20;
        this.position.y = 320;
        this.onStart = false;
      }
      ctx!.arc(
        this.position.x,
        this.position.y,
        this.radius,
        0,
        Math.PI * 2
      )
      ctx!.fillStyle = "blue";
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
      this.radius = 15;
      
      }
  }