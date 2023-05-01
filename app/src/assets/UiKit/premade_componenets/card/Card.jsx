import React, { useState } from "react";
import "./Card.scss";
import { Grid } from "../../grid/Gird";
import { Between, Line, Rows } from "../../Line/Line";
import PopUpCardExtension from "./PopUpCardExtension";

export default function Card(props) {
  const { pet } = props;

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
    console.log("test", showPopup);
  };

  return (
    <div className="card">
      <Rows>
        <Line addClass="around ">
          <img className="card-image" src={props.pet.picture} />
        </Line>
        <Line>
          <h2>{props.pet.name}</h2>
        </Line>
        <Line addClass="between">
          <h5>{props.pet.breed}</h5>
          <Rows addClass="between">
            <h6>Bio:{props.pet.bio}</h6>
            <h6>Age:{props.pet.age}</h6>
          </Rows>
        </Line>
        <Line>
          <h3>{props.pet.adoption_status}</h3>
        </Line>
        <button onClick={togglePopup}>
        show more
        </button>

          {showPopup && <PopUpCardExtension pet={props.pet} />}

      </Rows>
    </div>
  );
}
