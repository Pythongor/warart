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
  disabled?: boolean;
};

const Button: React.FC<OwnProps> = ({
  text,
  onClick,
  type = "yellow",
  customClass,
  link,
  disabled,
}) => {
  return link ? (
    <Link
      to={link}
      className={cn(
        styles.button,
        { [styles.button__blue]: type === "blue" },
        { [styles.button__disabled]: disabled },
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
        { [styles.button__blue]: type === "blue" },
        { [styles.button__disabled]: disabled },
        customClass || null
      )}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
