import React from "react";
import style from "./ButtonBad.module.css"

const ButtonBad = (list) => {
  return (
    <div className={style.button}>
      <button className={style.buttonGood}>!</button>
    </div>
  );
};
export default ButtonBad;
