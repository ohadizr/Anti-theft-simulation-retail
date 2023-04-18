import React from 'react'
import "./PopUpCardExtension.scss";
import Card from "./Card";
import { useState } from 'react';

export default function PopUpCardExtension(props) {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  }

  return (
    <div>
      <div className="popup-wrapper">
        <div className={`popup ${showPopup ? "visible" : ""}`}>
          <button className="close-btn" onClick={togglePopup}>
            X
          </button>
          <Card pet={props.pet} className="popup-card" />
        </div>
        <div className={`overlay ${showPopup ? "visible" : ""}`} onClick={togglePopup}></div>
      </div>
    </div>
  )
}


