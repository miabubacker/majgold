import { React, useState, useEffect } from "react";
import "./MenuPop.scss";
import { MenuPopData } from "../../Data/ProductDetail";

function Menupop(props) {
  const { popupMenu, popmenuData, MainPageActions, menuData, SetLine } = props;
 
  const handleMouseOut = (e) => {
    MainPageActions.popupmenu("");
  };
  const datas = Object.entries(menuData).splice(0, 3);

  return (
    <>
      <section
        className="menuPopContainer"
        onMouseLeave={(e) => {
          handleMouseOut(e);
        }}
      >
        {datas.map(([header, value], index) => (
          <div className="columnContainer" key={index}>
            <h5>{header}</h5>
            {value.map((s, index) => (
              <ul key={index}>
                <li>{s}</li>
              </ul>
            ))}
          </div>
        ))}

        {/* <img width={20} height={20} src={menuData["imgs"].imgs}/> */}
        {/* {menuData["imgs"].word} */}
        {menuData["imgs"].map(({ imgs, word }, index) => (
          <div className="imgContainer" key={index}>
            <img src={imgs} className="imgcover" /> {word}
          </div>
        ))}
      </section>
      
    </>
  );
}

export default Menupop;
