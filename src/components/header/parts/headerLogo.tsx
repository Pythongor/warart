import React from "react";
import { Link } from "react-router-dom";
import Logo from "assets/images/logo.svg";
import LogoText from "assets/images/logoText.svg";
import styles from "../header.module.scss";

const HeaderLogo = () => (
  <Link to="/" className={styles.logoContainer}>
    <img src={LogoText} className={styles.logoText} alt="Warart" />
    <img src={Logo} className={styles.logo} alt="Warart logo" />
  </Link>
);

export default HeaderLogo;
