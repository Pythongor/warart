import React, { useRef, useState, useEffect } from "react";
import cn from "classnames";
import styles from "./input.module.scss";

type OwnProps = {
  name?: string;
  type?: string;
  initialValue?: string;
  initialChecked?: boolean;
  // value?: string;
  // checked?: boolean;
  placeholder?: string;
  labelClass?: string;
  inputClass?: string;
  onChange?: (value: string) => void;
  onCheck?: (value: boolean) => void;
};

const Input: React.FC<OwnProps> = ({
  name,
  type = "text",
  initialValue = "",
  initialChecked = false,
  labelClass,
  inputClass,
  placeholder,
  onChange,
  onCheck,
}) => {
  useEffect(() => {
    setValue(initialValue);
    setChecked(initialChecked);
  }, [initialValue, initialChecked]);

  const ref = useRef(null);
  const [value, setValue] = useState(initialValue);
  const [checked, setChecked] = useState(initialChecked);
  const element =
    type === "textarea" ? (
      <textarea
        maxLength={350}
        className={cn(styles.input, inputClass)}
        placeholder={placeholder}
        onChange={(ev) => {
          onChange && onChange(ev.target.value);
          setValue(value);
        }}
        value={value}
        ref={ref}
      />
    ) : (
      <input
        type={type}
        className={cn(styles.input, inputClass)}
        placeholder={placeholder}
        ref={ref}
        onChange={(ev) => {
          onChange && onChange(ev.target.value);
          onCheck && onCheck(ev.target.checked);
          setValue(ev.target.value);
          setChecked(ev.target.checked);
        }}
        value={value}
        checked={checked}
      />
    );
  return (
    <label className={cn(styles.label, labelClass)}>
      <span className={styles.labelText}>{type !== "checkbox" && name}</span>
      {element}
      {type === "checkbox" && name}
    </label>
  );
};

export default Input;
