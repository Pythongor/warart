import React from "react";
import { connect } from "react-redux";
import cn from "classnames";
import { StateType } from "ducks/types";
import { setColorTheme } from "ducks/actions";
import Moon from "assets/images/moon.svg";
import Sun from "assets/images/sun.svg";
import styles from "../header.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;

const ThemeSwitch: React.FC<StateProps & DispatchProps> = ({
  colorTheme,
  setColorTheme,
}) => {
  const reversedTheme = colorTheme === "dark" ? "light" : "dark";
  const logo = { dark: Moon, light: Sun }[reversedTheme];
  return (
    <img
      className={cn(styles.themeIcon, {
        [styles.themeIcon__moon]: reversedTheme === "dark",
      })}
      onClick={() => {
        setColorTheme(reversedTheme);
      }}
      src={logo}
      alt={reversedTheme}
    ></img>
  );
};

const MSTP = ({ colorTheme }: StateType) => ({
  colorTheme,
});

const MDTP = { setColorTheme };

export default connect(MSTP, MDTP)(ThemeSwitch);
