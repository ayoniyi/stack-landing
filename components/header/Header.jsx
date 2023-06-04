import React from "react";
import style from "./Header.module.scss";
import Image from "next/image";
import Logo from "./logo.svg";

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.left}>
          <Image src={Logo} alt="logo" />
        </div>
        <div className={style.right}>
          <button>Get Started</button>
        </div>{" "}
      </div>
    </div>
  );
};

export default Header;
