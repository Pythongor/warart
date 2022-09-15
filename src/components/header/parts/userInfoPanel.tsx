import React from "react";
import cn from "classnames";
import Avatar from "assets/images/avatar.svg";
import Notification from "assets/images/notification.svg";
import Plane from "assets/images/paper-plane.svg";
import styles from "../header.module.scss";

const UserInfoPanel = () => (
  <>
    <img src={Avatar} alt="" className={styles.icon} />
    <img
      src={Notification}
      alt=""
      className={cn(styles.icon, styles.icon__bell)}
    />
    <img src={Plane} alt="" className={styles.icon} />
  </>
);

export default UserInfoPanel;
