import React, { Component } from "react";

import style from "./App.module.css";
import elements from "./data/elements.json";
import lanthanoids from "./data/lanthanoids.json";
import actinides from "./data/actinides.json";

class App extends Component<{}, {}> {
  render() {
    return (
      <div className={style.container}>
        <p>Periodic table</p>
        <div className={style.table}>
          {elements.map(element => {
            return (
              <div
                className={style.element}
                data-element={element.number}
                key={element.number}
              >
                <span className={style.number}>{element.number}</span>
                <span className={style.symbol}>{element.symbol}</span>
                <span className={style.name}>{element.name}</span>
              </div>
            );
          })}
          {lanthanoids.map(element => {
            return (
              <div
                className={style.element}
                data-element={element.number}
                key={element.number}
              >
                <span className={style.number}>{element.number}</span>
                <span className={style.symbol}>{element.symbol}</span>
                <span className={style.name}>{element.name}</span>
              </div>
            );
          })}
          {actinides.map(element => {
            return (
              <div
                className={style.element}
                data-element={element.number}
                key={element.number}
              >
                <span className={style.number}>{element.number}</span>
                <span className={style.symbol}>{element.symbol}</span>
                <span className={style.name}>{element.name}</span>
              </div>
            );
          })}
          <div className={style.lanthanoids}>lanthanoids</div>
          <div className={style.actinides}>actinides</div>
        </div>
      </div>
    );
  }
}

export default App;
