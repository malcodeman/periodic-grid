import React, { Component } from "react";

import style from "./App.module.css";
import elements from "./elements.json";

class App extends Component<{}, {}> {
  render() {
    return (
      <div className={style.container}>
        <p>Periodic table</p>
        <div className={style.table}>
          {elements.map(element => {
            return (
              <div className={style.element}>
                <span className={style.number}>{element.number}</span>
                <span className={style.symbol}>{element.symbol}</span>
                <span className={style.name}>{element.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
