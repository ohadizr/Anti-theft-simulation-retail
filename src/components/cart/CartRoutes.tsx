import React, { useRef, useEffect, useState, useMemo } from "react"; // Importing useRef and useEffect hooks
import "./CartRoutes.scss";
import  Customer  from ".././cart/Customers/Customer";
import Boundary from ".././cart/Map/Boundary";

interface RoutesProps {}
const CartRoutes: React.FC<RoutesProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const boundaries = useMemo(() => {
    const boundaries: Boundary[] = [];
    return boundaries;
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
    //Draw boundaries
    canvas!.height = 400;
    canvas!.width = 400;
    boundaries.forEach((boundary) => {
      boundary.draw(ctx);

    });
    customer.draw(ctx);
    function animate() {
      requestAnimationFrame(animate);
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      boundaries.forEach((boundary) => {
        boundary.draw(ctx);
      }
      );
      customer.update();


      customer.draw(ctx);
      
      

      
    }
    animate();

  }, [boundaries]);
  useEffect(() => {}, []);

  const miniMap = [
    ["-", "-", "-", "-", "-", "-"],
    ["-", " ", " ", " ", " ", "-"],
    ["-", " ", "-", "-", " ", "-"],
    ["-", " ", " ", " ", " ", "-"],
    ["-", "-", "-", "-", "-", "-"],
  ];

  miniMap.forEach((row, i) => {
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
      }
    });

    // const keys = {
    //   w: {pressed: false}
    // },{
    //   a: {pressed: false}
    // },{
    //   s: {pressed: false}
    // },{
    //   d: {pressed: false}
    // }

    
  //   document.addEventListener("keydown", ({ key }) => {
  //     switch (key) {
  //       case "w":
  //         keys.w.pressed = true;
  //         break;
  //       case "a":
  //         keys.a.pressed = true;
  //         break;
  //       case "s":
  //         keys.s.pressed = true;
  //         break;
  //       case "d":
  //         keys.d.pressed = true;
  //         break;
  //     }
  //   });
  });
  
  return <canvas className="canvas" ref={canvasRef}></canvas>;
};

export default CartRoutes;
