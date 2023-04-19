import React, { useRef, useEffect, useState, useMemo } from "react"; // Importing useRef and useEffect hooks
import "./CartRoutes.scss";
import Customer from ".././cart/Customers/Customer";
import Boundary from ".././cart/Map/Boundary";
import CartPickup from ".././cart/Map/CartPickup";

type recordingArray = {
  direction: string;
  time: number;
  y: number;
  x: number;
};

interface RoutesProps {}

const CartRoutes: React.FC<RoutesProps> = () => {
  
  const [currentDirection, setCurrentDirection] = useState("");
  const [recording, setRecording] = useState<recordingArray[]>([]);
  // let recording: recordingArray[] = [];
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const boundaries = useMemo(() => {
    const boundaries: Boundary[] = [];
    return boundaries;
  }, []);
  const cartPickup = useMemo(() => {
    const cartPickup: CartPickup[] = [];
    return cartPickup;
  }, []);
    
  const customer = useMemo(() => {
    const customer: Customer = new Customer(
      {
        x: Boundary.width + Boundary.width / 2,
        y: Boundary.height + Boundary.height / 2,
      },
      { x: 0, y: 0 }
    );
    return customer;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas!.getContext("2d");
    canvas!.height = 470;
    canvas!.width = 600;
    boundaries.forEach((boundary) => {
      boundary.draw(ctx);
    });
    cartPickup.forEach((cartPick) => {
      cartPick.draw(ctx);
    });

    function animate() {
      requestAnimationFrame(animate);
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      boundaries.forEach((boundary) => {
        boundary.draw(ctx);
        if (
          customer.position.y - customer.radius +3+ customer.velocity.y <=
            boundary.position.y + boundary.height &&
          customer.position.x + customer.radius -5 + customer.velocity.x >=
            boundary.position.x &&
          customer.position.y + customer.radius -3 + customer.velocity.y >=
            boundary.position.y &&
          customer.position.x + customer.radius -15 + customer.velocity.x <=
            boundary.position.x + boundary.width
        ) {
          customer.velocity.x = 0;
          customer.velocity.y = 0;
        }
        
      });
      cartPickup.forEach((cartPick) => {
        cartPick.draw(ctx);
        
        if (
          customer.position.y - customer.radius +3+ customer.velocity.y <=
            cartPick.position.y + cartPick.height &&
          customer.position.x + customer.radius -5 + customer.velocity.x >=
            cartPick.position.x &&
          customer.position.y + customer.radius -3 + customer.velocity.y >=
            cartPick.position.y &&
          customer.position.x + customer.radius -15 + customer.velocity.x <=
            cartPick.position.x + cartPick.width
        ) {
          customer.pullCart();
        }
      });
      customer.update(ctx);  
      // console.log(currentDirection);
       
    }
    animate();
  }, [
  ]);




let records = recording 
//if current direction is not the same ast the last direction of records array then push the current direction and time to the records array
if (currentDirection !== records[records.length - 1]?.direction) {
records.push ({direction: currentDirection, time: Date.now()
,y: customer.position.y, x: customer.position.x})
}
console.log(records);
function moveCustomer(steps: any[], index: number, customer: Customer) {
  if (index < steps.length) {
    let step = steps[index];
    
    if (step.direction === "right") {
      customer.moveRight();
    } else if (step.direction === "left") {
      customer.moveLeft();
    } else if (step.direction === "up") {
      customer.moveUp();
    } else if (step.direction === "down") {
      customer.moveDown();
    } else if (step.direction === "stop") {
      customer.stopMovingHorizontal();
      customer.stopMovingVertical();
    } else if (step.direction === "end") {
      customer.stopMovingHorizontal();
      customer.stopMovingVertical();
      return;
    }
    
    setTimeout(() => {
      moveCustomer(steps, index + 1, customer);
    }, step.time - (index === 0 ? 0 : steps[index - 1].time));
  }
}





  const map = [
    ["-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-", ],
    ["-", "-", "-", " ", " ", " ", " "," ", " ", " ", " ", "", "-","-","-", "-", "-", "-","-", "-", "-",  "-","-", "-", "-", "-", "-", "-", "-", "-",],
    ["-", "-", "-", " ", " ", " ", " "," ", " ", " ", " ", " ", " "," ", " ", " ", " ", " ", " "," ", " ", "-","-", "-", "-", "-", "-", "-", "-", "-",],
    ["-", "-", "-", " ", " ", "-", "-","-", " ", " ", " ", " ", " "," ", " ", " ", " ", " ", " "," ", " ", "-","-", "-", "-", "-", "-", "-", "-", "-",],
    [" ", " ", " ", " ", " ", "-", "-","-", " ", " ", " ", "-", "-","-", "-", " ", " ", "-", "-","-", " ", "-","-", "-", "-", "-", "-", "-", "-", "-",],
    [" ", " ", " ", " ", " ", "-", "-","-", " ", " ", " ", "", "","", "", " ", " ", "", "","", " ", "-","-", "-", "-", "-", "-", "-", "-", "-",],
    ["-", "-", "-", " ", " ", "-", "-","-", " ", " ", " ", " ", " "," ", " ", " ", " ", " ", " "," ", " ", "-","-", "-", "-", "-", "-", "-", "-", "-",],
    ["-", "-", "-", " ", " ", " ", "","", " ", " ", " ", " ", " "," ", " ", " ", " ", " ", " "," ", " ", "-","-", "-", "-", "-", "-", "-", "-", "-",],
    ["-", "-", "-", " ", " ", " ", " "," ", " ", " ", " ", "-", "-","-", "-", " ", " ", "-", "-","-", " ", "-","-", "-", "-", "-", "-", "-", "-", "-",],
    ["-", "-", "-", " ", " ", " ", " "," ", " ", " ", " ", " ", " "," ", " ", " ", " ", " ", " "," ", " ", "-","-", "-", "-", "-", "-", "-", "-", "-",],
    ["-", "-", "-", " ", " ", "+", "-","-", "-", "-", " ", " ", " "," ", " ", " ", " ", " ", " "," ", " ", "-","-", "-", "-", "-", "-", "-", "-", "-",],
    ["-", "-", "-", " ", " ", "+", "-","-", "-", "-", " ", "-", "-","-", "-", " ", " ", "-", "-","-", " ", "-", "-", "-", "-","-", "-", "-", "-", "-",],
    ["-", "-", "-", " ", " ", "+", "-","-", "-", "-", " ", "-", "-","-", "-", " ", " ", "-", "-","-", " ", "-", "-", "-", "-","-", "-", "-", "-", "-",],
    ["-", "-", "-", " ", " ", "", " "," ", " ", " ", " ", " ", " "," ", " ", " ", " ", "-", "-","-", " ", " ", " ", " ", " ","-", "-", "-", "-", "-",],
    ["-", "-", "-", " ", " ", " ", " "," ", " ", " ", " ", " ", " "," ", " ", " ", " ", "-", "-","-", " ", " ", " ", " ", "-","-", "-", "-", "-", "-",],
    [" ", " ", " ", " ", " ", " ", "-","-", "-", "-", " ", "-", "-","-", "-", " ", " ", "-", "-","-", " ", " ", " ", " ", "-","-", "-", "-", "-", "-",],
    [" ", " ", " ", " ", " ", " ", "-","-", "-", "-", " ", "-", "-","-", "-", " ", " ", "-", "-","-", " ", " ", " ", " ", "-","-", "-", "-", "-", "-",],
    ["-", "-", "-", " ", " ", " ", " "," ", " ", " ", " ", " ", " "," ", " ", " ", " ", " ", " "," ", " ", " ", " ", " ", "-","-", "-", "-", "-", "-",],
    ["-", "-", "-", " ", " ", " ", "-", "-","-", "-", " ", "-", "-","-", "-", " ", " ", "-", "-","-", " ", " ", " ", " ", " ","-", "-", "-", "-", "-",],
    ["-", "-", "-", " ", " ", " ", "-","-", "-", "-", " ", "-", "-","-", "-", " ", " ", "-", "-","-", " ", " ", " ", " ", " ","-", "-", "-", "-", "-",],
    ["-", "-", "-", " ", " ", " ", " "," ", " ", " ", " ", " ", " "," ", " ", " ", " ", " ", " "," ", " ", " ", " ", " ", " ","-", "-", "-", "-", "-",],
    ["-", "-", "-", " ", " ", " ", " "," ", " ", " ", " ", " ", " "," ", " ", " ", " ", " ", " "," ", " ", " ", " ", " ", " ","-", "-", "-", "-", "-",],
    ["-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-", ],
  ];

  map.forEach((row, i) => {
    row.forEach((symbol, j) => {
      switch (symbol) {
        case "-":
          boundaries.push(
            new Boundary({
              x: Boundary.width * j,
              y: Boundary.height * i,
            })
          );
          break;
          
        case "+" :
          cartPickup.push(
            new CartPickup({
              x: CartPickup.width * j,
              y: CartPickup.height * i,
            })
          );
          break;

      }
    });


    const keys = {
      w: { pressed: false },
      a: { pressed: false },
      s: { pressed: false },
      d: { pressed: false },
    };
    document.addEventListener("keyup", ({ key }) => {
      switch (key) {
        case "w":
          keys.w.pressed = false;
          
          break;
        case "a":
          keys.a.pressed = false;
          break;
        case "s":
          keys.s.pressed = false;
          break;
        case "d":
          keys.d.pressed = false;
          break;
      }
    });
    document.addEventListener("keydown", ({ key }) => {
      switch (key) {
        case "w":
          keys.w.pressed = true;
          setCurrentDirection("up");
          customer.moveUp();

          break;
        case "a":
          keys.a.pressed = true;
          customer.moveLeft();
          setCurrentDirection("left");

          break;
        case "s":
          keys.s.pressed = true;
          customer.moveDown();
          setCurrentDirection("down");
          break;
        case "d":
          keys.d.pressed = true;
          customer.moveRight();
          setCurrentDirection("right");
          break;
      }
    });

    document.addEventListener("keyup", ({ key }) => {
      switch (key) {
        case "w":
          keys.w.pressed = false;
          customer.stopMovingVertical();
          setCurrentDirection("stop");
          break;
        case "a":
          keys.a.pressed = false;
          customer.stopMovingHorizontal();
          setCurrentDirection("stop");
          break;
        case "s":
          keys.s.pressed = false;
          customer.stopMovingVertical();
          setCurrentDirection("stop");
          break;
        case "d":
          keys.d.pressed = false;
          customer.stopMovingHorizontal();
          setCurrentDirection("stop");
          break;
          //on enter key press setCurrentDirection to "end"
        case "Enter":
          setCurrentDirection("end");
          break;
          
      }
    });

  });
    
  return <canvas className="canvas" ref={canvasRef}></canvas>;
};

export default CartRoutes;
