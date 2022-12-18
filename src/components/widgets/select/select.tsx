import React from "react";
import styles from "./select.module.scss";

type OwnProps = {
  options: { value: string; text: string }[];
};

const Select: React.FC<OwnProps> = ({ options }) => {
  return (
    <select className={styles.select}>
      {options.map(({ value, text }) => (
        <option key={value} value={value}>
          {text}
        </option>
      ))}
    </select>
  );
};

export default Select;
