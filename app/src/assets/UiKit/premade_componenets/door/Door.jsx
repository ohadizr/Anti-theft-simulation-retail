import React, { useState } from "react";
import "./Door.scss";

export default function Door(props) {

        const { children, show, onHide } = props;
        const [showOffcanvas, setShowOffcanvas] = useState(show);
      
        const handleClose = () => {
          setShowOffcanvas(false);
          onHide && onHide();
        };


    return (
        <>
          {showOffcanvas && (
            <div className="offcanvas-overlay" onClick={handleClose}></div>
          )}
          <div
            className={`offcanvas ${showOffcanvas ? "show" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="offcanvas-title"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Offcanvas Title</h5>
              <button type="button" className="btn-close" onClick={handleClose}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="offcanvas-body">{children}</div>
          </div>
        </>
      );
}



