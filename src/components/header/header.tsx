import React, { useState } from "react";
import cn from "classnames";
import { connect } from "react-redux";
import { StateType } from "ducks/types";
import {
  Links,
  LangSelect,
  AuthButtons,
  UserInfoPanel,
  HeaderLogo,
  // ThemeSwitch,
} from "./parts";
import styles from "./header.module.scss";

type StateProps = ReturnType<typeof MSTP>;

const Header: React.FC<StateProps> = ({ isLoggedIn }) => {
  // console.log(window.matchMedia("(prefers-color-scheme:dark)"));
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div
        className={cn(styles.menuWrapper, {
          [styles.menuWrapper__open]: isOpen,
        })}
      >
        <div
          className={cn(styles.buttonWrapper, {
            [styles.buttonWrapper__open]: isOpen,
          })}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={cn(styles.button, {
              [styles.button__open]: isOpen,
            })}
          ></div>
        </div>
        <div
          className={cn(styles.linksWrapper, {
            [styles.linkWrapper__open]: isOpen,
          })}
        >
          <Links closeCallback={() => setIsOpen(!isOpen)} />
        </div>
        <div className={styles.rightGroup}>
          <LangSelect />
          {/* <ThemeSwitch /> */}
          <div className={styles.rightSubgroup}>
            {isLoggedIn ? <UserInfoPanel /> : <AuthButtons />}
          </div>
        </div>
      </div>
      <HeaderLogo />
    </div>
  );
};

const MSTP = ({ isLoggedIn }: StateType) => ({
  isLoggedIn,
});

export default connect(MSTP)(Header);
