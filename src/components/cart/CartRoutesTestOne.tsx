import React from "react";
import "./CartRoutesTestOne.scss";
import { useState } from "react";

interface RoutesProps {
  storeRow: string[];
}
const cart = <button className="cartTypeTwo" />


const CartRoutes: React.FC<RoutesProps> = ({ storeRow }) => {
  
  storeRow = ["-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-",]
  // const storeRowTwo=["-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-",]
  // const storeRow1=  ["+", "+", "+", "+", "+","+", "+", "+", "+", "+","+", "+", "+", "+", "+","+", "+", "+", "+", "+","+", "+", "+", "+", "+","+", "+", "+", "+", "+",]
  // const storeRow2=  ["+", "+", "+", "-", "-","-", "-", "-", "-", "-","-", "-", "+", "+", "+","+", "+", "+", "+", "+","+", "-", "-", "-", "-","+", "+", "+", "+", "+",]
  // const storeRow3=  ["+", "+", "+", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","+", "+", "+", "+", "+",]
  // const storeRow4=  ["+", "+", "+", "-", "-","+", "+", "+", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","+", "+", "+", "+", "+",]
  // const storeRow5=  ["-", "-", "-", "-", "-","+", "+", "+", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","+", "+", "+", "+", "+",]
  // const storeRow6=  [ "-", "-", "-",cart, "-","+", "+", "+", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","+", "+", "+", "+", "+",]
  // const storeRow7=  ["+", "+", "+", "-", "-","+", "+", "+", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","+", "+", "+", "+", "+",]
  // const storeRow8=  ["+", "+", "+", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","+", "+", "+", "+", "+",]
  // const storeRow9=  ["+", "+", "+", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","+", "+", "+", "+", "+",]
  // const storeRow10= ["+", "+", "+", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","+", "+", "+", "+", "+",]
  // const storeRow11= ["+", "+", "+", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","+", "+", "+", "+", "+",]
  // const storeRow12= ["+", "+", "+", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","+", "+", "+", "+", "+",]
  // const storeRow13= ["-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","+", "+", "+", "+", "+",]
  // const storeRow14= ["-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","+", "+", "+", "+", "+",]
  // const storeRow15= ["+", "+", "+", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","+", "+", "+", "+", "+",]
  // const storeRow16= ["+", "+", "+", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","+", "+", "+", "+", "+",]
  // const storeRow17= ["+", "+", "+", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","+", "+", "+", "+", "+",]
  // const storeRow18= ["+", "+", "+", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","+", "+", "+", "+", "+",]
  // const storeRow19= ["+", "+", "+", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","+", "+", "+", "+", "+",]
  // const storeRow20= ["+", "+", "+", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","-", "-", "-", "-", "-","+", "+", "+", "+", "+",]
  // const storeRow21= ["+", "+", "+", "+", "+","+", "+", "+", "+", "+","+", "+", "+", "+", "+","+", "+", "+", "+", "+","+", "+", "+", "+", "+","+", "+", "+", "+", "+",]
  const storeRow1=  ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1", "I1", "J1", "K1", "L1", "M1", "N1", "O1", "P1", "Q1", "R1", "S1", "T1", "U1"]
  const storeRow2=  ["A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2", "I2", "J2", "K2", "L2", "M2", "N2", "O2", "P2", "Q2", "R2", "S2", "T2", "U2"]
  const storeRow3=  ["A3", "B3", "C3", "D3", "E3", "F3", "G3", "H3", "I3", "J3", "K3", "L3", "M3", "N3", "O3", "P3", "Q3", "R3", "S3", "T3", "U3"]
  const storeRow4=  ["A4", "B4", "C4", "D4", "E4", "F4", "G4", "H4", "I4", "J4", "K4", "L4", "M4", "N4", "O4", "P4", "Q4", "R4", "S4", "T4", "U4"]
  const storeRow5=  ["A5", "B5", "C5", "D5", "E5", "F5", "G5", "H5", "I5", "J5", "K5", "L5", "M5", "N5", "O5", "P5", "Q5", "R5", "S5", "T5", "U5"]
  const storeRow6=  ["A6", "B6", "C6", "D6", "E6", "F6", "G6", "H6", "I6", "J6", "K6", "L6", "M6", "N6", "O6", "P6", "Q6", "R6", "S6", "T6", "U6"]
  const storeRow7=  ["A7", "B7", "C7", "D7", "E7", "F7", "G7", "H7", "I7", "J7", "K7", "L7", "M7", "N7", "O7", "P7", "Q7", "R7", "S7", "T7", "U7"]
  const storeRow8=  ["A8", "B8", "C8", "D8", "E8", "F8", "G8", "H8", "I8", "J8", "K8", "L8", "M8", "N8", "O8", "P8", "Q8", "R8", "S8", "T8", "U8"]
  const storeRow9=  ["A9", "B9", "C9", "D9", "E9", "F9", "G9", "H9", "I9", "J9", "K9", "L9", "M9", "N9", "O9", "P9", "Q9", "R9", "S9", "T9", "U9"];
  const storeRow10= ["A10", "B10", "C10", "D10", "E10", "F10", "G10", "H10", "I10", "J10", "K10", "L10", "M10", "N10", "O10", "P10", "Q10", "R10", "S10", "T10", "U10"];
  const storeRow11= ["A11", "B11", "C11", "D11", "E11", "F11", "G11", "H11", "I11", "J11", "K11", "L11", "M11", "N11", "O11", "P11", "Q11", "R11", "S11", "T11", "U11"];
  const storeRow12= ["A12", "B12", "C12", "D12", "E12", "F12", "G12", "H12", "I12", "J12", "K12", "L12", "M12", "N12", "O12", "P12", "Q12", "R12", "S12", "T12", "U12"];
  const storeRow13= ["A13", "B13", "C13", "D13", "E13", "F13", "G13", "H13", "I13", "J13", "K13", "L13", "M13", "N13", "O13", "P13", "Q13", "R13", "S13", "T13", "U13"];
  const storeRow14= ["A14", "B14", "C14", "D14", "E14", "F14", "G14", "H14", "I14", "J14", "K14", "L14",  "M14", "N14", "O14", "P14", "Q14", "R14", "S14", "T14", "U14"];
  const storeRow15= ["A15", "B15", "C15", "D15", "E15", "F15", "G15", "H15", "I15", "J15", "K15", "L15", "M15", "N15", "O15", "P15", "Q15", "R15", "S15", "T15", "U15"];
  const storeRow16= ["A16", "B16", "C16", "D16", "E16", "F16", "G16", "H16", "I16", "J16", "K16", "L16", "M16", "N16", "O16", "P16", "Q16", "R16", "S16", "T16", "U16"];
  const storeRow17= ["A17", "B17", "C17", "D17", "E17", "F17", "G17", "H17", "I17", "J17", "K17", "L17", "M17", "N17", "O17", "P17", "Q17", "R17", "S17", "T17", "U17"];
  const storeRow18= ["A18", "B18", "C18", "D18", "E18", "F18", "G18", "H18", "I18", "J18", "K18", "L18", "M18", "N18", "O18", "P18", "Q18", "R18", "S18", "T18", "U18"];
  const storeRow19= ["A19", "B19", "C19", "D19", "E19", "F19", "G19", "H19", "I19", "J19", "K19", "L19", "M19", "N19", "O19", "P19", "Q19", "R19", "S19", "T19", "U19"];
  const storeRow20= ["A20", "B20", "C20", "D20", "E20", "F20", "G20", "H20", "I20", "J20", "K20", "L20", "M20", "N20", "O20", "P20", "Q20", "R20", "S20", "T20", "U20"];
  const storeRow21= ["A21", "B21", "C21", "D21", "E21", "F21", "G21", "H21", "I21", "J21", "K21", "L21", "M21", "N21", "O21", "P21", "Q21", "R21", "S21", "T21", "U21"];

  const rowsArr = [storeRow1, storeRow2, storeRow3, storeRow4, storeRow5, storeRow6, storeRow7, storeRow8, storeRow9, storeRow10, storeRow11, storeRow12, storeRow13, storeRow14, storeRow15, storeRow16, storeRow17, storeRow18, storeRow19, storeRow20,storeRow21];




  return (
    <div className="RoutesLayout">
      {/* <button className="cartMoveBtn" onClick={handleCartMovement}>Move</button> */}
      {/* <div className="positionTest"></div> */}
      

      {rowsArr.map((row, index) => (
        <div className={`mapTest Line${index + 1}`} key={index}

        >
        {row.map((spot, index) => (
          //if spot === "+" then add class "plus"
          <div className={`spot ${spot === "+" ? "plus" : ""} ${index % 2 === 0 ? "even" : "odd"}`} key={index}>{spot}</div>))}
      
    </div>
  ))

  }
    </div>
  );
};

export default CartRoutes;








