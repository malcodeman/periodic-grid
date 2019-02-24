import React, { Component } from "react";

import style from "./App.module.css";
import elements from "./data/elements.json";

class App extends Component<{}, {}> {
  getStyle = (category: string): string => {
    switch (category) {
      case "diatomic nonmetal":
        return `${style.element} ${style.halogenCategory}`;
      case "noble gas":
        return `${style.element} ${style.nobleGasCategory}`;
      case "alkali metal":
        return `${style.element} ${style.alkaliMetalCategory}`;
      case "alkaline earth metal":
        return `${style.element} ${style.alkalineEarthMetalCategory}`;
      case "metalloid":
        return `${style.element} ${style.metalloidCategory}`;
      case "polyatomic nonmetal":
        return `${style.element} ${style.otherNonmetalCategory}`;
      case "post-transition metal":
        return `${style.element} ${style.postTransitionMetalCategory}`;
      case "lanthanide":
        return `${style.element} ${style.lanthanideCategory}`;
      case "actinide":
        return `${style.element} ${style.actinidesCategory}`;
      case "transition metal":
        return `${style.element} ${style.transitionMetalCategory}`;
      case "unknown":
        return `${style.element} ${style.unknownCategory}`;
      default:
        return style.element;
    }
  };
  render() {
    return (
      <div className={style.container}>
        <p>Periodic grid</p>
        <div className={style.grid}>
          {elements.map(element => {
            return (
              <div
                className={this.getStyle(element.category)}
                data-element={element.number}
                key={element.number}
              >
                <span className={style.name}>{element.name}</span>
                <span className={style.symbol}>{element.symbol}</span>
                <footer className={style.footer}>
                  <span className={style.atomicMass}>
                    {element.atomic_mass.toLocaleString()}
                  </span>
                  <span className={style.number}>{element.number}</span>
                </footer>
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
