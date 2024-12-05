import React from "react";
import styles from "./header.module.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.container}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="CurrenTcy Logo" />
      </Link>
    </header>
  );
};

export default Header;
