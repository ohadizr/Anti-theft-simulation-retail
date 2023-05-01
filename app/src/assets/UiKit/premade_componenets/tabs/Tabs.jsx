import React from "react";
import "./Tabs.scss";
export default function Tabs(props) {
  const { tab1, Tab2, Tab3, child1, child2, child3 } = props;

  const tabButtons = document.querySelectorAll(".tab-button");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tab = button.dataset.tab;
      activateTab(tab);
    });
  });

  function activateTab(tab) {
    tabButtons.forEach((button) => {
      if (button.dataset.tab === tab) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });

    tabPanes.forEach((pane) => {
      if (pane.dataset.tab === tab) {
        pane.classList.add("active");
      } else {
        pane.classList.remove("active");
      }
    });
  }

  activateTab("tab1");

  return (
    <div>
      <div className="tabs">
        <div className="tab-header">
          <button className="tab-button standardButton active" data-tab="tab1">
            {tab1}
          </button>
          <button className="tab-button standardButton" data-tab="tab2">
            {Tab2}
          </button>
          <button className="tab-button standardButton" data-tab="tab3">
            {Tab3}
          </button>
        </div>
        <div className="tab-content">
          <div className="tab-pane active" data-tab="tab1">
            {child1}
          </div>
          <div className="tab-pane" data-tab="tab2">
            {child2}
          </div>
          <div className="tab-pane tabThree" data-tab="tab3">
            {child3}
          </div>
        </div>
      </div>
    </div>
  );
}
