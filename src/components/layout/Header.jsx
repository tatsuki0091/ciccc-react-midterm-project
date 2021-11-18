import React from "react";
import style from "./layout.module.css";

const Header = (props) => {
  return (
    <header className={style.header}>
      <h2>{props.text}</h2>
    </header>
  );
};

export default Header;
