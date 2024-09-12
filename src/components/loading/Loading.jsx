import React from "react";
import style from "./Loadin.module.css";
import ReactLoading from "react-loading";
// "blank" | "balls" | "bars" | "bubbles" | "cubes" | "cylon" | "spin" | "spinningBubbles" | "spokes";
export const Loading = () => {
  return (
    <div className={style.div_loading}>
      <ReactLoading type={"bars"} color="#456" />
    </div>
  );
};
