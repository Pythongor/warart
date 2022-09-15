import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import styles from "./accordion.module.scss";

type OwnProps = {
  isOpen?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

const Accordion: React.FC<OwnProps> = ({
  isOpen = false,
  children,
  onClick,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | null>(null);
  useEffect(() => {
    if (!height && ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  }, [ref, height]);
  const maxHeight = isOpen ? (height ? height + 10 : undefined) : 0;
  // console.log("isOpen", isOpen);
  // console.log("maxHeight", maxHeight);
  // console.log("height", height);
  // console.log("\n");
  return (
    <div
      className={cn(styles.wrapper, { [styles.wrapper__open]: isOpen })}
      onClick={onClick}
    >
      <div className={styles.contentWrapper} style={{ maxHeight }} ref={ref}>
        {children}
      </div>
      <div className={styles.divider} />
    </div>
  );
};

export default Accordion;
