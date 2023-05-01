import React, { useRef, useEffect, useState, useMemo } from "react"; // Importing useRef and useEffect hooks
import "./CartRoutes.scss";
import Customer from "./Customers/Customer";
import Boundary from "./Map/Boundary";
import CartPickup from "./Map/CartPickup";
import Cameras from "./Map/Cameras";
import routes from "./Map/routes.json";
import { useGlobalState } from "../../GlobalContext";


interface RoutesProps {}

const CartRoutesAuto: React.FC<RoutesProps> = () => {
  const {camerasControlState} = useGlobalState();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const boundaries = useMemo(() => {
    const boundaries: Boundary[] = [];
    return boundaries;
  }, []);
  const cartPickup = useMemo(() => {
    const cartPickup: CartPickup[] = [];
    return cartPickup;
  }, []);
  const cameras = useMemo(() => {
    const cameras: Cameras[] = [];
    return cameras;
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

  const customer2 = useMemo(() => {
    const customer2: Customer = new Customer(
      {
        x: Boundary.width + Boundary.width / 2,
        y: Boundary.height + Boundary.height / 2,
      },
      { x: 0, y: 0 }
    );
    return customer2;
  }, []);

  const customer3 = useMemo(() => {
    const customer3: Customer = new Customer(
      {
        x: Boundary.width + Boundary.width / 2,
        y: Boundary.height + Boundary.height / 2,
      },
      { x: 0, y: 0 }
    );
    return customer3;
  }, []);

  const customer4 = useMemo(() => {
    const customer4: Customer = new Customer(
      {
        x: Boundary.width + Boundary.width / 2,
        y: Boundary.height + Boundary.height / 2,
      },
      { x: 0, y: 0 }
    );
    return customer4;
  }, []);
const customer5 =useMemo(() => {
  const customer5: Customer = new Customer(
    {
      x: Boundary.width + Boundary.width / 2,
      y: Boundary.height + Boundary.height / 2,
    },
    { x: 0, y: 0}
  );
  return customer5;
}, []);



  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas!.getContext("2d");
    let customerArr= [customer
      ,customer2,customer3,customer4,customer5
    ]
    canvas!.height = 470;
    canvas!.width = 600;
    boundaries.forEach((boundary) => {
      boundary.draw(ctx);
    });
    cartPickup.forEach((cartPick) => {
      cartPick.draw(ctx);
    });
    cameras.forEach((camera) => {
      camera.draw(ctx);
    });
    function animate() {
      requestAnimationFrame(animate);
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
    
      customerArr.forEach(c => {
      boundaries.forEach((boundary) => {
        boundary.draw(ctx);
        if (
          c.position.y - c.radius +3+ c.velocity.y <=
            boundary.position.y + boundary.height &&
          c.position.x + c.radius -5 + c.velocity.x >=
            boundary.position.x &&
          c.position.y + c.radius -3 + c.velocity.y >=
            boundary.position.y &&
          c.position.x + c.radius -15 + c.velocity.x <=
            boundary.position.x + boundary.width
        ) {
          c.velocity.x = 0;
          c.velocity.y = 0;
        }
        
      });
      cartPickup.forEach((cartPick) => {
        cartPick.draw(ctx);
        
        if (
          c.position.y - c.radius +3+ c.velocity.y <=
            cartPick.position.y + cartPick.height &&
          c.position.x + c.radius -5 + c.velocity.x >=
            cartPick.position.x &&
          c.position.y + c.radius -3 + c.velocity.y >=
            cartPick.position.y &&
          c.position.x + c.radius -15 + c.velocity.x <=
            cartPick.position.x + cartPick.width
        ) {
          c.pullCart();
        }
      });
      cameras.forEach((camera) => {
        camera.draw(ctx);
        if (
          c.position.y - c.radius +3+ c.velocity.y <=
            camera.position.y + camera.height &&
          c.position.x + c.radius -5 + c.velocity.x >=
            camera.position.x &&
          c.position.y + c.radius -3 + c.velocity.y >=
            camera.position.y &&
          c.position.x + c.radius -15 + c.velocity.x <=
            camera.position.x + camera.width
        ) {
          camera.focusCamera(ctx,true);
        }

      });
      c.update(ctx); 
       
    })
    }
    animate();
  });


function moveCustomer(steps: any[], index: number, c: Customer) {
  if (index < steps.length) {
    let step = steps[index];
    
    if (step.direction === "right") {
      c.moveRight();
    } else if (step.direction === "left") {
      c.moveLeft();
    } else if (step.direction === "up") {
      c.moveUp();
    } else if (step.direction === "down") {
      c.moveDown();
    } else if (step.direction === "stop") {
      c.stopMovingHorizontal();
      c.stopMovingVertical();
    } else if (step.direction === "end") {
      c.stopMovingHorizontal();
      c.stopMovingVertical();
      return;
    }
    
    setTimeout(() => {
      moveCustomer(steps, index + 1, c);
    }, step.time - (index === 0 ? 0 : steps[index - 1].time));
  }
}



const stepsArr = Object.entries(routes);


  moveCustomer(stepsArr[0][1][0], 0, customer2);
  moveCustomer(stepsArr[0][1][1], 0, customer3);
  moveCustomer(stepsArr[0][1][2], 0, customer4);
  moveCustomer(stepsArr[0][1][3], 0, customer5);
  moveCustomer(stepsArr[0][1][4], 0, customer);

  const map = [
    ["-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-", ],
    ["-", "-", "-", " ", " ", " ", " "," ", " ", " ", " ", "", "-","-","-", "-", "-", "-","-", "-", "-",  "-","-", "-", "-", "-", "-", "-", "-", "-",],
    ["-", "-", "-", " ", " ", " ", " "," ", " ", " ", " ", " ", " "," ", " ", " ", " ", " ", " "," ", " ", "-","-", "-", "-", "-", "-", "-", "-", "-",],
    ["-", "-", "-", " ", " ", "-", "-","-", " ", " ", " ", " ", " "," ", " ", " ", " ", " ", " "," ", " ", "-","-", "-", "-", "-", "-", "-", "-", "-",],
    ["x", "x", "x", " ", " ", "-", "-","-", " ", " ", " ", "-", "-","-", "-", " ", " ", "-", "-","-", " ", "-","-", "-", "-", "-", "-", "-", "-", "-",],
    ["x", "x", "x", " ", " ", "-", "-","-", " ", " ", " ", "", "","", "", " ", " ", "", "","", " ", "-","-", "-", "-", "-", "-", "-", "-", "-",],
    ["-", "-", "-", " ", " ", "-", "-","-", " ", " ", " ", " ", " "," ", " ", " ", " ", " ", " "," ", " ", "-","-", "-", "-", "-", "-", "-", "-", "-",],
    ["-", "-", "-", " ", " ", " ", "","", " ", " ", " ", " ", " "," ", " ", " ", " ", " ", " "," ", " ", "-","-", "-", "-", "-", "-", "-", "-", "-",],
    ["-", "-", "-", " ", " ", " ", " "," ", " ", " ", " ", "-", "-","-", "-", " ", " ", "-", "-","-", " ", "-","-", "-", "-", "-", "-", "-", "-", "-",],
    ["-", "-", "-", " ", " ", " ", " "," ", " ", " ", " ", " ", " "," ", " ", " ", " ", " ", " "," ", " ", "-","-", "-", "-", "-", "-", "-", "-", "-",],
    ["-", "-", "-", " ", " ", "+", "-","-", "-", "-", " ", " ", " "," ", " ", " ", "x", " ", " "," ", " ", "-","-", "-", "-", "-", "-", "-", "-", "-",],
    ["-", "-", "-", " ", " ", "+", "-","-", "-", "-", " ", "-", "-","-", "-", " ", "x", "-", "-","-", " ", "-", "-", "-", "-","-", "-", "-", "-", "-",],
    ["-", "-", "-", " ", " ", "+", "-","-", "-", "-", " ", "-", "-","-", "-", " ", "x", "-", "-","-", " ", "-", "-", "-", "-","-", "-", "-", "-", "-",],
    ["-", "-", "-", " ", " ", "", " "," ", " ", " ", " ", " ", " "," ", " ", " ", "x", "-", "-","-", " ", " ", " ", " ", " ","-", "-", "-", "-", "-",],
    ["-", "-", "-", " ", " ", " ", " "," ", " ", " ", " ", " ", " "," ", " ", " ", "x", "-", "-","-", " ", " ", " ", " ", "-","-", "-", "-", "-", "-",],
    ["x", "x", "x", " ", " ", " ", "-","-", "-", "-", " ", "-", "-","-", "-", " ", "x", "-", "-","-", " ", " ", " ", "x", "-","-", "-", "-", "-", "-",],
    ["x", "x", "x", " ", " ", " ", "-","-", "-", "-", " ", "-", "-","-", "-", " ", "x", "-", "-","-", " ", " ", " ", "x", "-","-", "-", "-", "-", "-",],
    ["-", "-", "-", " ", " ", " ", " "," ", " ", " ", " ", " ", " "," ", " ", " ", " ", "", " "," ", " ", " ", " ", "x", "-","-", "-", "-", "-", "-",],
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
      
        case "x" :
          if (camerasControlState === false) {
            break;
            
          } else {
          cameras.push(
            new Cameras({
              x: Cameras.width * j,
              y: Cameras.height * i,
            })
          );
          }
          break;
      }
    });
  });


  return <canvas className="canvas" ref={canvasRef}></canvas>
};


export default CartRoutesAuto;
