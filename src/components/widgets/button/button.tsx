import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./button.module.scss";

type OwnProps = {
  text: string;
  onClick?: () => void;
  type?: "yellow" | "blue";
  customClass?: string;
  link?: string;
};

const Button: React.FC<OwnProps> = ({
  text,
  onClick,
  type = "yellow",
  customClass,
  link,
}) => {
  return link ? (
    <Link
      to={link}
      className={cn(
        styles.button,
        { [styles.button_blue]: type === "blue" },
        customClass || null
      )}
      onClick={onClick}
    >
      {text}
    </Link>
  ) : (
    <button
      className={cn(
        styles.button,
        { [styles.button_dark]: type === "blue" },
        { [styles.button_blue]: type === "blue" },
        customClass || null
      )}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
